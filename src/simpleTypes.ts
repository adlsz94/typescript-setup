/**
 *? Typescript Simple Types
 * 
 * TODO: See the link:
 * 
 ** https://www.w3schools.com/typescript/typescript_simple_types.php
 * 
 * TypeScript supports some simple types (primitives) you may know.
 * 
 * There are three main primitives in JavaScript and TypeScript.
 **   boolean - true or false values
 **  number - whole numbers and floating point values
 **   string - text values like "TypeScript Rocks"
 * 
 * There are also 2 less common primitives used in later versions of Javascript and TypeScript.
 **   bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
 **   symbol are used to create a globally unique identifier.
 * 
 */

 let isAdult: boolean = true
 let adult: string = 'is adult'
 let minorAge: string = 'is minor age'

 let checkMajorAge = (age : number = 0) => {
    age >= 18 ? console.log(`${isAdult}, ${adult}`) : console.log(`${minorAge}`)
    return checkMajorAge
 }

checkMajorAge(21)