//returns the remaining time in the form of a ticking countdown
function countdown() {
    var sec = document.getElementById('seconds').value;

    function tick() {
        sec = sec-1;
        timer.innerHTML=sec;
        var timeCount=setTimeout(tick, 1000); //setTimeout is a JS function which is being passed the arguments tick and 1000
        if (sec==0) {
            alert('0 seconds remain. Time\'s up, RJ.');
            clearTimeout(timeCount);
            timer.innerHTML='';
        }
    }
    tick(); //we must actually call this nested function for it to be utilized by the parent function
}

// slideshow operation
var slideIndex=1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex=n);
}

// return one slide at a time to the user's screen
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n>slides.length) {slideIndex=1}
    if (n<1) {slideIndex=slides.length}
    for (i=0;i<slides.length;i++) {
        slides[i].style.display='none';
    }
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active','');
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += ' active';
}