// these are a series of functions that are examples of the math operations that can be performed in JavaScript

function addition() {
    a = 2+2;
    document.getElementById("math").innerHTML = a;
}

function coolSubtraction() {
    a = 6-3;
    document.getElementById("coolMath").innerHTML = a;
}

function multiplication() {
    a = 3*4;
    document.getElementById("multi").innerHTML = a;
}

function division() {
    a=6/3;
    document.getElementById("divi").innerHTML=a;
}

// this is a random math calculation
function comboMath() {
    a=1+2*3/4;
    document.getElementById("comboMathForOneDollar").innerHTML=a;
}

function momboModulus() {
    a=100%9;
    document.getElementById("mothersHomeCookedModulus").innerHTML=a;
}

function negationOperator() {
    a = 4;
    document.getElementById("johnnyRainCloud").innerHTML= -a;
}

// incrementing is very common when programming, especially later on when we use loops
function increment() {
    c=4;
    c++;
    document.getElementById("onTheUpAndUp").innerHTML=c;
}

function decrement() {
    c=4;
    c--;
    document.getElementById("bidensEconomy").innerHTML=c;
}

// this number is not truly random, as the Chinese could reverse engineer how this output number was calculated
function random() {
    a=Math.random();
    document.getElementById("rAndom").innerHTML=a;
}

function truncate() {
    a=5.94;
    a=Math.trunc(a);
    document.getElementById("elephantTrunk").innerHTML=a;
}