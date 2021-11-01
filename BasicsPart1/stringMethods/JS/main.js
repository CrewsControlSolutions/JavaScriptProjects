//concatenates several strings
function concatDemo() {
    var a='God';
    var b=' is good';
    var c=' all the time.'
    var d=a.concat(b,c);
    document.getElementById('concatExample').innerHTML=d;
}

//removes a portion of the string
function sliceDemo() {
    var a='And the peace of God, which surpasses all understanding, will guard your hearts and minds in Christ Jesus. -Philippians 4:7'
    length = a.length;
    var section=a.slice(a.length-16,a.length);
    document.getElementById('sliceExample').innerHTML=section;
}

//converts all text to uppercase if not already uppercase
function upperDemo() {
    var a='I hereby swear to preserve, protect, and defend the U.S. Constitution against all enemies, foreign and domestic, so help me God.';
    b=a.toUpperCase();
    document.getElementById('upperExample').innerHTML=b;
}

//finds which element specific text begins at in a string
function searchDemo() {
    var a='rybonucleic acid';
    b=a.search('acid');
    document.getElementById('searchExample').innerHTML=b;
}

//converts a number to various types or specificities
function convertNumberToVarious() {
    var a=3.14159265354;
    b=a.toString(); 
    c=a.toPrecision(6);
    d=a.toFixed(3);
    e=d.valueOf();
    document.getElementById('numberManipulation').innerHTML='The number '+a+' converted to a string is '+b+'. The original number reduced to six significant figures is '+c+'. The original number rounded to 3 decimal places and converted to a string is '+d+'. The value of the local variable "d" of type string is '+e+'.';
}