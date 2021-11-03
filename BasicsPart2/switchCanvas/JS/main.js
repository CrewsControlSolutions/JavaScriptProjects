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
    c.width=image.width; //using the correct variable 'c' this time!
    c.height=image.height; //using the correct variable 'c' this time!
    var ctx = c.getContext('2d');

    //set background gradient
    var grd = ctx.createLinearGradient(0,0,c.width*.8,0);
    grd.addColorStop(0,'red');
    grd.addColorStop(1,'white');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,c.width,c.height);

    //set image over gradient
    var frameGap = 50; //gap between the image and the canvas edge
    ctx.drawImage(image,frameGap/2,frameGap/2,c.width-frameGap,c.height-frameGap); //draw the image to the canvas
}