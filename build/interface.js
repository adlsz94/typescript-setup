"use strict";
/**
 *? Typescript Interfaces
 *
 * TODO: See the links:
 *
 ** https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
 *
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 *
 *? Interfaces
 *
 * Interfaces are similar to type aliases, except they only apply to object types.
 * Example
 */
const rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle); // { height: 20, width: 10 }
function printCoord2(pt) {
    console.log("The coordinates's x value is " + pt.x);
    console.log("The coordinates's y value is " + pt.y);
}
printCoord2({ x: 100, y: 120 }); // The coordinates's x value is 100
// The coordinates's y value is 120
/**
 * Just like when we used a type alias above, the example works just as if we had used an anonymous object type.
 * TypeScript is only concerned with the structure of the value we passed to printCoord - it only cares that it
 * has the expected properties. Being concerned only with the structure and capabilities of types is why we call
 * TypeScript a structurally typed type system.
 */ 
