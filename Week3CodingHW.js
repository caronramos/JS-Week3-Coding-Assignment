//********
//	Q#1a
//********
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var difference = ages[ages.length - ages.length] - ages[ages.length - 1];
console.log("The difference between the first and last element within the array is " + difference);


//********
//	Q#1b
//********
ages.splice(8, 0, 57);
var newAge = ages;
var newDifference = newAge[newAge.length - newAge.length] - newAge[newAge.length - 1];
console.log("The difference between the first and last element within the array is " + newDifference);


//********
//	Q#1c
//********



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
var firstName = 'Caron';
var lastName = 'Ramos';	
var fullName = firstName.concat(" ", lastName);
console.log(fullName);


//********
//	Q#9 
//********
var arrayOfIntegers = [5, 10];
var sum = arrayOfIntegers.reduce(function (a, b){
    if((a + b) > 100){
        return true + ", " + (a + b) + " is greater than 100.";
    }
    else{
      return false + ", " + (a + b) + " is less than 100.";
    }
});
console.log(sum);


//********
//	Q#10 
//********
var arrayDoubles = [1.0, 2.13, 3.4, 4.56, 5.7, 6.89, 7.10, 8.11, 9.012, 10.13];
var count = 0;
for (var i=0; i<arrayDoubles.length; i++) {
  count += arrayDoubles[i];
}
var average = (count/arrayDoubles.length);
console.log("The average of the doubles in the array is " + average);


//********
//	Q#11
//********
var arrayDoubles = [1.0, 2.13, 3.4, 4.56, 5.7, 6.89, 7.10, 8.11, 9.012, 10.13];
var count = 0;
for (var i=0; i<arrayDoubles.length; i++) {
  count += arrayDoubles[i];
}
var average = (count/arrayDoubles.length);
console.log("The average of the doubles in the array is " + average);

var arrayDoubles2 = [1.1, 2.3, 3.45, 4.6, 5.78, 6.9, 7.1011, 8.012, 9.1314, 10.015];
var count2 = 0;
for (var i=0; i<arrayDoubles2.length; i++) {
  count2 += arrayDoubles2[i];
}
var average2 = (count2/arrayDoubles2.length);
console.log("The average of the doubles in the array is " + average2);

function greaterThan(){
  if (average > average2){
    return true;
  }
  else{
    return false;
  }
}
console.log(greaterThan());


//********
//	Q#12 
//********
let isHotOutside = true;
var moneyInPocket = 10;
function willBuyDrink(){
  if(isHotOutside == true && moneyInPocket>10.50){
      return true;
  }
  else{
      return false;
  }
}
console.log(willBuyDrink());


//********
//	Q#13 
//********


