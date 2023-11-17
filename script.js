//Code to set class based on hour block
let calendar = function () {
  let currentHour = dayjs().format('HH')

  for (let i = 9; i <= 17; i++) {
    let hourBlock = $("#hour-" + i);
    let hour = i;

    if (currentHour > hour) {
      hourBlock.attr("class", "row time-block past")
    }
    if (currentHour == hour) {
      hourBlock.attr("class", "row time-block past present")
    }
    if (currentHour < hour) {
      hourBlock.attr("class", "row time-block past future")
    }
  }
}

// Code to get any user input that was saved in localStorage
let saveButton = function () {
  let calendarEvent = $(this).siblings('.description').val();
  let timeId = $(this).parent().attr('id');
  localStorage.setItem(timeId, calendarEvent);
}
//Set the values of the corresponding textarea elements
let displayData = function () {
  for (let i = 9; i <= 17; i++) {
    let hourBlock = "hour-" + i;
    let hourBlockID = $("#hour-" + i);
    let data = localStorage.getItem(hourBlock);
    $(hourBlockID).children('.description').text(data);
  }
}

// Code to display the current date in the header of the page.
let currentDay = function () {
  let dayDisplay = $("#currentDay");
  let today = dayjs().format('dddd, MMMM D, YYYY');
  dayDisplay.text(today);

}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  let saveBtn = $(".saveBtn")
  calendar();
  currentDay();
// Listener for click events on the save button.
  saveBtn.on('click', saveButton);
  displayData();
});