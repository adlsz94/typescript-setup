/**
 * TODO: See the link:
 * 
 ** https://www.w3schools.com/typescript/typescript_simple_types.php
 * 
 *? Implicit Type
 * 
 * Implicit - TypeScript will "guess" the type, based on the assigned value:
 */

 let secondName = "Ken" // inferred to type string.
 console.log(typeof secondName) // return string

 /**
  *! Note: Having TypeScript "guess" the type of a value is called infer.
  * 
  * Implicit assignment forces TypeScript to infer the value.
  * 
  ** Implicit type assignment are shorter, faster to type, and often used when developing and testing.
  */