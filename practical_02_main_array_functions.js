let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original array:", fruits);
console.log("Array length:", fruits.length);

fruits.push("Grapes");
console.log("After push('Grapes'):", fruits);

let popped = fruits.pop();
console.log("Popped item:", popped);
console.log("After pop():", fruits);

fruits.unshift("Pineapple");
console.log("After unshift('Pineapple'):", fruits);

let shifted = fruits.shift();
console.log("Shifted item:", shifted);
console.log("After shift():", fruits);

fruits.sort();
console.log("Sorted array:", fruits);

fruits.reverse();
console.log("Reversed array:", fruits);

let pos = fruits.indexOf("Mango");
console.log("Index of 'Mango':", pos);
