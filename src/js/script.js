"use strict";
$(document).ready(function () {
   designForm();
     $("#dev").click(function () {
       $(".dev2").toggle();
       $("#dev1").fadeToggle(400, "linear");
     });
     $("#pro").click(function () {
       $(".pro2").toggle();
       $("#pro1").fadeToggle(400, "linear");
     });


     $(".cont").hover(function (){
         $(".overlay").show();
     }, function(){
         $(".overlay").hide();        
     
     })
     


})
const designForm = () => {
     $("#design").click(function () {
       $(".design1").toggle();
       $("#design2").fadeToggle(400, "linear");
       $("h6").css("font-weight", "bold");
     });

};
function alertMessage() {
    let pop = document.querySelector("#pop");
    let empty = document.querySelector("#name").value && document.querySelector("#email").value;
        if (empty == ""){
            pop.classList.toggle("none");
            alert("Fill in all the spaces");
            return false;

        }else {
            pop.classList.toggle("show");
            document.querySelector("#pop").innerHTML =
            document.querySelector("#name").value + ", your message has been recorded."
         };
}
// document
//   .getElementById("btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//   });

$("input[type='submit']").click(function subFunc(){return false});