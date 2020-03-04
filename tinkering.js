/* //AGE CALCULATOR
function ageCalculator(name, yearOfBirth, currentYear){
  age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

// HOW MANY HUNDREDS
//My attempt
function howManyHundreds(num){
  let remainder = num % 100
  let crates;
  if(remainder === 0){
    crates = num / 100;
    return crates;
  } else {
    crates = (num - remainder)/100;
    return crates;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

//Alternate attempt 
function howManyHundreds2(num2){
  let remainder2 = num2 % 100;
  let crates2 = (num2 - remainder2)/100;
  return crates2;
}

console.log(howManyHundreds2(1000), "=?", 10);
console.log(howManyHundreds2(894), "=?", 8);
console.log(howManyHundreds2(520), "=?", 5);
console.log(howManyHundreds2(99), "=?", 0);
console.log(howManyHundreds2(0), "=?", 0);
 


//AREA CALCULATOR
function calculateRectangleArea(length, width){
  let recArea = length * width;
  if (recArea > 0){
    return recArea;
  }
  
}

function calculateTriangleArea(base, height){
  let triArea = base * height / 2;
  if (triArea > 0){
    return triArea;
  }
  
}

function calculateCircleArea(radius){
  let circArea = Math.PI * Math.pow(radius,2)
  if (radius < 0){
    return undefined;
  } else {
    return circArea;
  }
  
} 

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));

//ARRAYS


let mixedData = ["abcd", 1, true, undefined, null, "all the things"];

let arraysInArrays = [
  [1,2,3], 
  ["Julia", "James"], 
  [true, false, true, false]
];

console.log(donut[2]);
console.log(mixedData[0]);
console.log(arraysInArrays[1][1]);

donut[0] = "glazed cruller";
console.log(donut)


 let udaciFamily = ["Julia", "James", "Amy"]

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
let crew = [captain, second, pilot, companion, mercenary, mechanic]; 

console.log(crew.length);

var inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2]
];

console.log(inventory.length);

let donut = ["glazed", "powdered", "jelly"];

donut.push("boston creme");

console.log(donut);
console.log(donut.length);

donut.pop();
donut.pop();
donut.push("jelly", "boston creme");
donut.splice(1,2,"chocolate", "honey dip");
donut.splice(4,0,"jelly")
donut.splice(-2,1, "yummy")

console.log(donut)

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2,1,"Yellow", "Green");
rainbow.splice(6,0, "Purple");
console.log(rainbow)

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley","Fred Weasley", "Harry Potter"];


function hasEnoughPlayers(x){
  if (x.length < 7){
    return false
  } else {
    return true
  }
}
console.log(hasEnoughPlayers(team));

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push("Simon", "River", "Book");
console.log(crew.shift());
console.log(crew);

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (let i = 0; i < donuts.length; i++){
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
}

donuts.forEach(function(element){
  element += " hole";
  element = element.toUpperCase();
  console.log(element);
})

let words = ["cat", "in", "hat"];
words.forEach(function(element, index, array){
  console.log("Word " + index + " in " + array.toString() + " is " + element);
});
console.log(donuts)

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(element, index, array){
  if (element % 3 === 0){
    element = element + 100;
    console.log(element)
  } else {
    console.log(element)
  }
});

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});



var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(element){
  element = (element * 0.15) + element;
  return Number(element.toFixed(2));
});
console.log(totals) 


var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (let row = 0; row < donutBox.length; row++){
  for(let column = 0; column < donutBox[row].length; column++){
    console.log(donutBox[row][column]);
  }
}


var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(let row = 0; row < numbers.length; row++){
  for(let column = 0; column < numbers[row].length; column++){
    if(numbers[row][column] % 2 === 0){
      numbers[row][column] = "even";
      console.log(numbers[row][column]);
    } else {
      numbers[row][column] = "odd";
      console.log(numbers[row][column]);
    }
  }
}
 */