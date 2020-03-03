//AGE CALCULATOR
/* function ageCalculator(name, yearOfBirth, currentYear){
  age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015)); */

// HOW MANY HUNDREDS
//My attempt
/* function howManyHundreds(num){
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
console.log(howManyHundreds(0), "=?", 0); */

//Alternate attempt 
/* function howManyHundreds2(num2){
  let remainder2 = num2 % 100;
  let crates2 = (num2 - remainder2)/100;
  return crates2;
}

console.log(howManyHundreds2(1000), "=?", 10);
console.log(howManyHundreds2(894), "=?", 8);
console.log(howManyHundreds2(520), "=?", 5);
console.log(howManyHundreds2(99), "=?", 0);
console.log(howManyHundreds2(0), "=?", 0); */
 */


//AREA CALCULATOR
/* function calculateRectangleArea(length, width){
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
console.log(calculateCircleArea(-1)); */