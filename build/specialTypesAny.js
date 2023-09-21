"use strict";
/**
 *? TypeScript Special Types
 *
 * TODO: See the link:
 *
 ** https://www.w3schools.com/typescript/typescript_special_types.php
 *
 * TypeScript has special types that may not refer to any specific type of data.
 *
 *? Type: any
 *
 * any is a type that disables type checking and effectively allows all types to be used.
 * The example below does not use any and will throw an error:
 * Example without any
 */
/*  let u = true;
 u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
 Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number' */
// Example with any
let v = true;
v = "string"; // no error as it can be "any" type
console.log(v);
v = 5;
Math.round(v); // no error as it can be "any" type
console.log(v);
console.log(typeof v);
/**
 *! any can be a useful way to get past errors since it disables type checking, but TypeScript will
 *! not be able provide type safety, and tools which rely on type data, such as auto completion,
 *! will not work. Remember, it should be avoided at "any" cost...
 */ 
