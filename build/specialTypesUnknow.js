"use strict";
/**
 *? Typescript
 *
 * TODO: See the link:
 *
 ** https://www.w3schools.com/typescript/typescript_special_types.php
 *
 *
 *? Type: unknown
 *
 * unknown is a similar, but safer alternative to any.
 * TypeScript will prevent unknown types from being used, as shown in the below example:
 */
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting.
// TODO: Compare the example above to the previous example(specialTypesAny.ts), with any.
/**
 *! unknown is best used when you don't know the type of data being typed. To add a type later,
 *! you'll need to cast it.
 * Casting is when we use the "as" keyword to say property or variable is of the casted type.
 *
 *! unknown é melhor usado quando você não sabe o tipo de dados que estão sendo digitados.
 *! Para adicionar um tipo mais tarde,
 *! você precisará convertê-lo.
 *  Casting é quando usamos a palavra-chave "as" para dizer que a propriedade ou variável é do tipo casted.
 */
