let text = "banana papaya apple";
let target = "a";
let count = 0;

for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === target) {
        count++;
    }
}

console.log("String:", text);
console.log("Character '" + target + "' occurs " + count + " times.");
