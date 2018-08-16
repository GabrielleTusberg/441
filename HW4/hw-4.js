/*
HW-4; Continue with JS

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */





/**************************************************/
// PROBLEM 1 - Basic Function Definitions
//
// Define 1 function using both Function Definition and Function Expression formats.
// For the function definition format, label the function as; squarePrintFuncDef
// For the function expression format, label the function as; squarePrintFuncExpress
//
// These functions should take a single input, which will be a Number.
// Each function should;
// 1. square this number
// 2. then print the result as a string to the console log, behind the text "The result is: "
//
//  As an example, if squarePrintFuncDef( 2 ) is called,
//  it should print "The result is: 4" to the web console.
//
// Your code goes here

function squarePrintFuncDef( number ) {
    return number * number;
}

var somenumber = 4;
function squarePrintFuncExpress() {
console.log("The result is:",squarePrintFuncDef(somenumber));
}
squarePrintFuncExpress();



/**************************************************/
// PROBLEM 2 - Minimum
//
// Last week introduced the standard function Math.min() that returns its smallest argument. We can do that ourselves now. Write a function min() that takes two arguments and returns their minimum.

// Your code here.

//function min(arg1, arg2) {

//if (arg1 < arg2){

  //return arg1;

//}

 //else {
  //return arg2;
// }

//console.log( min(0, 10) );
// this wasn't working

var min = function(x,y) {
    return (x <= y) ? x : y;
};


console.log( min(0, 10) );

console.log( min(0, -10) )

//this is the same as an if else statement and works over the other version because I was forgetting to set the function as a variable









/**************************************************/
// PROBLEM 3 - Letter Counting
//
// Write a function called countChar() that takes a string as its first argument, and takes a second argument that indicates a character. The function should then return a Number, representing the number of times that letter occurs in the string.
//
// Your program should output something like the following;

// Your code here.

//function countChar(x,y) {
  //(x.match(/'+y+'/g)||[]).length);

//}

function countChar(string, letter) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == letter)
      counted += 1;
  return counted;
}


console.log( countChar("BBC", "B") );

console.log( countChar("kakkerlak", "k") );

console.log( countChar("michael", "M") );

// Creating a function thats calling a sting and a Letter
//var that counts the number of times a letter appears in a string
//as long as i is less than the lenght of the strong add 1 to it
//charAt to look at the string at the location of i and compare that to the letter
// if the comparisons tru add one
//returning counted



/**************************************************/
// PROBLEM 4 - The sum of a range
//
// Write a range function ( 'range()' ) that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
// Next, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
//
// Finally, write a sum function ( 'sum()' ) that takes an array of numbers and returns the sum of these numbers.


// Your code here.

function range(start, end, value) {
  if (value == null) value = 1;
  var array = [];

  if (value > 0) {
    for (var i = start; i <= end; i += value)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += value)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
console.log( range(1, 10) );
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log( range(5, 2, -1) );
// → [5, 4, 3, 2]
console.log( sum(range(1, 10)) );
// → 55

//function range is creating the array with the start and end values. if the value is negative 1 it goes backwards
//if theres no value set it sets it to 1
//and then retunrs the array with that new value
//if the value is greater than 0 than it goes up the array and prints whatever value is in that until it hits the end of the array
//if the value is less than 0 than it goes down the array and prints whatever value is in that until it hits the end of the array
//function sum is just setting my total equal to 0 and then setting i = 0
//checking to make sure that i is not larger than the length of the array and if thats tru adding one to 1
//taking whatever value is in that array location and adding it to that total





/**************************************************/
// PROBLEM 5 - Your own loop
//
// Write a higher-order function 'loop()' that provides a way to something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value, and stops if that returns false. Then, it calls the body function, giving it the current value. And finally, it calls the update function to create a new value, and starts from the beginning.
//
// When defining the function, you may use a regular loop to do the actual looping.

// Your code here.

var loop = function (int, limit, interval, body) {
  if(limit(int)){
  	     body(int);
  	     loop(interval(int), limit, interval, body);

}}

loop(3, n => n > 0, n => n - 1, console.log);


loop(1, n => n <= 10, n => n + 3, console.log);
// we are defing a variable called loop and assigning it the funtion with the 4 parameters listed
// if the interval fits within the limit keep going, if not stop
// print the interval and then push int through the interval and go back to the top




/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-4 Submission Forum via Moodle.
/**************************************************/
