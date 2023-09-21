/**
 * Typescript
 * 
 * TODO: See the link:
 * 
 * https://www.w3schools.com/typescript/typescript_simple_types.php
 * 
 *? Unable to Infer
 * 
 *! TypeScript may not always properly infer what the type of a variable may be. 
 *! In such cases, it will set the type to any which disables type checking.
 * Example
 */

 // Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
const json = JSON.parse("55");
// The JSON.parse() static method parses a JSON string, 
//constructing the JavaScript value or object described by the string

// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json) // return number

/**
 * TODO This behavior can be disabled by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json.
 * TODO That is a JSON config file for customizing how some of TypeScript behaves.
 * 
 *! Note: you may see primitive types capitalized like Boolean.
   boolean !== Boolean

   For this tutorial just know to use the lower-cased values, the upper-case ones are for very specific circumstances.
 */
