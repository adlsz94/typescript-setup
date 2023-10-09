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
bear.honey = true;
console.log(bear1); // { name: 'Pefi', honey: true }
/* interface Window {
    ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"'
window.ts.transpileModule(src, {} ) */ 
