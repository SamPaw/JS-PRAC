function validateMobile(mobile) {
    let mobilePattern = /^[6-9]\d{9}$/;
    return mobilePattern.test(mobile.trim());
}

let testNumbers = ["9876543210", "8123456789", "5123456789", "98765", "987654321012"];

for (let i = 0; i < testNumbers.length; i++) {
    let num = testNumbers[i];
    console.log("Mobile: '" + num + "' -> Valid:", validateMobile(num));
}
