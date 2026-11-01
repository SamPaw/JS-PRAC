function validatePassword(pass) {
    let passPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passPattern.test(pass);
}

let testPasswords = ["Pass1234", "password", "12345678", "Secure99!", "p1"];

for (let i = 0; i < testPasswords.length; i++) {
    let p = testPasswords[i];
    console.log("Password: '" + p + "' -> Valid:", validatePassword(p));
}
