"use strict";
/**
 * typescript
 *
 * TODO: See the link:
 *
 ** https://www.w3schools.com/typescript/typescript_arrays.php
 *
 *? Type Inference
 *
 * TypeScript can infer the type of an array if it has values.
 * Example
 */
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
console.log(numbers); // return [ 1, 2, 3, 4 ]
// TODO: comment line below out to see the successful assignment
//numbers.push('2') //! Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0]; // no error
console.log(head); // return 1
