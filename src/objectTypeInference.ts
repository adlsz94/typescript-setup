/**
 * Typescript Object Type Inference
 * 
 * TODO: See the link:
 * 
 * https://www.w3schools.com/typescript/typescript_object_types.php
 * 
 * Typescript can infer the types of properties based on their values.
 * Example
 */
const car1 = {
    type: 'Toyota'
}
car1.type = 'Ford' // no error
//! car1.type = 2 // Error: type 'number' is no assignable to type 'string'.

console.log(car1) // return { type: 'Ford' }