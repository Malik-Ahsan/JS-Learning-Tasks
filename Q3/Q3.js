const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
const meridiem = d.getHours() >= 12 ? "PM" : "AM";
const hours = d.getHours() % 12;
txt = `Today is ${days[d.getDay()]} and Current time is ${hours} ${meridiem} : ${d.getMinutes()} : ${d.getSeconds()}`;
document.getElementById("demo").innerHTML=txt;