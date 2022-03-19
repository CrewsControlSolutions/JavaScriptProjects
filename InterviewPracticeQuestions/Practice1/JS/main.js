function totalAllOdd(inputArr) {
    let tot = 0;

    inputArr.forEach(item => {
        if (item % 2 === 1) {
            tot += item
        }
    });

    return tot;
}

let test = [1,1,1,-1,-5];
let result = totalAllOdd(test);
document.getElementById('result').innerHTML = result;
// console.log(result)


function totalForLarge(inputArr) {
    let totalBigInt = BigInt(0);

    inputArr.forEach(item => {
            totalBigInt += BigInt(item);
    });

    return totalBigInt;
}

let test2 = [Number.MAX_SAFE_INTEGER, 1];
let result2 = totalForLarge(test2);
document.getElementById('result2').innerHTML = result2;


function reverseString(text) {
    // create a new array
    var splitString = text.split("");
    // reverse the newly created array
    var reverseArray = splitString.reverse();
    // join all elements of reversed array into a single string
    var joinArray = reverseArray.join("");

    return joinArray;
}

let test3 = "This is my test string.";
let result3 = reverseString(test3);
document.getElementById('result3').innerHTML = result3;


function removeRepeatCharacters(str) {
    // console.log(str);
    result = "";
    previousChar = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== previousChar) {
            result += str[i];
        }
        previousChar = str[i];
    }

    return result;
}

let test4 = "This iisss my test  string.";
let result4 = removeRepeatCharacters(test4);
document.getElementById('result4').innerHTML = result4;


function fizzBuzz(inputArr) {
    let result = [];

    inputArr.forEach(element => {
        if (element % 15 === 0) result.push([element, "FizzBuzz"]);
        else if (element % 3 === 0) result.push([element, "Fizz"]);
        else if (element % 5 === 0) result.push([element, "Buzz"]);
    })

    return result;
}

let test5 = [1,2,3,4,5,14,15,16,30,33,35];
let result5 = fizzBuzz(test5);
document.getElementById('result5').innerHTML = result5;