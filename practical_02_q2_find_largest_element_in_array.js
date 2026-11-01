let arr = [24, 78, 12, 95, 43, 67];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Array:", arr);
console.log("Largest element:", largest);
