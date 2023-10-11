import ts from 'typescript'

/**
 * Typescript
 * 
 * Differences Between Type Aliases and INterfaces
 * 
 * TODO; See the links:
 * 
 ** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 * 
 * Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
 ** Almost all features of an interface are available in type, the key distinction is that a type cannot 
 ** be re-opened to add new properties vs an interface which is always extendable.
 */

 /**
  *? Extending interface
  * 
  * The extends keyword is used in class declarations or class expressions to create a class that is 
  * a child of another class.
  * The extends keyword in TypeScript is used to implement inheritance, a class-based object-oriented 
  * characteristic that lets the child class or the interface acquire the members from their parents. 
  * The extends keyword also comes in handy while performing abstraction, which uses inheritance. 
  * 
  * TODO: See this link about extends:
  * 
  ** https://www.typescriptlang.org/docs/handbook/2/classes.html
  * 
  ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
  * 
  */

 interface Animal {
    name: string;
 }
 interface Bear extends Animal { // Inherited from Animal
    honey: boolean;
 }

function getBear(): Bear {  
     return {
       name: 'Bear',
       honey: true
   } 
}

const bear = getBear();
bear.name  = "Pufo"
bear.honey = false;
console.log(bear); // { name: 'Pufo', honey: false }

// Extending a type via intersection &

type Animal1 = {
    name: string;
}
type Bear1 = Animal1 & { // & - intersection
    honey: boolean;
}

function getBear1(): Bear1 {
    return{
        name: 'Bear',
        honey: true
    }
}

const bear1 = getBear1();
bear1.name  = "Pefi"
bear.honey = true
console.log(bear1); // { name: 'Pefi', honey: true }

// Adding new fields to an existing interface

interface Car {
    brand: string
}

interface Car {
    model: string
}

function getCar(): Car {
    return {
        brand: 'Ford',
        model: 'Mustang'
    }
}

const car = getCar()
car.brand = 'Volkswagen'
car.model =  'Gol'
console.log(car) // return { brand: 'Volkswagen', model: 'Gol' }

//! A type cannot be changed after being created

/**
 **  type Car1 = {
 **      brand: string
 ** }
 * 
 **  type Car1 = {
 **     model:
 ** } 
 */

//! Error: Duplicate identifier 'Car1'