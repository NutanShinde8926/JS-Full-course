
let x = 10;
let y = 20;
 
if(x > 5 && y < 25) {
    console.log("A");

}else {
    console.log("B");
}

let isAdmin = true;
let isLoggedIn = false;

if( isAdmin || isLoggedIn) {
    console.log("Access granted");

}else {
    console.log("Access denied");
}


let temp = 35;
if(!(temp < 30)) {
    console.log("Hot");
} else{
    console.log("Pleasant")
}


let z = 0;
if (z) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}


let score = 91;
let grade = score >=90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "fail";
console.log(grade);




let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";

console.log(access);


//Increment and decrement

let a = 5;
a++;
console.log(a)

let b = 7;
++b;
console.log(b);


let c = 3;
let d = c++;
console.log(c,d); //4 3


let p = 4;
let q = ++p;
console.log(p,q);  //5 5 


let m = 10;
console.log(m--);
console.log(m);


let n = 5;
let result = n++ + ++n;
console.log(result);



let likes  = 100;
function likepost() {
    return ++likes;
}
console.log(likepost())
console.log(likes);

let count = 5;

if (count-- ===5){
    console.log("Matched");
}else {
    console.log("Not Matched")
}










// document.getElementById("box")
// document.getElementsByClassName("demo")








// var h = document.querySelectorAll("h1")
// console.log(h)

// h.forEach(function(e){
//     console.log(e)
//     e.style.color = "blue"
// })











// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")

// var flag = 0

// btn.addEventListener("click",function(){
//    if(flag == 0) {
//       bulb.style.backgroundColor = "yellow"
//       console.log("clicked")
//       flag = 1
//    }else{
//      bulb.style.backgroundColor = "transparent"
//      console.log("again clicked")
//      flag = 0
//    }

    
// })

















// var bulb = document.querySelector("#bulb")
// var btns = document.querySelectorAll("button")

// btns[0].addEventListener("click",function(){
//     bulb.style.backgroundColor = "yellow"
// })
