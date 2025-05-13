//Q:
// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);
// console.log(customer.birthday); ///ERROR // tsconfig.json - "strictNullChecks": true

//A-1
// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);
// //optional property access operator
// console.log(customer?.birthday); // ? undefined

// let customer1 = getCustomer(1);
// //optional property access operator
// console.log(customer1?.birthday); // ? 2025-05-13T22:38:52.611Z

//A-2
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday?.getFullYear()); // ? undefined

//Optional element access operator
//if(customers !== null && customers !== undefined)
//customers[0]
//customers?[0]

///Optional call

//let log: any = (message: string) => console.log(message);
let log: any = null;
log("a"); //crash

//Solution
log?.("a"); //crash
