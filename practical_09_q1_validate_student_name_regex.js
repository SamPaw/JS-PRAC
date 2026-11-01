function validateStudentName(name) {
    let pattern = /^[A-Za-z\s]+$/;
    return pattern.test(name.trim());
}

let testNames = ["John Doe", "Alice123", "Samarthya Pawar", "Alex_Smith"];

for (let i = 0; i < testNames.length; i++) {
    let name = testNames[i];
    console.log("Name: '" + name + "' -> Valid:", validateStudentName(name));
}
