/**
 *? Typescript Arrays
 * 
 * TODO: See the links:
 * 
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 * 
 * https://www.w3schools.com/typescript/typescript_arrays.php
 * 
 * TypeScript has a specific syntax for typing arrays.
 * 
 * TODO: Read more about arrays in:
 * 
 ** https://www.w3schools.com/js/js_arrays.asp
 * 
 * Example
 */

 const names: string[] = []
 names.push('Dylan')
 console.log(names) // return [ 'Dylan' ]
 //* names.push(3) // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
 names.push('Carla') // type string
 console.log(names) // return [ 'Dylan', 'Carla' ]