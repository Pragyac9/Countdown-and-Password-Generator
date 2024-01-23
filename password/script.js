function generatePassword() {
    var length = document.getElementById('length').value;
    var includeUppercase = document.getElementById('includeUppercase').checked;
    var includeLowercase = document.getElementById('includeLowercase').checked;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSymbols = document.getElementById('includeSymbols').checked;
    var includeCurrency = document.getElementById('includeCurrency').checked;

    let characters = "";
    let password = "";

    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()-_=+';
    if (includeCurrency) characters += '€£¥₹$₽₩₪₴';

    for (var i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    document.getElementById('generatedPassword').value = password;
}
