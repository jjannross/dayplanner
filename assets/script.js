// get current date and time, display it  

var dateTime = document.getElementById("#currentDay");
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;
currentDay.textContent = dateTime;
console.log(dateTime);



// create hover and funtion to assign classes for past, present, and future, refer to resource in slack 

// create click for time block to enter event,
var description = document.querySelectorAll(".description");
var saveBtn = document.querySelectorAll("saveBtn");

// the button needs to save entered description
saveBtn.addEventListener("click", function(event) {
    // event.preventDefault();


// have save button, save it locally
function storedescriptions() {
    localStorage.setItem(".description", input);
  }
//do I need to JSON.stringify(descriptions) here?

function init() {
    // Get stored descriptions from localStorage
    // Parsing the JSON string to an object
    var storedTodos = JSON.parse(localStorage.getItem(".descriptions"));
  
    // If descriptions were retrieved from localStorage, update the todos array to it
    if (storeddescriptions !== null) {
        descriptions = storeddescriptions;
    }
  
    // Render todos to the DOM
    renderdescriptions();
  }
