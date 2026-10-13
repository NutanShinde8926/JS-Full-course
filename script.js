//common Confusion

console.log(nm);
var nm = "harsh";

console.log(age);
let age = 23;


var x = 1; //global
{
    var x =2;//global
}
console.log(x);


let a = 10; //block scope //globl
{
let a = 20;
console.log("Inside:" ,a);
}

console.log("outside:", a);


const person = { name: "harsh"};
person.name = "sharma";
person = {};
Object.freeze();