var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var hour = $(".hour");
var timeBlock = $(".tblock");
var description = $(".desc");
var saveBtn = $(".saveBtn");
//allowing data to be added and stored
function renderTodos() {
  timeBlock.each(function () {
    var dataNumber = parseInt($(this).attr("data-number"));
    var dataText = localStorage.getItem(dataNumber);
    
    console.log(dataText);
    $(this).children("textarea").val(dataText);
  });
}
function init() {
  colorCode();

  renderTodos();
}
//creating button to allow the save function to work
saveBtn.on("click", function (event) {
  event.preventDefault();
  var todoText = $(this).siblings(".description").val();
  if (todoText === "") {
    return;
  }

  localStorage.setItem($(this).parent().attr("data-number"), todoText);
  renderTodos();

  renderTodos();
});

//color coding time blocks
function colorCode() {
  timeBlock.each(function () {
    var dataNumber = parseInt($(this).attr("data-number"));
    console.log(dataNumber);
    var currentHour = today.format("k");
    console.log(currentHour);

    if (dataNumber < currentHour) {
      $(this).children("textarea").addClass("past");
    } else if (dataNumber == currentHour) {
      $(this).children("textarea").addClass("present");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });
}

init();
