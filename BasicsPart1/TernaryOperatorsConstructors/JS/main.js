//determine whether someone can ride a roller coster
function rideFunction() {
    var height, canRide;
    height = document.getElementById('height').value;
    canRide = (height<52) ? 'You are too short':'You are tall enough';
    document.getElementById('ride').innerHTML = canRide + ' to ride.';
}

//determine whether someone is old enough to vote
function voteFunction() {
    var age, canVote;
    age = document.getElementById('age').value;
    canVote = (age>=18) ? 'You can vote.':'You are not old enough to legally vote.';
    document.getElementById('outcome').innerHTML = canVote;
}

//the function below is an object constructor
function vehicle(make, model, year, color) {
    this.vehicleMake=make;
    this.vehicleModel=model;
    this.vehicleYear=year;
    this.vehicleColor=color;
}
//create three new variables for three different people
var jack = new vehicle('dodge','viper',2007,'red');
var roger = new vehicle('toyota','camry',2013,'silver');
var chris = new vehicle('toyota','rav 4',2001,'yellow');
function theyDriveStatement() {
    document.getElementById('keywordsConstructors').innerHTML='chris drives a '+chris.vehicleColor+' '+chris.vehicleMake+' '+chris.vehicleModel+' manufactured in '+chris.vehicleYear;
}

function step136Function() {
    document.getElementById('newThis').innerHTML='This is the text displayed for Step 136...'
}

//example of using reserved words in JavaScript and not a good practice
// var donkey = new;
// document.write(new);

//a constructor function for cell phones
function phone(brand,model,year) {
    this.brand=brand;
    this.model=model;
    this.year=year;
}

//an example of a nested function
function incrementByOne() {
    document.getElementById('counting').innerHTML=count();
    function count() {
        var start=8;
        function addOne() {start += 1;}
        addOne();
        return start;
    }
}