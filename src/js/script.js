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

}