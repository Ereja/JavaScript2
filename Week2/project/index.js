/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

'use strict';

//getting all the needed elements:
const incrementTimeBtn = document.getElementById('add-time');
const decrementTimeBtn = document.getElementById('decrease-time');
const setSessionLength = document.getElementById('duration-select');
const sessionDurationTime = document.getElementById('duration-timer');
const minutesIndicator = document.getElementById('minutes');
const secondsIndicator = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('stop');

const interval = 1000;
const time = new Date();
let minute = 25;
let countDownInt;

//increament one minute at a time and storing minutes in resetTime:
function addMinute() {
  minute++;
  setSessionLength.textContent = minute;
  resetTime()
}

//decreamenting one minute and storing minutes in resetTime:
function removeMinute() {
  if (minute > 0) {
    minute--;
    setSessionLength.textContent = minute;
    resetTime()
  }
}

//minutes for showing in session and updating
function resetTime() {
  time.setMinutes(minute);
  time.setSeconds(0);
  showTime();
}

function showTime() {
  minutesIndicator.textContent = showTwoDigits(time.getMinutes());
  secondsIndicator.textContent = showTwoDigits(time.getSeconds());
}

//always showing two (last) digits
function showTwoDigits(number) {
  return ('0' + number).slice(-2);
}


function countDown() {
  if (time.getMinutes() === 0 && time.getSeconds() === 0) {
    sessionDurationTime.textContent = 'Time`s up!'
  } else {
    time.setSeconds(time.getSeconds() - interval / 1000);
    showTime();
  }
  
}
function play() {
  countDownInt = setInterval(countDown, interval);
  disableBtn()
}

//disabling buttons if countDownInt is running, enabling buttons on reset
function disableBtn() {
  if (countDownInt) {
  startBtn.disabled = true;
  incrementTimeBtn.disabled = true;
  decrementTimeBtn.disabled = true;
  } else {
  startBtn.disabled = false;
  incrementTimeBtn.disabled = false;
  decrementTimeBtn.disabled = false;
  }
}

function pauseCountDown() {
  clearInterval(countDownInt);
  countDownInt = false;
  startBtn.disabled = false;
}

function restartCountDown() {
  clearInterval(countDownInt);
  countDownInt = false;
  resetTime();
  disableBtn();
}

//numbers stored in resetTime shows
resetTime();

//event listeners:
incrementTimeBtn.addEventListener('click', addMinute);
decrementTimeBtn.addEventListener('click', removeMinute);
startBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pauseCountDown);
restartBtn.addEventListener('click', restartCountDown);
