// repeat karne ko loop kehte hai
// 1 1  1 1 1 1 1
// 1 2 3 4 5 7 8

// /kaha se jana hai -> kaha tak jaana hai -> kaise jana hai
// for loop

// 1 -50


// kaha se jana hai -> kab ruk hai  -> kaise jana hai 
// while loop

// 1 -  dont when to stop

// 1 -40 for loop
// 20 -30 for loop
// hello na aajaya - while 
// laal color ka ped -while
// when get marrid -while




// FOR loop

// for(start; end; change){}

// 1 -100

// for(let i = 1; i<101; i++) {
//    console.log(i);
// }



//WHILE loop
// start
// while(end){
    //code
//     change
// }


let i = 1;
while(i<51){
    console.log(i);
    i++;
}



//DO-WHILE loop

// let  i = 10;
// do{
//     console.log(i);
//     i++;
// }
// while(i<20)


//BREAK

//  for (let i = 1; i <201; i++){
//    console.log(i);
//     if(i === 32){
//         break;
//     }
// }



//CONTINUE
// for (let i = 1; i< 100; i++){
//     if(i === 32){
//         continue;
//     }
//    console.log(i);
// }











//Control flow

// if else ,else if 

// /switch statement
// early return pattern 

// switch (3) {
//     case 1:
//         break;
//         case 2:
//             break;
//             case 3:
//                  console.log("heyevhds");
//                 break;
//                 default:
// }





// function getVal(val)
//  {
//     if(val<100) return "A";
//     else if (val<75) return "B";
//     else if (val<50) return "C";
//     else return "D";
//  }
//  console.log (getVal(89));




 //write a function getGrade (score) that:
 // takes a student marks (0 to 100)
 // returns the grade based on this logic

//   function getGrade(score){
//     if(score >= 90 && score <= 100) {
//         return "A";
//     }
//     else if(score >=80 && score <=89){
//         return "B";
//     }
//     else if(score >= 60 && score <=69) {
//         return "C";
//     }
//     else if(score >=33 && score <=59) {
//         return "D"
//     }
//     else if(score >=0 && score <=32) {
//         return "Fail"
//     }
//     else{
//         return "Invalid Marks";
//     }
//   }
//   console.log(getGrade(95));


  //Early return code 

//    function getGrade(score){
//     if(score >= 90 && score <= 100)  return "A";
//     if(score >=80 && score <=89)  return "B";
//     if(score >= 60 && score <=69)  return "C";
//      if(score >=33 && score <=59) return "D"
//     if(score >=0 && score <=32) return "Fail"
//      return "Invalid Marks";
//     }
//   console.log(getGrade(12));


//Rock-Peper-Scissors logic

// function rps(user,computer){

//     if(user ==="rock" && computer ==="Scissor") return "rock";
//     if(user === "Scissor" & computer ==="rock") return " computer win rock";
//     if(user ==="paper" && computer ==="Scissor") return "Scissor";
//     if(user ==="rock" && computer === "paper") return "rock";
//     if(user === "rock" && computer === "rock") return "draw";
//     if(user === "paper" && computer === "paper") return "draw";
//     if(user === "Scissor" && computer === "Scissor") return "draw";
// else return "invalid"

// }
// console.log(rps("rock", "rock"));


// function rps(user,computer){

// if(user === computer) return "draw";
// if(user === "rock" && computer === "scissor") return "user";
// if(user === "scissor" && computer === "paper") return "user";
// if(user === "paper" && computer === "rock") return "user";

// return "computer win ";


// }
// console.log(rps("rock", "paper"));



// switch statement 
// let x = 2;
// switch(2) {
//     case 1:
//         console.log("one");
//     case 2:
//         console.log("two");
//     case 3:
//         console.log("three"); 
// }

//here it is wrong cause no break  that why we get two three output


// let y = 2;
// switch(2) {
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three"); 
//         break;
// }
//this way you get right answer two 



















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
