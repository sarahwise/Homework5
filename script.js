//On Ready
$(document).ready(function(){

//Save button 
$(".saveBotton").on("Click", function(){

//Get nearby values
var value = $(this).siblings(".description").val();
var time =$(this).parent().attr('id');
//Save to local storage
localStorage.setItem(time,value);
})

//Hour Updater
function hourGlass(){
    //get the current number of hours
    var currentHour = moment().hours();

    //Loop over time blocks
    $(".time-block").each(function() {
       var itinerary = parseInt($(this).attr("id").split("-")[1]);
       //Check to see if the time has passed 
       if(itinerary < currentHour){
           $(this).addClass("past");
       }
       else if (itinerary === currentHour){
           $(this).removeClass("past");
           $(this).addClass("present");
       }
       else//Else we add the future class 
       {
           $(this).removeClass("past");
           $(this).removeClass("present");
           $(this).addClass("future");

       }
    });
}

//calling hourGlass 

hourGlass();

var interval = setInterval(hourGlass, 15000);
//Loading local storage saved 

$('#hour-9.description').val(localStorage.getItem("hour-9"));
$('#hour-10.description').val(localStorage.getItem("hour-10"));
$('#hour-11.description').val(localStorage.getItem("hour-11"));
$('#hour-12.description').val(localStorage.getItem("hour-12"));
$('#hour-13.description').val(localStorage.getItem("hour-13"));
$('#hour-14.description').val(localStorage.getItem("hour-14"));
$('#hour-15.description').val(localStorage.getItem("hour-15"));
$('#hour-16.description').val(localStorage.getItem("hour-16"));
$('#hour-17.description').val(localStorage.getItem("hour-17"));

//Display current day on the page 

$("currentDay").text(moment().format("dddd,mmm,do"));

});