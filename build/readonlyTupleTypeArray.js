"use strict";
/**
 * Typescript Readonly Tuple
 *
 * TODO: See the link:
 *
 * https://www.w3schools.com/typescript/typescript_tuples.php
 *
 *? Readonly Tuple
 *
 * A good practice is to make your tuple readonly.
 * Tuples only have strongly defined types for the initial values:
 * Example
 */
// define our tuple
let ourTuple2;
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong'); // add to final of array
console.log(ourTuple2); // return [ 5, false, 'Coding God was here', 'Something new and wrong' ]
// You see the new valueTuples only have strongly defined types for the initial values:
// Example readonly tuple
// define our readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
console.log(ourReadonlyTuple); // return [ 5, true, 'The Real Coding God' ]
//! throws error as it is readonly.
//* ourReadonlyTuple.push('Coding God took a day off')
//! Error: Property 'push' does not exist on type 'readonly' [number, boolean, string]
//* console.log(ourReadonlyTuple)
/**
 * TODO: To learn more about access modifiers like readonly go to our section on them here:
 *
 ** https://www.w3schools.com/typescript/typescript_classes.php
 *
 * If you have ever used React before you have worked with tuples more than likely.
 *
 ** useState returns a tuple of the value and a setter function.
 *
 ** const [firstName, setFirstName] = useState('Dylan') is a common example.
 *
 * Because of the structure we know our first value in our list will be a
 * certain value type in this case a string and the second value a function.
 */
