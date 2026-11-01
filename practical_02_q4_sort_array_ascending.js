let numbers = [50, 12, 89, 5, 34, 71];
console.log("Before sorting:", numbers);

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Sorted ascending:", numbers);
