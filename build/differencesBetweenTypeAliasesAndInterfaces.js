"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBear() {
    return {
        name: 'Bear',
        honey: true
    };
}
const bear = getBear();
bear.name = "Pufo";
bear.honey = false;
console.log(bear); // { name: 'Pufo', honey: false }
function getBear1() {
    return {
        name: 'Bear',
        honey: true
    };
}
const bear1 = getBear1();
bear1.name = "Pefi";
bear1.honey = true;
console.log(bear1); // { name: 'Pefi', honey: true }
function getCar() {
    return {
        brand: 'Ford',
        model: 'Mustang'
    };
}
const car = getCar();
car.brand = 'Volkswagen';
car.model = 'Gol';
console.log(car); // return { brand: 'Volkswagen', model: 'Gol' }
//! A type cannot be changed after being created
/**
 **  type Car1 = {
 **     brand: string
 ** }
 *
 **  type Car1 = {
 **     model: string
 ** }
 */
//! Error: Duplicate identifier 'Car1'
/**
 *! 1 - Prior to TypeScript version 4.2, type alias names may appear in error messages,
 *! sometimes in place of the equivalent anonymous type (which may or may not be desirable).
 *! Interfaces will always be named in error messages.
 * TODO: See the link:
 *
 ** https://www.typescriptlang.org/play?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWZWhfYAjABMAMwALA+gbsVjoADqgjKESytQPxCHghAByXigYgBfr8LAsYj8aQMUASbDQcRSExCeCwFiIQh+AKfAYyBiQFgOPyIaikSGLQo0Zj-aazaY+dSaXjLDgAGXgAC9CKhDqAALxJaw2Ib2RzOISuDycLw+ImBYKQflCkWRRD2LXCw6JCxS1JCdJZHJ5RAFIbFJU8ADKC3WzEcnVZaGYE1ABpFnFOmsFhsil2uoHuzwArO9SmAAEIsSFrZB-GgAjjA5gtVN8VCEc1o1C4Q4AGlR2AwO1EsBQoAAbvB-gJ4HhPgB5aDwem-Ph1TCV3AEEirTp4ELtRbTPD4vwKjOfAuioSQHuDXBcnmgACC+eCONFEs73YAPGGZVT5cRyyhiHh7AAON7lsG3vBggB8XGV3l8-nVISOgghxoLq9i7io-AHsayRWGaFrlFauq2rg9qaIGQHwCBqChtKdgRo8TxRjeyB3o+7xAA
 */
//! Compiler error messages will always use 
//! the name of an interface:
//* interface Mammal {
//*    name: string
//* }
//* function echoMammal(m: Mammal) {
//*    console.log(m.name)
//* }
//! e.g. The error below will always use the name Mammal 
//! to refer to the type which is expected:
// echoMammal({  name: 12343 })
//! When a type hasn't gone through any form of manipulation
//! then you still get the name as a reference:
//* type Lizard = {
//*    name: string
//* }
//* function echoLizard(l: Lizard) {
//*     console.log(l.name)
//* }
//! So this still refers to Lizard
//* echoLizard({ name: 12345})
//! But when a a type has been transformed, for example via this
//! Omit then the error message will show the resulting type
//! and not the name
//* type Arachnid = Omit<{ name: string, legs: 8 }, 'legs'> 
//* function echoSpider(l: Arachnid) {
//*    console.log(l.name)
//* }
//* echoSpider({ name: 12345, legs: 8})
/**
 *! 2 -  Type aliases may not participate in declaration merging, but interfaces can.
 * TODO: See the link:
 ** https://www.typescriptlang.org/play?#code/PTAEEEDtQS0gXApgJwGYEMDGjSfdAIx2UQFoB7AB0UkQBMAoEUfO0Wgd1ADd0AbAK6IAzizp16ALgYM4SNFhwBZdAFtV-UAG8GoPaADmNAcMmhh8ZHAMMAvjLkoM2UCvWad+0ARL0A-GYWVpA29gyY5JAWLJAwGnxmbvGgALzauvpGkCZmAEQAjABMAMwALLkANBl6zABi6DB8okR4Jjg+iPSgABboovDk3jjo5pbW1d6+dGb5djLwAJ7UoABKiJTwjThpnpnGpqPBoTLMAJrkArj4kOTwYmycPOhW6AR8IrDQ8N04wmo4HHQCwYi2Waw2W1S6S8HX8gTGITsQA
 */
//! An interface can be re-opened
//! and new values added:
//* interface Mammal {
//*    genus: string
//* }
//* interface Mammal {
//*    breed?: string
//* }
//* const animal: Mammal = {
//*    genus: "1234",
//*    // Fails because breed has to be a string
//*    breed: 1
//* }
//* type Reptile = {
//*    genus: string
//* }
//! You cannot add new variables in the same way
//* type Reptile = {
//*    breed?: string
//* } 
/**
 *! 3 -  Interfaces may only be used to declare the shapes of objects, not rename primitives.
 * TODO: See the link:
 ** https://www.typescriptlang.org/play?#code/PTAEAkFMCdIcgM6gC4HcD2pIA8CGBbABwBtIl0AzUAKBFAFcEBLAOwHMUBPQs0XFgCahWyGBVwBjMrTDJMAshOhMARpD4tQ6FQCtIE5DWoixk9QEEWAeV37kARlABvaqDegAbrmL1IALlAEZGV2agBfampkbgtrWwMAJlAAXmdXdy8ff0Dg1jZwyLoAVWZ2Lh5QVHUJflAlSFxROsY5fFAWAmk6CnRoLGwmILzQQmV8JmQmDzI-SOiKgGV+CaYAL0gBBdyy1KCQ-Pn1AFFplgA5enw1PtSWS+vCsAAVAAtB4QQWOEMKBuYVUiVCYvYQsUTQcRSBDGMGmKSgAAa-VEgiQe2GLgKQA
 */
//! Here's two examples of 
//! using types and interfaces
//! to describe an object 
//* interface AnObject1 {
//*    value: string
//* }
//* type AnObject2 = {
//*    value: string
//* } 
//! Using type we can create custom names
//! for existing primitives:
//* type SanitizedString = string
//* type EvenNumber = number
//! This isn't feasible with interfaces
//* interface X extends string {
//* }
/**
 *! 4 - Interface names will always appear in their original form in error messages, but only when they are used by name.
 * TODO: See the link:
 ** https://www.typescriptlang.org/play?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWY2Q-YAjABMAMwALA+gbsVjNXW8yxySoAADaAA0CCaZbPh1XYqXgOIY0ZgmcK0AA0nyaLFhhGY8F4AHJmEJILCWsgZId4NNfIgGFdcIcUTVfgBlZTOWC8T7kAJ42G4eT+GS42QyRaYbCgXAEEguTzeXyCjDBSAAQSE8Ai0Xsl0K9kcziExDeiQs1lAqSE6SyOTy0AKQ2KHk4p1V6s1OuuoHuzwArMagA
 */
//! Compiler error messages will always use 
//! the name of an interface:
//* interface Mammal {
//*    name: string
//*}
//* function echoMammal(m: Mammal) {
//*    console.log(m.name)
//* }
//! e.g. The error below will always use the name Mammal 
//! to refer to the type which is expected:
//* echoMammal({ name: 12343 })
//! The type of `m` here is the exact same as mammal,
//! but as it's not been directly named, TypeScript
//! won't mention it in the error messaging
//*  function echoAnimal(m: { name: string }) {
//*    console.log(m.name)
//* }
//* echoAnimal({ name: 12345 })
