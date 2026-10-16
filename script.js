//Control flow

// if else ,else if 
// /switch statement
// early return pattern 

switch (3) {
    case 1:
        break;
        case 2:
            break;
            case 3:
                 console.log("heyevhds");
                break;
                default:
}





function getVal(val)
 {
    if(val<100) return "A";
    else if (val<75) return "B";
    else if (val<50) return "C";
    else return "D";
 }
 console.log (getVal(89));




 //write a function getGrade (score) that:
 // takes a student marks (0 to 100)
 // returns the grade based on this logic

  function getGrade(score){
    if(score >= 90 && score <= 100) {
        return "A";
    }
    else if(score >=80 && score <=89){
        return "B";
    }
    else if(score >= 60 && score <=69) {
        return "C";
    }
    else if(score >=33 && score <=59) {
        return "D"
    }
    else if(score >=0 && score <=32) {
        return "Fail"
    }
    else{
        return "Invalid Marks";
    }
  }
  console.log(getGrade(95));























// let x = 10;
// let y = 20;
 
// if(x > 5 && y < 25) {
//     console.log("A");

// }else {
//     console.log("B");
// }

// let isAdmin = true;
// let isLoggedIn = false;

// if( isAdmin || isLoggedIn) {
//     console.log("Access granted");

// }else {
//     console.log("Access denied");
// }


// let temp = 35;
// if(!(temp < 30)) {
//     console.log("Hot");
// } else{
//     console.log("Pleasant")
// }


// let z = 0;
// if (z) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }


// let score = 91;
// let grade = score >=90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "fail";
// console.log(grade);




// let loggedIn = true;
// let hasToken = false;

// let access = loggedIn && hasToken ? "Allow" : "Deny";

// console.log(access);


//Increment and decrement

// let a = 5;
// a++;
// console.log(a)

// let b = 7;
// ++b;
// console.log(b);


// let c = 3;
// let d = c++;
// console.log(c,d); //4 3


// let p = 4;
// let q = ++p;
// console.log(p,q);  //5 5 


// let m = 10;
// console.log(m--);
// console.log(m);


// let n = 5;
// let result = n++ + ++n;
// console.log(result);



// let likes  = 100;
// function likepost() {
//     return ++likes;
// }
// console.log(likepost())
// console.log(likes);

// let count = 5;

// if (count-- ===5){
//     console.log("Matched");
// }else {
//     console.log("Not Matched")
// }

// let counts = 5;
// if (counts-- === 4) {
//     console.log("Matched");
// } else {
//     console.log("Not Matched");
// }
// console.log(counts);








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
