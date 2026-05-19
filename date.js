const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
// console.log(isDateValid("December 17, 1995 03:24:00"));

const determineAgeFunction = function (day, month, year) {
  let date = new Date(year, month - 1, day);
  if (date < 0) {
    var seconds = (Date.parse(new Date()) + Math.abs(Date.parse(date))) / 1000;
  } else {
    var seconds = (Date.now() - Date.parse(date)) / 1000;
  }
  let minutes = (seconds / 60).toFixed(2);
  let hours = (minutes / 60).toFixed(2);
  let days = Math.floor((hours / 24) % 365.24);
  let years = Math.floor(hours / 24 / 365.24);

  console.log(
    `You are ${years} years and ${days} days old. Which is ${hours} hours OR ${minutes} minutes OR ${seconds} seconds.`
  );
};
// determineAgeFunction(20, 12, 1986);

const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// console.log(dayOfYear(new Date()));

const dateDifferenceInDays = (date1, date2) =>
  Math.abs(Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)));
const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
// console.log(dayDif(new Date("2022-10-21"), new Date("2023-10-21")));

const timeFromDate = (date) => date.toTimeString().slice(0, 8);
// console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));

const secondsToHHMMSS = (seconds) => {
  const pad = (num) => String(num).padStart(2, "0");
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};
// console.log(secondsToHHMMSS(3720));

const secsToHoursMinsSecs = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const remainingSecs = remainingSeconds % 60;
  return `${hours} hours, ${minutes} minutes, and ${remainingSecs}
    seconds`;
};
// console.log(secsToHoursMinsSecs(7320));

const secsToMinsAndSecs = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  return `${mins} minutes and ${remainingSecs} seconds`;
};
// console.log(secsToMinsAndSecs(120));

const secsToDaysHoursMinsSecs = (seconds) => {
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;
  return `${days} days, ${hours} hours, ${minutes} minutes, and
  ${remainingSecs} seconds`;
};
// console.log(secsToDaysHoursMinsSecs(100000));

const minsToHoursAndMins = (mins) => {
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours} hours and ${remainingMins} minutes`;
};
// console.log(minsToHoursAndMins(150));

const daysToYearsMonthsDays = (days) => {
  const years = Math.floor(days / 365);
  const remainingDays = days % 365;
  const months = Math.floor(remainingDays / 30);
  const remainingDaysInMonth = remainingDays % 30;
  return `${years} years, ${months} months, and
    ${remainingDaysInMonth} days`;
};
// console.log(daysToYearsMonthsDays(1000));

const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
// console.log(getCurrentDate());

const currentYear = () => new Date().getFullYear();
// console.log(currentYear());

const getDayOfWeek = (date) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
};
// console.log(getDayOfWeek(new Date("2023-08-02")));

const getMonthName = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[date.getMonth()];
};
// console.log(getMonthName(new Date("2023-08-02")));
