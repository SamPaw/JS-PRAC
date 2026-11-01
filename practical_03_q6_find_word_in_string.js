let sentence = "JavaScript is a versatile scripting language";
let searchWord = "versatile";

let position = sentence.indexOf(searchWord);

console.log("Sentence:", sentence);
if (position !== -1) {
    console.log("Word '" + searchWord + "' found at index position " + position);
} else {
    console.log("Word '" + searchWord + "' not found");
}
