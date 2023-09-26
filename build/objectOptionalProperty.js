"use strict";
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
 * Object type can also specify that some or all of their properties are optional.
 * TODO: To do this, add a ? after the property name.
 *
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
const car2 = {
    type: 'Toyota'
};
car2.mileage = 2000;
console.log(car2); // return { type: 'Toyota', mileage: 2000 }
/*  // Other example of Optional Properties
* function printName(obj: {
*    first: string;
*    last?: string //* add optional property using ?
* }) {
    // Both ok
* }
* printName({first: "Bob"})
* printName({first: "Alice", last: "Alisson"})
* console.log(printName)
*/
/**
 * In Javascript, if you access a proterty that doesn't, you'll get the value 'undefined'
 * rather than a runtime error. Because of this, when you read from an optional property,
 * you'll have to check for 'undefined before using it.
 ** link: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
 */
function printName(obj) {
    //console.log( obj.last.toUpperCase())
    var _a;
    if (obj.last !== undefined) {
        //ok
        console.log(obj.first, obj.last.toUpperCase());
    }
    // A safe alternative using modern Javascript syntax:
    console.log(obj.first, (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
