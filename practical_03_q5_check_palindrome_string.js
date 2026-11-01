let word = "madam";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word.charAt(i);
}

console.log("String:", word);
if (word.toLowerCase() === reversed.toLowerCase()) {
    console.log("Result: '" + word + "' is a Palindrome.");
} else {
    console.log("Result: '" + word + "' is NOT a Palindrome.");
}
