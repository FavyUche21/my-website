let time = new Date().toLocaleTimeString();

document.querySelector("[data-testid='currentTimeUTC']").innerHTML = time;

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date(); //current date

const currentDayOfTheWeek = daysOfTheWeek[currentDate.getDay()];

document.querySelector("[data-testid='currentDay']").innerHTML = currentDayOfTheWeek;
