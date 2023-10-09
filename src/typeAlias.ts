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

type Point = {
    x: number,
    y: number
 }

// Exactly the same as the earlier example
function printCoord1(pt: Point) {
    console.log("The coordinates's x value is " + pt.x)
    console.log("The coordinates's y value is " + pt.y)
 }

printCoord1({x: 100, y: 120}) // The coordinates's x value is 100
                               // The coordinates's y value is 120

/**
 * You can actually use a type alias to give a name to any type at all, not just an object type. 
 * For example, a type alias can name a union type:
 * 
 ** type ID = number | string
 * 
 *! Note that aliases are only aliases - you cannot use type aliases to create different/distinct “versions” of the same type. 
 *! When you use the alias, it’s exactly as if you had written the aliased type. In other words, this code might look illegal, 
 * !but is OK according to TypeScript because both types are aliases for the same type:
 */

/* 
* type UserInputSanitizedString = string

* function sanitizeInput(str: string) : UserInputSanitizedString {
*    return sanitize(str);
* }

** // Create a sanitized input
* let userInput = sanitizeInput(getInput())

* // Can still be re-assigned with a string though
* userInput = "new input" 
*/

/**
 * TypeScript allows types to be defined separately from the variables that use them.
 * Aliases and Interfaces allows types to be easily shared between different variables/objects.
 * 
 *? TYPE Aliases
 * 
 * Type Aliases allow defining types with a custom name (an Alias).
 * Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
 * Example
 */
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car3: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

console.log(car3) // { year: 2001, type: 'Toyota', model: 'Corolla' }

