
// 1. Ways to print in JavaScript
console.log("Hello World");
// alert("this is an alert");
// document.write("this is document.write")

// 2. JavaScript console API
console.log("Hello World", 4 * 6, "Another log");
console.warn("this is a warning");
console.error("this is an error");
console.assert(4 == 6)

// 3. JavaScript Variables
var number1 = 34;
var number2 = 26;
console.log(number1 + number2);

// 4. Data types in JavaScript

// numbers
var num1 = 455;
var num2 = 73;

// strings
var str1 = "this is a string"
var str2 = 'this is also a string'


// objects
var marks = {
    ravi: 34,
    shubham: 78,
    rakesh: 98.99,
    harry: 99.97
}

console.log(marks)

// booleans 
var a = true;
var b = false;

// var und = undefined;
var und; // undefined by default
console.log(und)

// null
var n = null;
console.log(n)
/*
At a very high level, there are two types of data types in JavaScript\
1. Primitive Data Types : undefined, null, number, string, boolean, symbol
2. Reference Data Types : arrays and objects
*/

var arr = [1, 2, "this", 4, 5]
console.log(arr)

// Operators in JavaScript

var a = 5;
var b = 2;
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);

// Assignment operators
var c = b;
console.log(c)

c -= 2;
c += 3;
c *= 4;
c /= 3;

console.log(c)

// Comparison Operators

var x = 34;
var y = 56;
console.log(x == y)
console.log(x < y)

// Logical Operators

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false) // logical AND
console.log(true || false) // logical OR
console.log(!false) // logical NOT
console.log(!true)

// Function in JavaScript
// DRY = Do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 5)
c2 = avg(14, 16)
console.log(c1, c2)

// Notice the colors 
console.log(3)
console.log('3')

// Conditionals in JavaScript

// if else statement
var age = 34
if (age > 18) {
    console.log("You can drink rasna water")
}
else {
    console.log("You cannot drink rasna water")
}

// if else ladder
if (age > 2) {
    console.log("You are not a kid")
}
else if (age > 26) {
    console.log("Bacche nahi rahe")
}
else if (age > 22) {
    console.log("Yes NOt a kid")
}
else {
    console.log("kids")
}

console.log("End of ladder")

var arr = [1, 2, 3, 4, 5]
console.log(arr)

// for loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// another way of iterating
arr.forEach(function (element) {
    console.log(element);
})

let j = 0; // block level scope (recommended)
// const cc = 0;
// cc = cc + 1; // throws error because const variable cannot be overwritten
// cc++;

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
console.log("let's checkout do-while loop")

j = 10;
do{
    console.log(arr[j]); // execute at least once
}while(j < arr.length);

// break and continue
// break : out of the loop
// continue : skip to the next iteration

for(var i = 0; i < 10; i++){
    if(i==3){
        break;
    }
    console.log(i);
}


for(var i = 0; i < 10; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

console.log("ARRAY METHODS")

let myArr = ['Fan','Camera',32, null, true];

// Array Methods
console.log(myArr.length)
myArr.pop();
console.log(myArr)
myArr.push('harry')
console.log(myArr)

myArr.shift()
console.log(myArr);
const newLen = myArr.unshift("Harry") // returns the new length
console.log(myArr)

// other array methods
// here have some fun with more array methods

// myArr.toString()
 d = [4,2,5,7]
 d.sort()

 // notice the difference
 e = [1,4,6,43,23,32321]
 console.log(e.sort()) // converts into strings and then arranges in alphabetical order

//  String Methods in JavaScript
let myStr = "Harry is a good boy good good";
console.log(myStr.length);
console.log(myStr.indexOf('good')) // returns the first occurrence
console.log(myStr.lastIndexOf("good"))

console.log(myStr.slice(1,4)) // index 1,2 and 3
console.log(myStr.replace('Harry','Rohan'));

console.log(myStr.replace('good','bad')) // replaces only the first occurrence

myDate = new Date();
console.log(myDate);

console.log(myDate.getTime())
console.log(myDate.getDay())
console.log(myDate.getFullYear());
console.log(myDate.getHours())
console.log(myDate.getSeconds())
console.log("DOM Manipulation")

// DOM Manipulation
// Document Object Model

document.getElementById('click').style.border = '2px solid red'

let elemClass = document.getElementsByClassName('container')
console.log(elemClass);
elemClass[0].style.background = 'yellow'
elemClass[0].style.border = '2px solid black'

elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")

tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para by DOM Manipulation using JS";

// createdElement2 = document.createElement('b');
// createdElement2.innerText = 'this is a created bold'

tn[0].appendChild(createdElement)

// tn[0].replaceChild(createElement2, createdElement);
// removeChild(element); //removes an element

// document.location
// document.title
// document.URL
// document.scripts
// document.links
// document.forms
// document.images
// document.domain

// Selecting using Query

sel = document.querySelector(".container")
console.log(sel) // gives the first .container element

sel = document.querySelectorAll(".container")
console.log(sel)

// 2:25 
//Events in JavaScript

function clicked(){
    console.log("The button was clicked")
}

window.onload = function(){
    console.log('The document was loaded')
}

firstContainer.addEventListener("click",function(){
    console.log("Clicked on container")
})

// mousehover
// 