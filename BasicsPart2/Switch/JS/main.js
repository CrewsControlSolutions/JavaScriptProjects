//using the switch function to identify whether the proper input was supplied and exiting the function if so
function locationSelection() {
    var locationOutput;
    var location = document.getElementById('locationInput').value;
    var generic = ' is your selected location. You will be contacted by your travel agent shortly.';
    switch(location) {
        case 'Tahiti':
            locationOutput='Tahiti'+generic;
            break;
        case 'Hawaii':
            locationOutput='Hawaii'+generic;
            break;
        case 'Palau':
            locationOutput='Palau'+generic;
            break;
        default: locationOutput="Please enter a location exactly as written (case sensitive) from the above list.";
    }
    document.getElementById('output').innerHTML=locationOutput;
}

//change the text of a desired element containing a certain class name
function changeText() {
    var a = document.getElementsByClassName('click');
    a[0].innerHTML='The text has changed.';
}

//declare a variable of type Image() and set the source to the canvas image
var img = new Image();
img.src = './images/Blockchain.jpeg';

//wait for the image to load before loading the image to the canvas
img.onload = function() {
    loadImageCanvas(img);
}


//load an image to the canvas
function loadImageCanvas(image) {
    var c = document.getElementById('exampleCanvas');
    var ctx = c.getContext('2d');
    canvas.width=image.width;
    canvas.height=image.height;
    ctx.drawImage(image,0,0); //draw the image to the canvas
}