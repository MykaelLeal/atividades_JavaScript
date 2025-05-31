const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")
const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    if (emailInput.value === "") {
        alert("Por favor, preencha o seu email");
        return;
    }

    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos.");
        return;
    }

    modal.close()
})

function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true
    }
    return false
}

button.onclick = function () {
    modal.showModal()
}