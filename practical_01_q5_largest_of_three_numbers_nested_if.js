let a = 25;
let b = 40;
let c = 15;
let largest;

if (a >= b) {
    if (a >= c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b >= c) {
        largest = b;
    } else {
        largest = c;
    }
}

console.log("Numbers:", a, b, c);
console.log("Largest Number:", largest);
