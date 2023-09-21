"use strict";
/**
 * TODO: See the link:
 *
 * https://www.w3schools.com/typescript/typescript_simple_types.php
 *
 *? Error In Type Assignment
 *
 *! TypeScript will throw an error if data types do not match.
 *
 * Example
 */
let firstPet = 'Popy'; // type string
/* firstPet = 5   type number is not assignable to type string

 typescript will throw an error if data types don`t match */
/**
 * Implicit type assignment would have made firstName less noticeable as a string,
 * but both will throw an error:
 * Example
 */
let firstCar = "Camaro"; // inferred to type string
//  firstCar = 33 // attempts to re-assign the value to a different type
//! JavaScript will not throw an error for mismatched types.
