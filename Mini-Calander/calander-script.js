// Select the elements with the respective classes
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let year = document.querySelector(".year");
let date = document.querySelector(".date");
let time = document.querySelector('.time')

// Get the current date
let currentDate = new Date();

currentMonth = currentDate.getMonth();

currentDay = currentDate.getDay();

currentYear = currentDate.getFullYear();

newDate = currentDate.getDate();

// Update the innerHTML of the respective elements with the current values
year.innerHTML = `${currentYear}`;

date.innerHTML = `${newDate}`;

month.innerHTML = currentDate.toLocaleString("en", { month: "long" });

day.innerHTML = currentDate.toLocaleString("en", { weekday: "long" });

// update time

setInterval(() => {
  let currentDate = new Date(); // Fetch current date every second
  let hour = currentDate.getHours(); // Get current hour
  let minute = currentDate.getMinutes(); // Get current minute
  let second = currentDate.getSeconds(); // Get current second

  // Determine if it's AM or PM
  let period = hour >= 12 ? "PM" : "AM";

  // Convert hour from 24-hour format to 12-hour format
  hour = hour % 12 || 12;

  // Update time display
  time.innerHTML = `${hour}:${minute}:${second} ${period}`;
}, 1000);
