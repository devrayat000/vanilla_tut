const dayEl = document.getElementById("day-value");
const hourEl = document.getElementById("hour-value");
const minuteEl = document.getElementById("minute-value");
const secondEl = document.getElementById("second-value");

function main() {
  const now = new Date();
  const nextYear = new Date("01-01-2023");

  const totalSeconds = nextYear - now;

  let days = totalSeconds / (3600 * 24 * 1000);

  let hours = (days - Math.floor(days)) * 24;
  days = Math.floor(days);

  let minutes = (hours - Math.floor(hours)) * 60;
  hours = Math.floor(hours);

  let seconds = (minutes - Math.floor(minutes)) * 60;
  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);

  dayEl.innerText = parseTime(days);
  hourEl.innerText = parseTime(hours);
  minuteEl.innerText = parseTime(minutes);
  secondEl.innerText = parseTime(seconds);

  let interval = setInterval(() => {
    if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
      clearInterval(interval);
    }

    if (seconds <= 0) {
      seconds = 60;
      minuteEl.innerText = parseTime(--minutes);
    }

    if (minutes <= 0) {
      minutes = 60;
      hourEl.innerText = parseTime(--hours);
    }

    if (hours <= 0) {
      hours = 24;
      dayEl.innerText = parseTime(--days);
    }

    secondEl.innerText = parseTime(--seconds);
  }, 1000);
}

function parseTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

window.onload = main;
