function handleInput(e, index) {
    var input = e.target;

    if (e.keyCode === 8 || e.keyCode === 46) { // Delete veya Backspace tuşuna basılırsa
        input.value = "";

        if (index > 0) {
            var previousInput = input.previousElementSibling;
            previousInput.focus();
        }
    } else {
        if (input.value.length === 1 && index < 5) { // 4 haneli şifre olduğu için index < 5
            var nextInput = input.nextElementSibling;
            nextInput.focus();
        }
    }
}

function checkPassword() {
    var password = "";
    for (var i = 1; i <= 6; i++) { // 6 haneli şifre olduğu için i <= 6
        password += document.getElementById("input" + i).value;
    }

    if (password === "ilayda") {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        clearInputs();
    }
}

function logout() {
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function clearInputs() {
    for (var i = 1; i <= 6; i++) { // 6 haneli şifre olduğu için i <= 6
        document.getElementById("input" + i).value = "";
    }
}

function moveNext(currentInput) {
    if (currentInput.value.length === 1) {
        var nextInput = currentInput.nextElementSibling;
        nextInput.focus();
    }
}

function checkEnterKey(event) {
    if (event.keyCode === 13) { // Enter tuşuna basılırsa
        checkPassword();
    }
}