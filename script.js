var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){
   if(flag == 0) {
      bulb.style.backgroundColor = "yellow"
      console.log("clicked")
      flag = 1
   }else{
     bulb.style.backgroundColor = "transparent"
     console.log("again clicked")
     flag = 0
   }

    
})

















// var bulb = document.querySelector("#bulb")
// var btns = document.querySelectorAll("button")

// btns[0].addEventListener("click",function(){
//     bulb.style.backgroundColor = "yellow"
// })
