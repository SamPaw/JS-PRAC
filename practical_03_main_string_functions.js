let str = "  JavaScript Programming  ";

console.log("Original string:", "'" + str + "'");
console.log("Length:", str.length);
console.log("Trimmed:", "'" + str.trim() + "'");
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Character at index 4 (charAt):", str.charAt(4));
console.log("IndexOf 'Script':", str.indexOf("Script"));
console.log("Substring (2, 12):", str.substring(2, 12));
console.log("Slice (2, 12):", str.slice(2, 12));
console.log("Replace 'JavaScript' with 'Web':", str.replace("JavaScript", "Web"));
console.log("Contains 'Java' (using indexOf):", str.indexOf("Java") !== -1);
console.log("Unicode code at index 4 (charCodeAt):", str.charCodeAt(4));
console.log("Character from Unicode 65 (fromCharCode):", String.fromCharCode(65));
console.log("Concat with ' is Fun':", str.trim().concat(" is Fun"));
