/**
 *? Typescript - Union Types
 * 
 * TODO: See the link:
 * 
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
 * 
 * 
 *? Union Types
 * 
 * Typescript's type system allows you to build new types out of existing ones using
 * a large variety of operators. 
 * Now that we know how to write a few types, it's time to start combining them in
 * interesting ways.
 * 
 *? Defining a Union Type
 * 
 * The first way to combining types you might see is a union type. 
 * A union type is a type formed from two or more other types, representing values
 * that may be any one of those types.
 * We refer to each of these types as the union's members.
 * Let's write a function that can operate on strings or numbers:
 */

function printId( id: number | string ) {
    console.log('You ID is: ' + id)
}
// OK
printId(101) // return You ID is: 101
// OK
printId('202') // return You ID is: 202

//* printId({myId: 22342}) 
//! error: Argument of type '{ myId: number; }' is not assignable to parameter of type 'string | number'.

/**
 * Working with Union Types
 * 
 * It's easy to provide a value matching a union type - simply provide a type matching
 * any of the union's members. If you have a value of a union type, how do you work with it?
 * Typescript will only allow an operation if it is valid for every member of the union.
 * For example, if you have the union string | number, you can't use methods that are only
 * available on string: 
 */

/**
 **  function printId1(id: number | string) {
 **   console.log(id.toUppercase())
} */
/**
 *! error: Property 'toUppercase' does not exist on type 'string | number'.
 *! Property 'toUppercase' does not exist on type 'string'.
 */

/**
 * The solution is to narrow the union with code, the same as you would in Javascript
 * without type annotations. Narrowing occurs when Typescript can deduce
 * a more specific type for a value based on the structure of the code.
 * For example, Typescript knows that only a string value will have a typeof value 'string:
 */

function printId1(id: number | string) {
    if (typeof id === 'string') {
        // In this branch, id is of type 'string'
        console.log('Your ID of type string is: '+id.toUpperCase())
    } else {
        // Here, id is of type 'number'
        console.log('Your ID is: '+id)
    }
}

console.log(printId1(150))   // return You ID is: 150
                             // undefined
console.log(printId1('200')) // return Your ID of type string is: 200
                             // undefined
