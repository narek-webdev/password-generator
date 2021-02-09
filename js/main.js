var symbols = ["~", "`", "!", "@", "#", "£", "€", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "}", "{", "|", "]", "[", "/", ">", "<", "."];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase_characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "y", "w"];
var uppercase_characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "I", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "Y", "W"];

var arr = [];

for (var i = 6; i <= 100; i++) {
    document.getElementById("length_select").innerHTML += '<option>'+i+'</option>';
}

document.getElementById("copyPassword").addEventListener("click", function () {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
});

document.getElementById("generate").addEventListener("click", function () {
    var symbolChecked = document.getElementById("symbols").checked;
    var numberChecked = document.getElementById("numbers").checked;
    var lowercaseCharacterChecked = document.getElementById("lowercase_characters").checked;
    var uppercaseCharactersChecked = document.getElementById("uppercase_characters").checked;
    var selectAuto = document.getElementById("select_auto").checked;

    if (!symbolChecked && !numberChecked && !lowercaseCharacterChecked && !uppercaseCharactersChecked) {
        document.getElementById("symbols").checked = true;

        symbolChecked = true;
    }
    
    var password_length = document.getElementById("length_select").value;
    var rand = "";

    arr = [];
    
    symbolChecked ? arr.push(...symbols) : null;
    numberChecked ? arr.push(...numbers) : null;
    lowercaseCharacterChecked ? arr.push(...lowercase_characters) : null;
    uppercaseCharactersChecked ? arr.push(...uppercase_characters) : null;

    document.getElementById("output").value = "";

    for (var x = 0; x < password_length; x++) {
        rand = arr[ Math.floor(Math.random() * arr.length) ];

        document.getElementById("output").value += rand;
    }

    if (selectAuto) {
        document.getElementById("output").select();
    }

});