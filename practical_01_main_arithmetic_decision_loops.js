let a = 12;
let b = 5;

console.log("Arithmetic Operations:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

console.log("\nDecision-Making:");
if (a > b) {
    console.log(a + " is greater than " + b);
} else {
    console.log(b + " is greater than " + a);
}

let day = 2;
switch (day) {
    case 1: console.log("Day: Monday"); break;
    case 2: console.log("Day: Tuesday"); break;
    default: console.log("Day: Other");
}

console.log("\nLoops:");
let forOutput = "For loop: ";
for (let i = 1; i <= 3; i++) {
    forOutput += i + " ";
}
console.log(forOutput);

let whileOutput = "While loop: ";
let j = 1;
while (j <= 3) {
    whileOutput += j + " ";
    j++;
}
console.log(whileOutput);

let doWhileOutput = "Do-While loop: ";
let k = 1;
do {
    doWhileOutput += k + " ";
    k++;
} while (k <= 3);
console.log(doWhileOutput);
