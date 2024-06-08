function validateFullName(fullName) {
    const nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(fullName);
}

// Test examples
console.log(validateFullName("John Doe"));      // true
console.log(validateFullName("john doe"));      // true
console.log(validateFullName("JohnDoe"));       // true
console.log(validateFullName("John Doe123"));   // false (digits not allowed)
console.log(validateFullName("John-Doe"));      // false (hyphen not allowed)
console.log(validateFullName(" "));             // false (space only)
