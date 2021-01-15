// get current date and time for jumbotron
var dateEl = $("#currentDay");
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;
dateEl.text(dateTime);

// var saveBtn = $(".saveBtn"); dont remember what this is for

//save text area input to local storage when button is clicked.
$(".saveBtn").on("click", function (event) {
  //   $(".description").text();
  var hour = $(event.target).data("hour");
  var text = $(event.target).parent().siblings(".description").children().val();
  //when you click

  var time = JSON.parse(localStorage.getItem("time"));
  //read from local storage and parse it back JSON.parse
  //change the object,
  time[hour] = text;
  //write whole object back and stringify
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
//to include:
// will i then use the .data() to get the data from the above object?

//data-hour:8 attribute

//will need to creatte some sort of data-attribute for data hour

//use day.js to capture hour then assign classes for .past, . present, . future using if statement will

// var now = dayjs(){

//   for (var i = 0; i < now.length; i++) {
//     var now= now[i]
//   dayjs().hour()

//   gethours
//   if
//   past
//   present
//   future
//   div.setAttribute(".past", i);
// }

// have save button, save it locally
// function storedescriptions() {
//   localStorage.setItem(".description", input);
// }
// //do I need to JSON.stringify(descriptions) here?

// // function init() {
// //   // Get stored descriptions from localStorage
// //   // Parsing the JSON string to an object
// //   var storedTodos = JSON.parse(localStorage.getItem(".descriptions"));

//   // If descriptions were retrieved from localStorage, update the todos array to it
//   if (storeddescriptions !== null) {
//     descriptions = storeddescriptions;
//   }

//   // Render todos to the DOM
//   renderdescriptions();
// }
