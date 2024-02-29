const days = document.getElementById('day'),
      hours = document.getElementById('hour'),
      minutes = document.getElementById('minute'),
      seconds = document.getElementById('second');

const timer = () => {
  const futureDate = new Date('March 10, 2024 00:00:00');
  const currentDate = new Date();
  const difference = futureDate - currentDate;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const daysLeft = Math.floor(difference / day),
        hoursLeft = Math.floor((difference % day) / hour),
        minutesLeft = Math.floor((difference % hour) / minute),
        secondsLeft = Math.floor((difference % minute) / second);

  days.innerHTML = daysLeft;
  hours.innerHTML = formatTime(hoursLeft);
  minutes.innerHTML = formatTime(minutesLeft);
  seconds.innerHTML = formatTime(secondsLeft);
}

const formatTime = (time) => time < 10 ? `0${time}` : time;

setInterval(timer, 1000);