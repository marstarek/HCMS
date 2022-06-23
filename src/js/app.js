


let timep = document.getElementById("startat");
var hours =0;
var mins =0;
var seconds =0;
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let reset=document.getElementById("reset")
let hoursDom=document.getElementById("hours")
let minsDom=document.getElementById("mins")
let secondsDom=document.getElementById("seconds")
let breakat=document.getElementById("breakat")
let task =document.getElementById("task")
let checkinbtn =document.querySelector(".getCurrentTime")
let breakparent =document.querySelector(".break-parent")
let checkOut=document.querySelector(".checkout")
let checkedout =document.getElementById("checked-out");
let workingat = document.getElementById("working-at");
let havebreak = document.getElementById("have-break");
start.addEventListener("click", function (e) {
     e.preventDefault()
     if (task.value.trim() != "") {
          task.style.borderColor = "transparent"
          startTimer();  
     } else {
          task.style.borderColor = "red"
     }

})
stop.addEventListener("click", function (e) {
     getCurrentTime(e)
     clearTimeout(timex);
     e.target.classList.toggle("disable")
     start.innerText = "Continue"


})

function startTimer() {
     start.innerText=`Working ...`

     workingat.innerHTML= task.value;
     disable(start);
     disable(task);
     enable(stop);
  timex = setTimeout(function(){
      seconds++;
    if(seconds >59){seconds=0;mins++;
       if(mins>59) {
       mins=0;hours++;
         if(hours <10) {hoursDom.textContent='0'+hours+':'} else hoursDom.textContent=hours+':';
        }               
    if(mins<10){                     
     minsDom.textContent='0'+mins+':';}else  minsDom.textContent=mins+':';
                   }    
    if(seconds <10) {
      secondsDom.textContent='0'+seconds;} else {
      secondsDom.textContent=seconds;
      }
      startTimer();
  },1000);
}
function getCurrentTime(event) {
     disable(checkinbtn);
     enable(checkOut);
     enable(start);
     enable(task);
    today = new Date();
     var h = today.getHours(); // 0 - 23
     var m = today.getMinutes(); // 0 - 59
     var s = today.getSeconds(); // 0 - 59
     var session = "AM";
     if(h == 0){h = 12;}
     if(h > 12){ h = h - 12;session = "PM";}
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
     var time = h + ":" + m + ":" + s + " " + session;
     let xx = event.target.innerText;
     if (xx.toLowerCase() == "TAKE A BREAK".toLowerCase()) {
          havebreak.textContent ="you have takin a break at"
          let pelm = document.createElement("p");
          pelm.innerText = "at "+ time;
          breakparent.appendChild(pelm)
     } else {
          timep.innerText = time;
          timep.textContent = time; 

     }
}
function checkout() {
     clearTimeout(timex)
     disable(start);
     disable(stop);
     disable(task);
     disable(checkinbtn);
     disable(checkOut);
     today = new Date();
     var h = today.getHours(); // 0 - 23
     var m = today.getMinutes(); // 0 - 59
     var s = today.getSeconds(); // 0 - 59
     var session = "AM";
     if(h == 0){h = 12;}
     if(h > 12){ h = h - 12;session = "PM";}
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
     var time = h + ":" + m + ":" + s + " " + session;
         
          checkedout.innerHTML=time
     
}

function disable(obj) {
     obj.classList.add("disable")
   }
 
function enable(obj) {
  
     obj.classList.remove("disable")
}


$(document).ready(function () {

     $(".modal-body .send-comment-holder").css("display","none");

     $(".reject-request").on("click", function () {
          $(".modal-body .send-comment-holder").css("display", "block");
          $(this).prop("disabled", true);
          $(".accept-request").prop("disabled", true);

      })
     $(".cancel-comment").on("click", function () {
          $(".modal-body .send-comment-holder").css("display", "none");
          $(".accept-request").prop("disabled", false);
          $(".reject-request").prop("disabled", false);
      })



     $(".emp-cards").find(".emp-card-holder").find(".delete-member-btn").on("click", function () {
          console.log($(this).parent().parent());
          $(this).parent().parent().remove();
     })
     $(".add-teammember-btn").on("click", function () { 

let clonedCard=$(".emp-card-holder").last().clone()

$(".emp-cards").append(clonedCard)


     })

     
 })

