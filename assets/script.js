// get current date and time for jumbotron
var dateEl = $("#currentDay");
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;
dateEl.text(dateTime);
console.log(dateTime);

// var saveBtn = $(".saveBtn"); dont remember what this is for

//save text area input to local storage when button is clicked.
saveBtn.on("click", function (event) {
  //   $(".description").text();

  //when you click
  //read from local storage and parse it back JSON.parse
  //change the object,
  //write whole object back and stringify

  var text = $(event.target).parent().siblings(".description").children().val();
  console.log(text);
});

if (localStorage.getItem("time") === null) {
  var timeBlocks = {
    8: "test",
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

//will need to creatte some sort of data-attribute for data hour

//use day.js CDN to capture hour then assign classes for .past, . present, . future using if statement will

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
