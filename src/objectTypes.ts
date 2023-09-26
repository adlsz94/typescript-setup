/**
 *? Typescript Object Types
 * 
 * TODO: See the link:
 * 
 ** https://www.w3schools.com/typescript/typescript_object_types.php
 * 
 * Typescript has a specific syntax for typing objects.
 * 
 * TODO: Read more about objects javascript here:
 * 
 ** https://www.w3schools.com/js/js_objects.asp
 * 
 * Example
 */

 const car: {
    type: string,
    model: string,
    year: number
 } = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009
 }

console.log(car) // return { type: 'Toyota', model: 'Corolla', year: 2009 }

/**
 * Object types like this can also be written separately, and even be reused,
 *TODO: look this links about 'interfaces', for more details:
 * 
 ** https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
 * 
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 * 
 */