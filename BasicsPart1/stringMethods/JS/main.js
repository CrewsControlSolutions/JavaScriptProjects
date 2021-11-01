function concatDemo() {
    var a='God';
    var b=' is good';
    var c=' all the time.'
    var d=a.concat(b,c);
    document.getElementById('concatExample').innerHTML=d;
}

function sliceDemo() {
    var a='And the peace of God, which surpasses all understanding, will guard your hearts and minds in Christ Jesus. -Philippians 4:7'
    length = a.length;
    var section=a.slice(a.length-16,a.length);
    document.getElementById('sliceExample').innerHTML=section;
}