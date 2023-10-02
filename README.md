# Typescript

## Install typescript on the project

$ npm install typescript --save-dev

## or install globally

$ npm install -g typescript

## See the links

[typescriptlang.org] (<https://www.typescriptlang.org//>)

[typescript full course] (<https://youtu.be/xUxospw8RXo?si=WK8nRhm0Sytcvqbj/>)

[TypeScript Getting Started] (<https://www.w3schools.com/typescript/typescript_getstarted.php/>)

[Complete Typescript in under 5 hours] (<https://youtu.be/ZchBYjHFCC4?si=wTTrcFI4LfTOLQ5k/>)

## Run typescript file

### install ts-node gloally to run typescript files

$ npm install -g ts-node

### Configuring the compiler

$ npx tsc --init

### Open the file in an editor like VSCode

Edit the file tsconfig.json

### Add this for tsconfig.json file

target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

### Here is an example of more things you could add to the tsconfig.json file

{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}

## you need this two folders inside your project

src, build

### Execute below command para transpile ts to js file inside build

$ npx tsc
