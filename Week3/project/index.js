'use strict';

const billAmount = document.getElementById('bill');
const serviceQlt = document.getElementById('service');
const peopleNmb = document.getElementById('bill-sharing');
const calculateBtn = document.getElementById('calculate');
const tipDisplay = document.getElementById('tip-display');
const tipAmount = document.getElementById('tip-amount');


//limiting lenght of numbers
function numberLimit() {
    if (billAmount.value.length > 6) {
        billAmount.value = billAmount.value.slice(0, 6);
    }
    if (peopleNmb.value.length > 2) {
        peopleNmb.value = peopleNmb.value.slice(0, 2);
    }
}

function tipCalc () {
    let bill = parseInt(billAmount.value);
    let service = parseFloat(serviceQlt.value);
    let people = parseInt(peopleNmb.value);
    let totalTip = (bill * service) / people;
    totalTip = totalTip.toFixed(2);
    tipAmount.innerHTML = `\u20AC${totalTip} ${((people > 1) ? ' each' : '')}`;
    tipDisplay.innerHTML = 'Tip is:'
    
}

function validation() {
    if (billAmount.value === "" || billAmount.value < 1 || peopleNmb.value < 1 || serviceQlt.value == 0) {
        alert("Fill in all the fields!");
    } else {
        tipCalc();
    }
}

//event listeners
calculateBtn.addEventListener('click', validation);
billAmount.addEventListener('keypress', numberLimit);
peopleNmb.addEventListener('keypress', numberLimit);
