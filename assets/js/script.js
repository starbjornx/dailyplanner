// decalre my Vars
var now = moment();
var currentHour24 = moment().format("H");
var currentHour12 = moment().format("ha");
var amOrPm = moment().format("a");

$("#currentDay").text("Today is " + now.format("dddd, MMMM Do, YYYY"));

//Time blocks
for (let i = 0; i < 10; i++) {
  $(".container").append("<div class='time-block row'>");
}

//Created style for the save button
$(".time-block")
  .append("<div class = 'hour'>")
  .append("<textarea>")
  .append("<button class = 'saveBtn'> Save </button>");

$(".hour").css("width", "9%");

$("textarea").css("width", "82%");

$(".saveBtn").css("width", "9%");

var hourDivEls = $(".time-block").children(".hour");
var textAreaEls = $(".time-block").children("textarea");

for (let i = 0; i < hourDivEls.length; i++) {
  var hourInterate = moment()
    .set("hour", i + 9)
    .format("ha");

  console.log(
    "index is " + hourInterate + " and current time is " + currentHour12
  );

  hourDivEls[i].append(hourInterate);

  $("<p>").text(hourInterate);

  if (hourInterate > currentHour12) {
    $(textAreaEls[i]).addClass("future");
  } else if (hourInterate < currentHour12) {
    $(textAreaEls[i]).addClass("past");
  } else {
    $(textAreaEls[i]).addClass("present");
  }
}

function formatSaveButtons() {
  // Save button and Local Storage

  var els2 = $(".time-block");

  els2.on("click", ".saveBtn", function (event) {
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

  let textAreaEls = $("textarea");
  console.log(textAreaEls);

  for (let i = 0; i < 10; i++) {
    if (storageArray[i] != null) {
      textAreaEls[i].append(storageArray[i]);
    }
  }
}
//executing functions
createTimeBlocks();
formatTimeBlocks();
formatSaveButtons();
recoverLocalStorage();

