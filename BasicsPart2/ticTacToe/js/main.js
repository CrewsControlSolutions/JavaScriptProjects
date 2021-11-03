//this variable keeps track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//place an 'X' or an 'O' in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already. The .some() method is used to check each element of selectedSquare array to check if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';    
        } 
        else {
            //active player may only be 'x' or 'o', so if not 'x' then 'o'
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber+activePlayer);
        //checks for any win conditions
        checkWinConditions();
        //change the active player
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
        }
        //if active player is anthing other than 'X' then change to 'X'
        else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
        }

        //plays a placement sound
        audio('./media/place.wav');
        //checks whether computer's turn
        if(activePlayer === 'O') {
            //disables clicking for computer choice
            disableClick();
            //waits 1 second before computer places image and enables click
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        //returning true is needed for computersTurn() function to work
        return true;
    }

    //computer selects random square
    function computersTurn() {
        //boolean needed for while loop
        let success = false;
        //variable stores a random number from 0 to 8
        let pickASquare;
        //select a square that is not already selected
        while(!success) {
            //a random number from 0 to 8 is selected as the computer's initial choice
            pickASquare = String(Math.floor(Math.random()*9));
            //check if the square has been filled yet
            if (placeXOrO(pickASquare)) {
                //call the placeXOrO function and pass the pickASquare value
                placeXOrO(pickASquare);
                //change boolean and end the loop
                success=true;
            };
        }
    }
}

//parse the selectedSquares array to search for winning conditions and draw a connecting line if so
function checkWinConditions() {
    a=50;
    b=90;
    c=100;
    d=304;
    e=508;
    f=510;
    g=520;
    h=558;

    if (arrayIncludes('0X','1X','2X')) { drawWinLine(a,c,h,c) }
    else if (arrayIncludes('3X','4X','5X')) { drawWinLine(a,d,h,d) }
    else if (arrayIncludes('6X','7X','8X')) { drawWinLine(a,e,h,e) }
    else if (arrayIncludes('0X','3X','6X')) { drawWinLine(c,a,c,h) }
    else if (arrayIncludes('1X','4X','7X')) { drawWinLine(d,a,d,h) }
    else if (arrayIncludes('2X','5X','8X')) { drawWinLine(e,a,f,b) }
    else if (arrayIncludes('2X','5X','8X')) { drawWinLine(e,a,e,h) }
    else if (arrayIncludes('6X','4X','2X')) { drawWinLine(c,e,f,b) }
    else if (arrayIncludes('0X','4X','8X')) { drawWinLine(c,c,g,g) }

    else if (arrayIncludes('0O','1O','2O')) { drawWinLine(a,c,h,c) }
    else if (arrayIncludes('3O','4O','5O')) { drawWinLine(a,d,h,d) }
    else if (arrayIncludes('6O','7O','8O')) { drawWinLine(a,e,h,e) }
    else if (arrayIncludes('0O','3O','6O')) { drawWinLine(c,a,c,h) }
    else if (arrayIncludes('1O','4O','7O')) { drawWinLine(d,a,d,h) }
    else if (arrayIncludes('2O','5O','8O')) { drawWinLine(e,a,f,b) }
    else if (arrayIncludes('2O','5O','8O')) { drawWinLine(e,a,e,h) }
    else if (arrayIncludes('6O','4O','2O')) { drawWinLine(c,e,f,b) }
    else if (arrayIncludes('0O','4O','8O')) { drawWinLine(c,c,g,g) }

    //check for a tie if all 9 squares are selected 
    else if (selectedSquares.length >= 9) {
        //play the tie game sound
        audio('./media/tie.wav');
        // set a 0.3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }

    //check if all passed squares are filled
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true }
    }
}

//this function makes our body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//receives string to play audio
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//utilizes html canvas to draw win line
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //access the HTML canvas element
    const canvas = document.getElementById('winLines');
    //access the methods and properties within the canvas element
    const c = canvas.getContext('2d');
    let x1=coordX1,
        y1=coordY1,
        x2=coordX2,
        y2=coordY2,
        x=x1,
        y=y1;

    //create an animated line drawing
    function animateLineDrawing() {
        //variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clear content from last loop iteration, if any
        c.clearRect(0,0,608,608);
        //start a new path
        c.beginPath();
        //move to starting point for our line
        c.moveTo(x1, y1);
        //indicates the end point in our line
        c.lineTo(x,y);
        //sets the width of our line
        c.lineWidth=10;
        //sets the color of our line
        c.strokeStyle='rgba(70,255,33,.8)';
        //draw
        c.stroke();
        //check whether endpoint has been reached
        if (x1 <= x2 && y1 <= y2) {
            //add to the previous end x point
            if (x<x2) {x+=10;}
            //add to the previous end y point
            if (y<y2) {y+=10;}
            //cancel animation loop when end is reached
            if (x>=x2 && y>=y2) { cancelAnimationFrame(animationLoop); }
        }
        //check for the 6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x<x2) {x+=10;}
            if (y>y2) {y-=10;}
            if (x>=x2 && y<=y2) { cancelAnimationFrame(animationLoop);}
        }
    }

    //clear the canvas after win line is drawn
    function clear() {
        //start animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clear the canvas
        c.clearRect(0,0,608, 608);
        //stop animation loop
        cancelAnimationFrame(animationLoop);
    }

    //prevent clicking while the win sound is playing
    disableClick();
    //play the win sounds
    audio('./media/winGame.wav');
    //call animation loop
    animateLineDrawing();
    //wait 1 second before clearing canvas, resetting game, and allowing clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//reset game if win or tie occurs
function resetGame() {
    for (let i=0; i<9; i++) {
        let square = document.getElementById(String(i));
        //remove background image from square
        square.style.backgroundImage = '';
    }
    //reset to empty array so that game can be played again
    selectedSquares = [];
}