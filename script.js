// Function to handle both button click and Enter key press
function handleEncryption() {
    var inputText = document.getElementById('inputText').value;
    encryptText(inputText);
}

function encryptText(inputText) {
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

    var resultElement = document.getElementById('result');
    resultElement.innerText = 'Encrypted Text: ' + result;
    resultElement.style.color = '#333';
}

// Listen for Enter key press
document.getElementById('inputText').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        handleEncryption();
    }
});
