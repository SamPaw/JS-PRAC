let cities = ["Mumbai", "Pune", "Delhi", "Nagpur", "Nashik"];
let searchCity = "Pune";

let index = cities.indexOf(searchCity);

console.log("Cities:", cities);
if (index !== -1) {
    console.log("City '" + searchCity + "' found at index " + index);
} else {
    console.log("City '" + searchCity + "' not found");
}
