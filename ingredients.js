const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("WHILE LOOP");

let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

console.log("\n");

// Write a for loop that prints out the contents of ingredients:
console.log("FOR LOOP");
for (j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}

console.log("\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("WHILE LOOP REVERSE");
let x = ingredients.length - 1;
while (x >= 0){
  console.log(ingredients[x]);
  x--;
}

console.log("\n");

console.log("FOR LOOP REVERSE");
for (y = ingredients.length - 1; y >=0; y--){
  console.log(ingredients[y]);
}