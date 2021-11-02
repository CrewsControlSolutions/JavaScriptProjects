//an example of a while loop inside a function
function whileLoopDemo() {
    allDigits='The last digit below represents the number of characters in this sentence.';
    len=allDigits.length;
    a=1;
    while (a<len) {
        allDigits += '<br>'+a;
        a++;
    }
    document.getElementById('countToValue').innerHTML=allDigits;
}

//an example of a for loop inside a function
function forLoopDemo() {
    snakes = ['rattle snake','banded sea snake','bull snake','ferdilance snake','garter snake','pit viper snake','black mumba snake','python snake','cobra snake','yellow finned sea snake'];
    var list = '';
    let c; //utilized the let keyword instead of var, but could have utilized var just as equally
    for (c=0; c<snakes.length; c++) {
        if (c===9) { break; } //utilized the break statement so that the 9th element of the snakes array is not included in the list
        if (c===4) { continue; } //skips over the 4th element of the snakes array
        list += snakes[c]+"<br>";
    }
    document.getElementById('listOfSnakes').innerHTML=list;
}

//an example of instantiating a blank array of type 'const' and sequentially adding elements to the array; one element is also modified from its original
function snakeHabitats() {
    const habitats = []; //creating a constant of type array; this data type cannot be altered
    habitats[0]='dry land';
    habitats[1]='ocean';
    document.getElementById('snakeHabitats').innerHTML='Snakes can occupy many unique habitats, one of which is '+habitats[0]+'.';
    habitats[0]='lagoon'; //changing an element's value
    habitats[2]='jungle'; //added an extra element
    document.getElementById('snakeHabitats').innerHTML='Snakes can occupy many unique habitats, including the '+habitats[0]+' and the '+habitats[2]+'.'; //string that contains the added element value and the changed element value
}

//example of using a return statement
function sourForSnakes(name) {
    return name + ' \"hates\" snakes. He would prefer most anything else, I think.';
}

//passing a name to this function will in turn pass the name to another function
function inBetween(name) {
    document.getElementById('snakeFear').innerHTML = sourForSnakes("Indiana Jones");
}

let EMP = {
    country: "china",
    type: 'nuclear',
    radius: '400nm',
    overheadDetonation: '8.5nm',
    description : function() {
        return 'This is a '+EMP.type+' Electromagnetic Pulse (EMP) device made by '+EMP.country+' that has an optimal overhead detonation distance of '+EMP.overheadDetonation+' and a blast radius of '+EMP.radius+' whereby 60% of modern power transforms are permanently destroyed.';
    } 
};
document.getElementById('EMPThreat').innerHTML = EMP.description();