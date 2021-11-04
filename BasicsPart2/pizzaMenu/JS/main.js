//determine price for given size of pizza
function getReceipt() {
    //initialize beginning string to later concatenate to.
    var text1 = "<h3>You Ordered: </h3>";
    //total price of transaction
    var runningTotal = 0;
    //size of pizza selected
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    //determine which pizza was selected
    for (var i=0; i<sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1=text1+selectedSize+'<br>';
        }
    }
    if (selectedSize === 'Personal Pizza') {
        sizeTotal = 6;
    } else if (selectedSize === 'Small Pizza') {
        sizeTotal = 8;
    } else if (selectedSize === 'Medium Pizza') {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Jabba Pizza") {
        sizeTotal = 19;
    }
    runningTotal += sizeTotal;
    console.log(selectedSize+' =$'+sizeTotal+'.00');
    console.log('size text1: '+text1);
    console.log('subtotal: $'+runningTotal+'.00');
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

//determine new price with selected toppings
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    //declare a variable to type array
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    //determine which toppings were selected
    for (var j=0; j<toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log('selected toppign item: ('+toppingArray[j].value+')');
            text1 = text1+toppingArray[j].value+'<br>';
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount>1) {
        toppingTotal = (toppingCount-1); //one free topping is included
    } else {
        toppingTotal=0;
    }
    //calculate the total cost including toppings
    runningTotal = (runningTotal+toppingTotal);
    console.log('total selected topping items: '+toppingCount);
    console.log(toppingCount+' topping/s - 1 free topping = '+'$'+toppingTotal+'.00');
    console.log('topping text1: '+text1);
    console.log('Purchase Total: '+'$'+runningTotal+'.00');
    document.getElementById('showText').innerHTML=text1;
    document.getElementById('totalPrice').innerHTML='<h3>Total: <strong>$'+runningTotal+'.00'+'</strong></h3>';
};