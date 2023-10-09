/**
 *? Typescript 
 * 
 *? Extending Interfaces
 *
 * TODO: See the links:
 * 
 ** https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php 
 * 
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 * 
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 * 
 * Interfaces can extend each other's definition.
 * Extending an interface means you are creating a new interface
 * with the same properties as the original, plus something new.
 * Example
 */

interface Rectangle1 {
    height: number
    width: number
}

interface ColoredRectangle extends Rectangle1 {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
}

console.log(coloredRectangle) // { height: 20, width: 10, color:'red' }