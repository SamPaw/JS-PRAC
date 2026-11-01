let str1 = "Apple";
let str2 = "Banana";

console.log("String 1:", str1);
console.log("String 2:", str2);

if (str1 === str2) {
    console.log("Both strings are equal.");
} else if (str1 < str2) {
    console.log("'" + str1 + "' comes before '" + str2 + "' alphabetically.");
} else {
    console.log("'" + str1 + "' comes after '" + str2 + "' alphabetically.");
}
