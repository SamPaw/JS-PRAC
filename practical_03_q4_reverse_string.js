let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
}

console.log("Original String:", str);
console.log("Reversed String:", reversed);
