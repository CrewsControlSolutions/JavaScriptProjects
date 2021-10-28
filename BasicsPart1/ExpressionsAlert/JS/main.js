var A = 'This is a string that' + ' doesn\'t sound eloquent.';
var family = "The Davis'", dad="David",mom="Elizabeth",daughter='Esther';
var family=family.fontcolor('yellow');
var dad=dad.fontcolor('red'); //assign the variable "dad" a font color of red
var mom=mom.fontcolor('grey');
var daughter=daughter.fontcolor('green');
var blues='I have the blues.';
var blues=blues.fontcolor('blue');

window.alert(A); //invoke the alert function on the window
document.write(A); //invoke the write function on the document
document.write('Concatenated' + ' String');
document.write(daughter);
document.write(blues);
document.write(3+4);
document.write(family+mom);

function myFirstFunction() {    //defining a function and naming it
    var str = 'This text is orange.';   //defining a variable and giving it a string value
    var strOrange = str.fontcolor("orange");    //changing the string color
    document.getElementById("orangeText").innerHTML = strOrange;    //assign the value of strOrange into the HTML element with the "orangeText" id
}