//Declare variables for time blocks from 9am to 5pm 

var timeBlock = [
    {
        time: "9:00 am",
        timeValue: "9",
        userInput: "",
    },
    {
        time: "10:00 am",
        timeValue: "10",
        userInput: "",
    },
    {
        time: "11:00 am",
        timeValue: "11",
        userInput: "",
    },
    {
        time: "12:00 pm",
        timeValue: "12",
        userInput: "",
    },
    {
        time: "1:00 pm",
        timeValue: "13",
        userInput: "",
    },
    {
        time: "2:00 pm",
        timeValue: "14",
        userInput: "",
    },
    {
        time: "3:00 pm",
        timeValue: "15",
        userInput: "",
    },
    {
        time: "4:00 pm",
        timeValue: "16",
        userInput: "",
    },
    {
        time: "5:00 pm",
        timeValue: "17",
        userInput: "",
    },
];




// ** create functions to display/populate a daily schedule that shows hourly time blocks **//

// Function to show current date and time 
$(document).ready(function () {
const datetime = moment();
console.log(datetime.format('dddd MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(datetime.format("dddd MMM Do YYYY"));
});

// create a function to create/generate rows to fill daily schedule in hour-rows
$(timeBlock).each(function (i) {
    //variable row to store each timeBlock
    var row = $("div");
    if (i < $(timeBlock).length) {
        row
        .addClass("row")
        $(".container").append(row);
    }
    i++
});
console.log("timeblock");

    

// Label the hour blocks and create class for hour blocks.  Append to the rows 
$("div.row").each(function (i) {
    //Variables for each time-block row and column
    var timeValue = timeBlock[i].timeValue;
    var labelCol = $("<div>");
    var inputCol = $("<div>");

    console.log("hours");
});




// function to add and save tasks by time


// function to edit and delete tasks

// function to check if current row time is past, present or future compared to hours-rows


// update and color- code Hour-row/tasks based on whether it is past, current or a future task

// create function to store row to local storage
