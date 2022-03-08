//Identify my Vars
var now = moment();
var currentHour24 = moment().format("H");
var currentHour12 = moment().format("ha");
var amOrPm = moment().format("a");

$("#currentDay").text("Today is " + now.format("dddd, MMMM Do, YYYY"));

for (let i = 0; i < 10; i++) {
  $(".container").append("<div class='time-block row'>");
}

// adding divs and their styles. as well as the textareas where you can have user input their todos.

$(".time-block")
  .append("<div class = 'hour'>")
  .append("<textarea>")
  .append("<button class = 'saveBtn'> Save </button>");

$(".hour").css("width", "9%");

$("textarea").css("width", "82%");

$(".saveBtn").css("width", "9%");

var hourDiv = $(".time-block").children(".hour");
var textArea = $(".time-block").children("textarea");

for (let i = 0; i < hourDiv.length; i++) {
  var hourInt = moment()
    .set("hour", i + 9)
    .format("ha");

  console.log(
    "index is " + hourInt + " and current time is " + currentHour12
  );

  hourDiv[i].append(hourInt);

  $("<p>").text(hourInt);

  if (hourInt > currentHour12) {
    $(textArea[i]).addClass("future");
  } else if (hourInt < currentHour12) {
    $(textArea[i]).addClass("past");
  } else {
    $(textArea[i]).addClass("present");
  }
}

function formatSaveButtons() {
  // Save button and Local Storage

  var timeBlock = $(".time-block");

  timeBlock.on("click", ".saveBtn", function (event) {
    event.preventDefault();

    let myTarget = $(event.target);
    let myText = myTarget.parent().children("textarea").val();
    let thisHour = myTarget.parent().children(".hour").text();

    localStorage.setItem(thisHour, JSON.stringify(myText));
  });
}
//local storage
function recoverLocalStorage() {
  let storageArray = [
    JSON.parse(localStorage.getItem("10am")),
    JSON.parse(localStorage.getItem("11am")),
    JSON.parse(localStorage.getItem("12pm")),
    JSON.parse(localStorage.getItem("1pm")),
    JSON.parse(localStorage.getItem("2pm")),
    JSON.parse(localStorage.getItem("3pm")),
    JSON.parse(localStorage.getItem("4pm")),
    JSON.parse(localStorage.getItem("5pm")),
    JSON.parse(localStorage.getItem("6pm")),
    JSON.parse(localStorage.getItem("7pm")),
  ];

  let textArea = $("textarea");
  console.log(textArea);

  for (let i = 0; i < 10; i++) {
    if (storageArray[i] != null) {
      textArea[i].append(storageArray[i]);
    }
  }
}
//executing functions
createTimeBlocks();
formatTimeBlocks();
formatSaveButtons();
recoverLocalStorage();
