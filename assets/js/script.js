// Update the current date

// Get the current date using Moment.js
// Format the date Day,Month Date
var formattedDate=moment().format("dddd, MMM Do");

// assign the formattedDate to id=currentDay
$("#currentDay").text(formattedDate);

