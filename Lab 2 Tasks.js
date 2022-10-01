//Task 1 - Print k'th digit of data from right hand side..
/*

let data = "2598347";
let k = 3;
var lastDigit = data;
for (let i = 1; i<=k; i++){
    lastDigit = data % 10;
    data/=10;
    if (i == k){
        console.log(Math.trunc(lastDigit));
        break;
    }
}

// Task 1 - Alternative.

let data = "2598347";
let k = -3;
console.log(data.at(k));

*/

//---------------------------------------------------------//


//Task 2 - Write program to find sum of all digits. e.g  Input 23617 output 2+3+6+1+8=20
// Hint : convert string to array and then use reduce function

/*
var data = "2598347";
let arrOfData = data.split('');
let arrOfNumberedData = arrOfData.map(Number);
let result = arrOfNumberedData.reduce(reducedFunction);
function reducedFunction(prev, current){
    return prev + current;
}
console.log(result);
*/

// ---------------------------------------------------------------- //


// Task 3 - Write program to find sum of even digits. Input 23617 output 2+6=8.
// (Hint: Convert string to array and use map function)

/*
var data = "2598347";
let arrOfData = data.split('');
let filteredArr = arrOfData.filter(evenFilter);
let arrOfNumberedData = filteredArr.map(Number);
let result = arrOfNumberedData.reduce(reducedFunction);
console.log(result);


function evenFilter(data){
    let filteredValue = data % 2 == 0;
    return filteredValue;
}
function reducedFunction(prev, cur){
    return prev + cur;
}
*/


// -------------------------------------------------------------------//



// Task 4 - Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10.
/*
for (let i = 0; i<11 ; i++){
    console.log("Square of "+i+" is : "+i**2);
    console.log("Cube of "+i+" is : "+i**3);
}
*/


// -------------------------------------------------------------------//



/* Task 5 - Develop and demonstrate JavaScript script that uses functions for the following problems: 
1.	Parameter: A string 
2.	Output: The position in the string of the left-most vowel 
3.	Parameter: A number  
4.	Output: The number with its digits in the reverse order
*/

/*
var Input = "2598347";
shatirFunction("bunaksh s se auusac a");

function shatirFunction(input){
    let inputLength = input.length;
    let num = Number(input);
    let lastDigit = 0;
    if(Number.isInteger(num)){
        for (let i = 0 ; i < inputLength ; i++){
            lastDigit = input % 10;
            process.stdout.write(`${Math.trunc(lastDigit)}`);
            input /= 10;
        }
    } else{ 
        let indexOfFirstVowel = input.match(/[aeiou]/);
        console.log(indexOfFirstVowel);
    }
}
*/


// ---------------------------------------------------------------------------//


/* Task 6 - Write a JavaScript program where the program takes a random integer between 0 to 9, 
the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "You WIN" otherwise display a message "Not matched". */

/*
let randomNumber = Math.floor(Math.random()*10);
let userGuess = 4;
console.log(randomNumber);
if(userGuess == randomNumber){
    console.log("You Win");
}else{
    console.log("Not Matched.");
}
*/


//--------------------------------------------------------------------------------//


/* Task 7 - Write a JavaScript program to check whether 10 
appears in first or last position of a given array of integers. 
The array length must be greater or equal to 2. */

/*
let arr = [1,2,14,23,51,10,22];
if(arr.indexOf(10) == 0){
console.log("10 is found at first index.");
} else {
    if(arr.lastIndexOf(10) == arr.length-1){
        console.log("10 is found at last index");
    } else {
        console.log("10 is found at index : " + arr.indexOf(10));
    }
} */


//---------------------------------------------------------------------------------------//


/**Task 8 - Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'comsats'
Expected Output: 'acmost'
  */

let data = "Anything";
let arrangedData = function (text) {
    return text.split('').sort().join('');
};
console.log(arrangedData);