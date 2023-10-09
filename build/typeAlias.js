"use strict";
/**
 *? Typescript Type Aliases
 *
 * TODO: See the links:
 *
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
 *
 ** https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
 *
 *? Type Aliases
 *
 * We have been using object types and union types by writing them directly in type annotations.
 * This is convenient, but it is common to want to use the same type more than once and refer to it by a single name.
 * A type alias is exactly that - a name for any type. The syntax for a type alias is:
 *
 * @alias Point
 * @type x: number
 * @type y: number
 */
// Exactly the same as the earlier example
function printCoord1(pt) {
    console.log("The coordinates's x value is " + pt.x);
    console.log("The coordinates's y value is " + pt.y);
}
printCoord1({ x: 100, y: 120 }); // The coordinates's x value is 100
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car3 = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car3); // { year: 2001, type: 'Toyota', model: 'Corolla' }
