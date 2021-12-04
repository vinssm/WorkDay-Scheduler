// get current date
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var currentHour = parseInt(moment().format("H"));


//  jQuery!!! will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function(){  

// function
  workDay()

// workday function to save the input values and shows on the scheduler even when you refresh the page
function workDay() {
       $(".time").each(function() {
        var presentTime = $(this).text();
        var presentInput = localStorage.getItem(presentTime);
            console.log(this);
        if (presentInput !== null) {
            $(this).siblings(".formInput").val(presentInput)
            $("this").siblings().css("border", "1px solid blue")
        }
     });
}

// button click to save user input data
$(".btnSave").on("click", function() {                
  console.log($("time").parent()); 
// highlights the sibling and next elements
    $("#div3").siblings().css("border", "1px solid red") // this is for testing purpose
    $("#div3").next().css("border", "1px solid blue")   // this is for testing purpose
    $("#div2").siblings().css("border", "1px solid yellow")  // this is for testing purpose
  var timeSection = $(this).siblings(".time").text();
  var formInput = $(this).siblings(".formInput").val();
  console.log(this); 
// storing data into local storage
  localStorage.setItem(timeSection, formInput);
// console log to print on console
    console.log($(this).val());       
       console.log(formInput) 
});


// audit the current time so that it color codes accordingly
function audit() {
    // convert to moment object 
     var time = moment().hours();
// for each input we are checking time and adding the color class
   $(".formInput").each(function() {
       var presentTime = parseInt($(this).attr("taskID"));
       if (presentTime > time) {
        $(this).addClass("list-group-item-primary");
       } else if (presentTime === time) {
        $(this).addClass("list-group-item-warning");
       } else {
        $(this).addClass("list-group-item-danger");
       }
   })
};

// function
audit()

});










