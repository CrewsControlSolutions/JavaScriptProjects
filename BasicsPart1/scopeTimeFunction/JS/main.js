//create a global variable
var x = 5;

//create a simple function containing a local variable
function setup() {
    var y = 3; //local variable
    return y;
}
document.write(setup()+'<br><br>');

//test whether a variable local to an another function can be used here in this function
function scopeTest() {
    var z = x+y; //the console produces an error saying that 'y is not defined'
    return z;
    console.log(z);
    console.log(y);
}

document.write(scopeTest());

function greetingBusinessHours() {
    if (new Date().getHours() > 6 && new Date().getHours() < 18) {
        document.getElementById('greeting').innerHTML="Hello, how is your day?";
    }
}

function dayOfWeek() {
    if (new Date().getDay() == 5) {
        document.getElementById('endOfWorkWeek').innerHTML="Congratulations, today is Friday.";
    }
}

//determine whether someone is eligible for the draft based on their gender
function draftEligibility() {
    gender = document.getElementById('gender').value;
    if (gender == 'male') {
        draftStatus = 'You are required to register for the draft.'
    }
    else if (gender == 'female') {
        draftStatus = 'You are not eligible to register for the draft.'
    }
    else {
        draftStatus = 'Please try again by entering male or female.'
    }
    document.getElementById('draftEligibilityResult').innerHTML=draftStatus;
}

//gives a statement about what time of day it is
function timeOfDayGreeting() {
    var time = new Date().getHours();
    var reply;
    if (time<12 == time>0) {
        reply='It is morning time';
    }
    else if (time>=12 == time < 18) {
        reply='It is afternoon.';
    }
    else {
        reply = 'It is evening time.';
    }
    document.getElementById('timeOfDay').innerHTML=reply;
}