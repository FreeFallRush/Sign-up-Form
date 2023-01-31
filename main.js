"use strict";

const passIcon = document.querySelectorAll(".show-hide");
const btnSubmit = document.querySelector("button");
const passwordInput = document.getElementById("password");
const confirmedPassInput = document.getElementById("confirmedPass");
const confirmationMessage = document.querySelector(".pass-message");

//SHOW / HIDE PASSWORD WHEN THE ICON IS CLICKED
passIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    const passInput = icon.parentElement.querySelector("input");

    if (passInput.type === "password") {
      icon.classList.replace("bx-hide", "bx-show");
      return (passInput.type = "text");
    }
    icon.classList.replace("bx-show", "bx-hide");
    passInput.type = "password";
  });
});

//CHECK IF CONFIRMATION PASSWORD IS VALID
function confirmPass() {
  if (
    passwordInput.value !== confirmedPassInput.value ||
    confirmedPassInput.value === ""
  ) {
    btnSubmit.disabled = true;
    confirmationMessage.classList.remove("hidden");
    return confirmedPassInput.classList.add("error");
  }
  btnSubmit.disabled = false;
  confirmationMessage.classList.add("hidden");
  confirmedPassInput.classList.remove("error");
}
passwordInput.onchange = confirmPass;
confirmedPassInput.onkeyup = confirmPass;
