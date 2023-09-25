"use strict";
/**
 * Typescript
 *
 * TODO: See the links:
 *
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
 *
 ** https://www.w3schools.com/typescript/typescript_arrays.php
 *
 *? Readonly
 *
 ** The readonly keyword can prevent arrays from being changed.
 * Example
 */
//* const nomes: readonly string[] = ["Dulan"]
// The push method adds a new element to an array (at the end).
//* nomes.push('Jack') // Error: Property 'push' does not exist on type 'readonly string[]'.
//TODO: try removing the readonly modifier and see if it works?
//* console.log(nomes)
const nomes = ['Dulan']; // no readonly keyword
nomes.push('jack');
console.log(nomes); // return [ 'Dulan', 'jack' ]
