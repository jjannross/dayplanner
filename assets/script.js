// get current date and time for jumbotron
var dateEl = $("#currentDay");
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + " " + time;
dateEl.text(dateTime);

// add classes to determine current hour

var d = new Date();
var t = d.getHours();
var tB = $("#data-hour");
console.log(t);
console.log(tB);

// if  === t
// currentTime=.getHours
// if data-hour is < current time, then past class
// if data-hour = time then present class
// if data-hour is > then future class

// var now = dayjs(){

//   for (var i = 0; i < now.length; i++) {
//     var now= now[i]
//   dayjs().hour()

//save text area input to local storage when button is clicked.
$(".saveBtn").on("click", function (event) {
  //   $(".description").text();
  var hour = $(event.target).data("hour");
  var text = $(event.target).parent().siblings(".description").children().val();

  var time = JSON.parse(localStorage.getItem("time"));
  //read from local storage and parse it back JSON.parse
  //change the object,
  time[hour] = text;
  localStorage.setItem("time", JSON.stringify(time));
});

if (localStorage.getItem("time") === null) {
  var timeBlocks = {
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
  };

  localStorage.setItem("time", JSON.stringify(timeBlocks));
}
var time = JSON.parse(localStorage.getItem("time"));
$("#8").val(time[8]);
$("#9").val(time[9]);
$("#10").val(time[11]);
$("#11").val(time[17]);
$("#12").val(time[13]);
$("#13").val(time[12]);
$("#14").val(time[14]);
$("#15").val(time[16]);
$("#16").val(time[15]);
$("#17").val(time[17]);


