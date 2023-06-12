function handleInput(e, index) {
    var input = e.target;

    if (e.keyCode === 8 || e.keyCode === 46) {
        input.value = "";

        if (index > 0) {
            var previousInput = input.previousElementSibling;
            previousInput.focus();
        }
    } else {
        if (input.value.length === 1 && index < 5) {
            var nextInput = input.nextElementSibling;
            nextInput.focus();
        }
    }
}

function checkPassword() {
    var password = "";
    for (var i = 1; i <= 6; i++) {
        password += document.getElementById("input" + i).value;
    }

    if (password === "İLAYDA") {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        clearInputs();
    }
}

function logout() {
    location.reload();
}

function clearInputs() {
    for (var i = 1; i <= 6; i++) {
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
    if (event.keyCode === 13) {
        checkPassword();
    }
}
