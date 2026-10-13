//var, let, const - line-by-line comparion
//declarations and intialization


// var a;  //declare karna no value
//var a = 12; // declare and initialize
//var a = 13;

//window main add karta hai
//function scoped hota hai 
//aap firse declare kar sakate ho and error nahi aayega even when we use same word


//let b = 12;
//let a = 12; // you can't redeclare the let that's why we use let

// const dulha = "lab";
// const dulhan = "laby";


//chapter 2 Scope (global, block, functional)

//var a =12; //global scope


//this is block
{   
     //var b = 12; // var is functional scope 
}

var a = 123 //this is global scope can use in whole code


//now this is an block scope tou can use let it will respect is so let is block scope
{
let a = 12; 
}

//function scope
function abcd() {
    let a = 12; // let will be use in this function 

}

/// now but 
function abcd(){
    if(true){
     let a = 12; // now here the let will be used in this function only {} let used in curly braces
    }
}

// global scope
//function scoped
//block scope