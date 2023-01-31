"use strict";

const passIcon = document.querySelectorAll(".show-hide");

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
