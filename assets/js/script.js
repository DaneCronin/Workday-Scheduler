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
var datetime = moment();
console.log(datetime.format('dddd MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(datetime.format("dddd MMM Do YYYY"));
});


// create a function to create/generate rows to fill daily schedule in hour-rows
for (var i = 0; i < timeBlock.length; i++) {
    
    var hour = new Date().getHours();
    // variable for a new row.
    var row = $("<div>");
    row.addClass("row time-block");
    $(".container").append(row);


    // Label the hour blocks and create class for hour blocks.  Append to the rows 
var timeColumn = $("<div>");
timeColumn.addClass("col-sm-2 hour");

// add the time to the time blocks
timeColumn.text(timeBlock[i].time);
row.append(timeColumn);

// Create a column for the text/events area
var eventBlock = $("<textarea>");
eventBlock.addClass("description col-sm-8 textarea").text(timeBlock[i].userInput);
// append the event block to the rows 
row.append(eventBlock);

// create third column for a save button
var saveBtn = $("<button>");
saveBtn.addClass("col-sm-2 saveBtn").text("Save");
saveBtn.addClass("saveBtn i:hover");
row.append(saveBtn);

//Functions
colorBlock(hour);
saveEvent();

};

console.log("timeblock");


// function to check if current row time is past, present or future and change text area color based on current time
function colorBlock(hour) {
    if (timeBlock[i].timeValue < hour) {
        eventBlock.addClass("past");
    }
    else if (timeBlock[i].timeValue == hour) {
        eventBlock.addClass("present");
    }
    else {
        eventBlock.addClass("future");
    }
}



    


// function to add and save tasks by time
function saveEvent() {
    saveBtn.on("click", function () {
        var saveEventTime = $(this).siblings("div").text();
        var usersText = $(this).siblings("textarea").val();
        
        console.log(usersText);

        if (usersText !== "") {
            timeBlock[i].timeValue.push(saveEventTime);
           timeBlock[i].userInput.push(usersText);

        // store userInput and time entered to local storage

         localStorage.setItem("Time", JSON.stringify(timeBlock[i].timeValue));
         localStorage.setItem("Text", JSON.stringify(timeBlock[i].userInput));

        }

    });

}


