function validateEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
}

let testEmails = ["student@mitwpu.edu.in", "valid.name@domain.com", "invalid-email", "test@domain", "name@.com"];

for (let i = 0; i < testEmails.length; i++) {
    let email = testEmails[i];
    console.log("Email: '" + email + "' -> Valid:", validateEmail(email));
}
