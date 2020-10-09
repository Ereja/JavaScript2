/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

 'use strict'

//getting all the needed elements:
const incrementTimeBtn = document.getElementById('add-time');
const decrementTimeBtn = document.getElementById('decrease-time');
const setSessionLength = document.getElementById('duration-select');
const sessionDurationTime = document.getElementById('duration-timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const restartBtn = document.getElementById('stop');

//creating minute variable;
let minute = 25;

//increament one minute at a time:
function addMinute() {
  minute++;
  setSessionLength.textContent = minute;
  sessionDurationTime.textContent = `${minute} : 00`;
}

//decreamenting one minute:
function removeMinute() {
  if (minute > 0) {
    minute--;
    setSessionLength.textContent = minute;
    sessionDurationTime.textContent = `${minute} : 00`;
  }
}

//interval variable
let countDownInt;

function countDown() {
  let time = `${minute}` * 60;
  countDownInt = setInterval(function () {
    startBtn.disabled = true;
    incrementTimeBtn.disabled = true;
    decrementTimeBtn.disabled = true;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    sessionDurationTime.textContent = `${minutes} : ${seconds}`;
    time--;
    if (time <= 0) {
      clearInterval(countDown);
      sessionDurationTime.textContent = 'Time is up!';
    }
  }, 1);
}

 function pauseCountDown() {
   clearInterval(countDownInt);
   startBtn.disabled = false;
 }

 function restartCountDown() {
   minute = 25;
   setSessionLength.textContent = minute;
   sessionDurationTime.textContent = `${minute} : 00`;
   startBtn.disabled = false;
   incrementTimeBtn.disabled = false;
   decrementTimeBtn.disabled = false;
   clearInterval(countDownInt);
 }

//event listeners:
incrementTimeBtn.addEventListener('click', addMinute);
decrementTimeBtn.addEventListener('click', removeMinute);
startBtn.addEventListener('click', countDown);
pauseBtn.addEventListener('click', pauseCountDown);
restartBtn.addEventListener('click', restartCountDown);
