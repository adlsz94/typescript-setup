"use strict";
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
const car = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009
};
console.log(car); // return { type: 'Toyota', model: 'Corolla', year: 2009 }
/**
 * Object types like this can also be written separately, and even be reused,
 *TODO: look this links about 'interfaces', for more details:
 *
 ** https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
 *
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 *
 *? Object Types examples more
 *
 * Apart from primitives, the most common sort of type you’ll encounter is an object type.
 * This refers to any JavaScript value with properties, which is almost all of them! To define
 * an object type, we simply list its properties and their types.
 * For example, here’s a function that takes a point-like object:
 */
// The parameter 's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y values is " + pt.y);
}
printCoord({ x: 3, y: 7 });
/**
 * return
 * The coordinate's x value is 3
 * The coordinate's y values is 7
 *
 *? Explaination
 *
 * Here, we annotated the parameter with a type with two properties - x and y - which are both
 * of type number. You can use(,) or (;) to separate the properties, and the last separator is
 * optional either way.
 * The type part of each property is also optional.
 *! If you don't specify a type, it will be assumed to be any.
 */ 
