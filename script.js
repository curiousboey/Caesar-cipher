function encryptText() {
    var inputText = document.getElementById('inputText').value;
    var shift = 3;
    var result = '';

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            result += inputText.charAt(i);
        }
    }

    document.getElementById('result').innerText = 'Encrypted Text: ' + result;
}
