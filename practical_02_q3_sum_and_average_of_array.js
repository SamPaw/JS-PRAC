let marks = [85, 90, 78, 92, 88];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

let average = sum / marks.length;

console.log("Array elements:", marks);
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));
