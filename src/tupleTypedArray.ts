/**
 *? Typescript Tuples
 * 
 * TODO: See the link:
 * 
 ** https://www.w3schools.com/typescript/typescript_tuples.php
 * 
 *? Typed Arrays
 * 
 * A tuple is a typed array with a pre-defined length(fixed number of elements) and types for each index.
 * Tuples are great because they allow each element in the array to be a known type of value.
 * To define a tuple, specify the type of each element in the array:
 * Example
 */

 // Define our tuple
let ourTuple: [number, boolean, string]

// initialize correctly
ourTuple = [5, false, 'Coding God was here']
console.log(ourTuple) // return [ 5, false, 'Coding God was here' ]
// As you can see we have a nuber, boolean and a string.

// But what happens if we try to set them in the wrong order:
// Example
// Define our tuple
// let ourTuple1: [number, boolean, string]

//! initialized incorrectly which throws an error
// ourTuple1 = [false, 'Coding God was mistaken', 5]
/** 
 *! Error: type 'boolean' is not assignable to type 'number'
 *! Error: type 'string' is not assignable to type 'boolean'
 *! Error: type 'number' is not assignable to type 'string'
 * 
 *! Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
*/
// console.lot(ourTuple1)