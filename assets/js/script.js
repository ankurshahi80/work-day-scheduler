// Update the current date

// Get the current date using Moment.js
// Format the date Day,Month Date
var formattedDate=moment().format("dddd, MMM Do");

// assign the formattedDate to id=currentDay
$("#currentDay").text(formattedDate);

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // if nothting in localStorage, create a new object to track all tasks

    if(!tasks) {
        tasks
    }
}
// Audit the hour-blocks
// Get the current time using Moment js
// Format the time to include the hour only
var currentTime=moment().format("H"); // comment out to test audit after 17:00 hrs
// var currentTime=12; remove the comment to test audit
currentTime=Math.abs(currentTime);

var auditHours = function() {
// create an array of all descriptions blocks
var descBlockArray = $(".description").toArray();

    $.each(descBlockArray,function(){
        
        // capture the block id
        var hourBlockId = $(this).attr("id");

        // find the block hour
        var hourBlockTime = hourBlockId.replace("-hour-block", "");
        // compare the block time with the current time to color code the blocks
        if (currentTime>hourBlockTime){
            $(this).addClass("past");
        } else if (currentTime==hourBlockTime) {
            $(this).addClass("present");
        } else if(currentTime<hourBlockTime){
            $(this).addClass("future");
        }
        
    });
}

// Repeat audit every minute
setInterval(auditHours(),(1000*60));

// Save the text in local storage

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(value,time);
    // save in localStorage
    
    localStorage.setItem(time, value);
});

var loadTasks = function() {
    var descBlockArray = $(".description").toArray();

    $.each(descBlockArray,function(){
        
        // capture the parent id
        var parentRowId = $(this).parent().attr("id");

        // look for the key with the parent id
        var task = localStorage.getItem(parentRowId);
        console.log(task);

        // log the task in the corresponding textarea
        $(this).val(task);
        
    });
}

loadTasks();