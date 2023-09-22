/**
 *? TypeScript Special Types
 * 
 * TODO: See the link:
 * 
 ** https://www.w3schools.com/typescript/typescript_special_types.php
 * 
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * 
 * TypeScript has special types that may not refer to any specific type of data.
 * 
 *? Type: any
 * 
 * TypeScript also has a special type, any, that you can use whenever you don’t want a particular 
 * value to cause typechecking errors. When a value is of type any, you can access any properties 
 * of it (which will in turn be of type any), call it like a function, assign it to (or from) a
 * value of any type, or pretty much anything else that’s syntactically legal:
 * 
** let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

*   TODO: See the link:
**  https://www.typescriptlang.org/play?#code/DYUwLgBA9gRgVgLggQwHYE8IF4IG8IAeSADBAL4DcAsAFAD0dEAclKiNAGYRgAW7HUYMCgB3AJaoA5hGASQAZ04QAxlAAm7cUO48ATqJVQAtgAcxoXRBC79u+QDpaDCAFV5E6QAM06TxDVi8sgwoIrI2hwArrq81tzoJuzKfMoA1h4ANCioahBikIEo8vKRRiBqTozoUJEQqagGsVaoAG5i+qhlqJAw4GBxvGgQACoJIADKyrpiJmCONLBw9gJQABQAlNQL8Btbi-YwyJY4AIzExHvw2BAARHxCUDdbqqjykKhIqKW9x9DwFEA

** obj.foo(); // [ERR]: obj.foo is not a function 
** obj();
** obj.bar = 100;
** obj = "hello";
** const n: number = obj;
*/

/**
 *?  any
 * any is a type that disables type checking and effectively allows all types to be used.
 * The example below does not use any and will throw an error:
 */

/**
 *?  Example without any
 * 
 **  let u = true;
 **  u = "string";     // Error: Type 'string' is not assignable to type 'boolean'.
 **  Math.round(u);    // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'
 */
 
//? Example with any

let v: any = true;
v = "string"; // no error as it can be "any" type
console.log(v) // return string
v = 5
Math.round(v); // no error as it can be "any" type
console.log(v) // return 5
console.log(typeof v) // return number

/**
 *! any can be a useful way to get past errors since it disables type checking, but TypeScript will 
 *! not be able provide type safety, and tools which rely on type data, such as auto completion, 
 *! will not work. Remember, it should be avoided at "any" cost...
 */

 /**
  *? noImplicitAny
  *! When you don’t specify a type, and TypeScript can’t infer it from context, 
  *! the compiler will typically default to any.
  * You usually want to avoid this, though, because any isn’t type-checked. 
  * TODO: Use the compiler flag noImplicitAny to flag any implicit any as an error.
  * TODO: set noImplicitAny: true, on tsconfig.json.
  * 
  */