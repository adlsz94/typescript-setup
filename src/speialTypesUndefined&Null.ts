/**
 * Typescript
 * 
 * TODO: See the link:
 * 
 * https://www.w3schools.com/typescript/typescript_special_types.php
 * 
 *? Type: undefined & null
 * 
 * undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
 * 
 */
 let y: undefined = undefined;
 console.log(typeof y) // return undefined

 let z: null = null;
 console.log(typeof z) // return object
 
 //! These types don't have much use unless strictNullChecks is enabled in the "tsconfig.json" file.