# TypeScript
/*
- 0:00:00 Introduction - DONE
- 0:00:52 Prerequisites - DONE
- 0:01:28 How to Take This Course - DONE
- 0:02:57 What is TypeScript? - DONE
- 0:07:38 Setting Up the Development Environment - DONE
- 0:09:30 Your First TypeScript Program - DONE
- 0:13:20 Configuring the TypeScript Compiler - DONE
- 0:17:24 Debugging TypeScript Applications - Done
- 0:22:55 Fundamentals - Done
- 0:23:23 Built-In Types - Done
*/
## The any Type

```js
function render(document: any) {
  console.log(document);
}
```

<hr />

## Arrays

**Q:**

- JavaScript, each element in array can be of different type.
- `let number = [1, 2, "3"]`
- An each element in JS array is dynamic, but if we pass this array to function as an argument, the 3rd one causes the issue.

**A:**

```js
let numbers1: number[] = [1, 2, 3]; //OK
let numbers2 = [1, 2, 3]; ///Typescript is guessing number[].
let numbers3 = []; ///Typescript is gussing any[]
let numbers4: number[] = []; //empty array should annotate a type to avoid any[].
numbers4[0] = 1;
numbers4[1] = 2;
```

- **code completion** or **intellisense** in an Editor is avaiable to use. This is the benefit for TypeScript.
- `numbers4.forEach(n =>n. ///code editor knows n is a number)`

<hr />

## Tuples

**Q: what is a Tuple?**

**A:**

- A tuple is a fixed length array where each element has a paticular type.
- A tuple is a typed array with a pre-defined length and types for each index.
- https://www.w3schools.com/typescript/typescript_tuples.php

```js
let user: [number, string] = [1, "Mosh"];
let user2: [number, string, boolean, number] = [1, "Mosh", true, 0]; // over three elements are not good.
```

<hr />

## Enums

**Q: what is ENUM?**

**A:**

- An enum is a group of constants (unchangeable variables).
- Method 1 - The size of T-shirts is constant; we can define three constants; small, medium and large.

```js
const small = 1;
const medium = 2;
const large = 3;
```

- In TypeScript, the first member, the value is 0.

```js
enum Size {
    Small = 1, //first member
    Medium = 2, //second member
    Large = 3, // third member
}
let mySize1: Size = Size.Medium;
console.log(mySize1); //2
```

<hr />

## Functions

- Best practice is always annotate functions parameters and return types and enable three compiler options.

```js
//tsconfig.json
"noUnusedLocals": true ,
"noUnusedParameters": true,
"noImplicitReturns": true,
```

**Q1: why was the typescript warning?**

```js
function calculateTax1(income: number): number {
  return 0;
}
```

**A1:**

- income is declared but its value is never read.
- Fixed, but still error is number returns. because JavaScript is always return undefined.

```js

function calculateTax11(income: number): number {
if (income < 10_000) return income \* 1.2;
//undefined
}

function calculateTax111(income: number): number {
if (income < 10_000) return income _ 1.2;
return income _ 1.3;
}
```

**Q2: why was the typescript warning?**

```js
function calculateTax2(income: number): number {
    let x; //warning
    if (income < 10_000) return income _ 1.2;
        return income _ 1.3;
}
```

**A2:**

- x is never used.
- "noUnusedLocals": true,
- Fixed deleting x value.

```js
function calculateTax22(income: number): number {
  if (income < 10 * 000) return income * 1.2;
  return income * 1.3;
}
```

**Q3**

- Warning taxYear parameter

```js
function calculateTax3(income: number, taxYear: number): number {
  if (income < 50000) return income * 1.2;
  return income * 1.3;
}
```

**A3:**

```js
function calculateTax33(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax33(10_000, 2022, 1); //we should pass exactly two arguments.
```

**Q4:**

- Warning taxYear parameter

```js
function calculateTax4(income: number, taxYear?: number): number {
  if (income < 50 * 000) return income * 1.2;
  return income * 1.3;
}
```

**A4**

- Solution #1 - Use ? option and || for taxYear
- calculateTax4(10_000); //error is gone.

```js
function calculateTax44(income: number, taxYear?: number): number {
    if (taxYear || 2022) return income _ 1.2;
    return income _ 1.3;
}
```

- Solution #2 - to set default value.

```js
function calculateTax444(income: number, taxYear = 2022): number {
    if (taxYear < 2022) return income _ 1.2;
    return income _ 1.3;
}
calculateTax444(10_000); //error is gone.
```

- 0:43:22 Objects
- 0:47:57 Advanced Types

## Type Aliases

**Q:**

- problem 1 - if you make another employee object, you have to repeat employee structure.
- problem 2 - other employee object might have other properties.
- problem 3 - it is hard to read to understand.

```js
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
```

**A:**

- Type alias = a custom type

```js
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
};

let employee: Employee = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);
    },
};
```

<hr />

## Union Types

**Q:**

```js
function kgToLbs(weight: number | string): number {}

kgToLbs(10);
kgToLbs("10kg");
```

**A:**

- Narrowing

```js
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");
```

**Reference:**

- [Union | (OR)](https://www.w3schools.com/typescript/typescript_union_types.php)

- Using the `|` we are saying our parameter is a `string` or `number`:

<hr />

- 0:52:40 Intersection Types
- 0:54:44 Literal Types
- 0:56:30 Nullable Types
- 0:59:06 Optional Chaining
