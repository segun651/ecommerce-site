let moves = document.getElementById("move")
 let images = document.querySelectorAll(".img")
  start = 0
 function move() {
      start++
       if(start>images.length-1){
        start = 0
       }
    moves.style.transform = `translateX(${-start * 10}%)`

 }
  setInterval(move,2000)

   let bars = document.getElementById("bars")
let media = document.querySelector(".display")
let close = document.querySelector(".closecart")
    bars.onclick = () => {
         
         media.style.transform = "translateX(0%)"
    } 

     close.onclick = () => {
   
      media.style.transform = "translateX(100%)"
     }
      
      function message() {
         
          alert("Message received successfully. We will get back to you.")
          return true
      }
         
    
       function news() {
         
         let emal = document.getElementById("emal").value
         

         let check = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})$/
   

         if(emal.trim() == "") {
         alert("Invalid Email.")
        }
          else if((check.test(emal))) {
         emal = ""
         alert("You have registered successfully.")

        }
          else {
         alert("Wrong Email.")
        }
       }