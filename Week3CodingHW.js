//********
//	Q#1
//********
int[] ages = new int[3, 9, 23, 64, 2, 8, 28, 93];



//********
//	Q#2
//********
var arrayStrings = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var count = 0;
for (var i=0; i<arrayStrings.length; i++) {
  count += arrayStrings[i].length;
}
var average = (count/arrayStrings.length);
console.log("The average of the strings of the name in the array is " + average.toFixed(2));

var allStrings = " ";
for (var i=0; i<arrayStrings.length; i++) {
  allStrings += (arrayStrings[i] + " ");
}
console.log("The list of names in the array are as follows:"+ allStrings);


//********
//	Q#3
//********
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var lastElement = array[array.length - 1];
console.log("The last element in the array is " + lastElement);


//********
//	Q#4
//********
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var firstElement = array[0];
console.log("The first element in the array is " + firstElement);


//********
//	Q#5
//********
var arrayStrings = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var nameLengths = [];
for (var i=0; i<arrayStrings.length; i++) {
  nameLengths[i]=arrayStrings[i].length;
}
console.log(nameLengths);


//********
//	Q#6
//********
var count = 0;
for (var i=0; i<nameLengths.length; i++) {
  count += nameLengths[i];
}
var average = (count/nameLengths.length);
console.log("The average of the namelength in the array is " + average.toFixed(2));


//********
//	Q#7
//********
var string = "Hello";
var count = 3;
console.log(string.repeat(count));


//********
//	Q#8
//********
