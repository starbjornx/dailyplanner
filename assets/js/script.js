var today = moment();
$("#2a").text(today.format("MMM Do, YYYY"));
var dayWeek = today.format("dddd");
$("#1a").text(dayWeek);
