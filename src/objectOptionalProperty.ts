/**
 *? Typescript Optional properties
 * 
 * TODO: See the link:
 * 
 * https://www.w3schools.com/typescript/typescript_object_types.php
 * 
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
 * 
 *? Optional Properties
 * 
 * Optional properties are properties that don't have to be defined in the object definition.
 * 
 * Example without an optional property
 */

/*  const car2: {
    type: string,
    mileage: number
 } = { //! Error: Property 'mileage' is missing in type '{type: string}' but required in type '{type: string;
       //! mileage: number}'.
    type: 'Toyota'
 }
 car2.mileage = 2000 */

 // Example wit an optional property
 const car2: {
    type: string,
    mileage?: number //* this ? say that property is optional
 } = {// no error
    type: 'Toyota'
 }
 car2.mileage = 2000
 console.log(car2) // return { type: 'Toyota', mileage: 2000 }