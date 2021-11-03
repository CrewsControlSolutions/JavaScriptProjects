function displayFigure(chtr) {
    var chtrName = chtr.getAttribute('data-dictator');
    alert(chtrName+' was a dictator of '+chtr.innerHTML+'.')
}

//check to see if any car tire has a pressure less than 29 psi using the .some() method
var tirePressures = [28,31,32,31];
//determine if the pressure is less than 29
acceptablePressure = (pressure) => pressure <= 29;
function pressureCheck() {
    document.getElementById('pressure').innerHTML = "At least one tire having less than 29 psi is " + tirePressures.some(acceptablePressure)+'.';
}
