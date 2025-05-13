// console.log("hello world");
// let age: number = 20;
//age = "a";

// let age: number = 20;
// if (age < 50) age += 10;

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_publised: boolean = true;
let level;
level = 1;
level = "a";

///=========Functions
// typescript look at the type of the return value. It's void meaning this function does not return a vallue.
// typescript compiler has inferred the type of the return value for us. it is great.
// annotate the return type.
//tsconfig.json
//"noUnusedLocals": true ,
//"noUnusedParameters": true,
//"noImplicitReturns": true,
//

//Q1: why was the typescript warning for income parameter?

function calculateTax1(income: number): number {
  return 0;
}

//A1:
//  income is declared but its value is never read.
// Fixed, but still error is number returns. because JavaScript is always return undefined.
//
function calculateTax11(income: number): number {
  if (income < 10_000) return income * 1.2;
  //undefined
}

function calculateTax111(income: number): number {
  if (income < 10_000) return income * 1.2;
  return income * 1.3;
}

//Q2: why was the typescript warning?
function calculateTax2(income: number): number {
  let x; //warning
  if (income < 10_000) return income * 1.2;
  return income * 1.3;
}
//A2: x never used.
// "noUnusedLocals": true /* Enable error reporting when local variables aren't read. */,
// Fixed deleting x value.
function calculateTax22(income: number): number {
  if (income < 10_000) return income * 1.2;
  return income * 1.3;
}

//Q3
// warning taxYear parameter
function calculateTax3(income: number, taxYear: number): number {
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}
//A3: fixed
function calculateTax33(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax33(10_000, 2022, 1); //we should pass exactly two arguments.

//Q4
// warning taxYear parameter
function calculateTax4(income: number, taxYear?: number): number {
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}
//A4
//Solution1 - Use ? option and || for taxYear
calculateTax4(10_000); //error is gone.

function calculateTax44(income: number, taxYear?: number): number {
  if (taxYear || 2022) return income * 1.2;
  return income * 1.3;
}

/// Solution 2 - to set default value.
function calculateTax444(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax444(10_000); //error is gone.

//tsconfig.json
//"noUnusedLocals": true /* Enable error reporting when local variables aren't read. */,
//"noUnusedParameters": true /* Raise an error when a function parameter isn't read. */,
//"noImplicitReturns": true /* Enable error reporting for codepaths that do not explicitly return in a function. */,
//Best practice is always annotate functions parameters and return types and enable three compiler options.
