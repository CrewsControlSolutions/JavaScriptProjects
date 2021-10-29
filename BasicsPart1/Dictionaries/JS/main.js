//this is my first created dictionary consisting of Key-Value-Pairs (KVPs)
function myDictionary() {
    var Virus = {
        Type: "SARS-COV-2",
        Carrier: 'human',
        Origin: "Wuhan, China",
        Creation: "gain of function",
        Age: 1,
        Purpose: "biological weapon",
        Age: 2, //the key called "Age" is now paired with a value of 2 and the original value is no longer represented
    };
    delete Virus.Origin; //The mainstream media does exactly this--they delete key facts
    document.getElementById('dictionary').innerHTML=Virus.Origin; //searches a document of type HTML for a certain element ID and then embeds into that element the value of a specified key
}