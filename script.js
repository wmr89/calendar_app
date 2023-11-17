
let AM9 = $("#hour-09");
let AM10 = $("#hour-10");
let AM11 = $("#hour-11");
let PM12 = $("#hour-12");
let PM1 = $("#hour-13");
let PM2 = $("#hour-14");
let PM3 = $("#hour-15");
let PM4 = $("#hour-16");
let PM5 = $("#hour-17");
let dayDisplay = $("#currentDay");








let saveBtn = $("saveBtn")
currentHour = dayjs().format('HH')

//saveBtn.on('click', toDoFunction)
//$(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  calendar();
  currentDay();
})

  let calendar = function () {
    //9AM block if statements
    if (currentHour > 9) {
      AM9.attr("class", "row time-block past")
    }
    if (currentHour == 9) {
      AM9.attr("class", "row time-block past present")
    }
    if (currentHour < 9) {
      AM9.attr("class", "row time-block past future")
    }

    //10AM block if statements
    if (currentHour > 10) {
      AM10.attr("class", "row time-block past")
    }
    if (currentHour == 10) {
      AM10.attr("class", "row time-block past present")
    }
    if (currentHour < 10) {
      AM10.attr("class", "row time-block past future")
    }

    //11AM block if statements
    if (currentHour > 11) {
      AM11.attr("class", "row time-block past")
    }
    if (currentHour == 11) {
      AM11.attr("class", "row time-block past present")
    }
    if (currentHour < 11) {
      AM11.attr("class", "row time-block past future")
    }

    //12PM block if statements
    if (currentHour > 12) {
      PM12.attr("class", "row time-block past")
    }
    if (currentHour == 12) {
      PM12.attr("class", "row time-block past present")
    }
    if (currentHour < 12) {
      PM12.attr("class", "row time-block past future")
    }

    //1PM block if statements
    if (currentHour > 13) {
      PM1.attr("class", "row time-block past")
    }
    if (currentHour == 13) {
      PM1.attr("class", "row time-block past present")
    }
    if (currentHour < 13) {
      PM1.attr("class", "row time-block past future")
    }

    //2PM block if statements
    if (currentHour > 14) {
      PM2.attr("class", "row time-block past")
    }
    if (currentHour == 14) {
      PM2.attr("class", "row time-block past present")
    }
    if (currentHour < 14) {
      PM2.attr("class", "row time-block past future")
    }

    //3PM block if statements
    if (currentHour > 15) {
      PM3.attr("class", "row time-block past")
    }
    if (currentHour == 15) {
      PM3.attr("class", "row time-block past present")
    }
    if (currentHour < 15) {
      PM3.attr("class", "row time-block past future")
    }

    //4PM block if statements
    if (currentHour > 16) {
      PM4.attr("class", "row time-block past")
    }
    if (currentHour == 16) {
      PM4.attr("class", "row time-block past present")
    }
    if (currentHour < 16) {
      PM4.attr("class", "row time-block past future")
    }

    //5PM block if statements
    if (currentHour > 17) {
      PM5.attr("class", "row time-block past")
    }
    if (currentHour == 17) {
      PM5.attr("class", "row time-block past present")
    }
    if (currentHour < 17) {
      PM5.attr("class", "row time-block past future")
    }
  }



// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page.
//});
let currentDay = function() {
  let today =dayjs().format('dddd, MMMM D, YYYY h:mm A');
  dayDisplay.text(today);

}
