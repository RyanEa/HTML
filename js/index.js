var ones;
var twos;
var totals;

var el = document.getElementById('bottom');
el.textContent = "Bottom";

var today = new Date();
var currentHour = today.getHours();
var greeting;

if (currentHour % 12 === 1) {
    greeting = 'Hello!';
} else if (currentHour % 12 === 2) {
    greeting = 'Hi!';
} else if (currentHour % 12 === 3) {
    greeting = 'Greetings!';
} else if (currentHour % 12 === 4) {
    greeting = 'Good Afternoon!';
} else if (currentHour % 12 === 5) {
    greeting = 'Hello World!';
} else if (currentHour % 12 === 6) {
    greeting = 'Bacon Ipsum!';
} else if (currentHour % 12 === 7) {
    greeting = 'Lucky!';
} else if (currentHour % 12 === 8) {
    greeting = "Ate o clock";
} else if (currentHour % 12 === 9) {
    greeting = "????";
} else if (currentHour % 12 === 10) {
    greeting = "Sleep good";
} else if (currentHour % 12 === 11) {
    greeting = 'The time is 11';
} else {
    greeting = 'Sleep really good';
}

var rep = document.getElementById('pageTitle');
rep.textContent = greeting;