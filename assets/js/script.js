//This is for date at the begining of the Day Scheduler
var today = moment();
$("#1a").text(today.format("dddd, MMM Do, YYYY"));
var dayWeek = today.format("dddd");
$("#2a").text(dayWeek);
console.log("starting");

moment().startOf("day").fromNow();
moment().endOf("day").fromNow();
moment().startOf("hour").fromNow();

//9 am timeslot
let time = $("#timeSlot1");
let list = $("#listItem1");
let save1 = $("#saveBtn1");
console.log(list);
save1.on("click", function (event) {
  event.preventDefault();

  let nineTime = {
    time: "nine am",

    comment: list.val().trim(),
  };
  localStorage.setItem("timeFrame", JSON.stringify(nineTime));
  console.log(nineTime);
});
