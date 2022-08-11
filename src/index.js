import "./input.css";

const uiForm = document.querySelector("#form");
const uiInput = document.querySelector("#form-input");
const uiError = document.querySelector("#form-error");

uiForm.addEventListener("submit", (e) => formSubmit(e));

const uiMenuBtn = document.getElementById("menu-btn");
const uiMenu = document.getElementById("menu");

uiMenuBtn.addEventListener("click", navToggle);

// Toggle Mobile Menu
function navToggle() {
  uiMenuBtn.classList.toggle("open");
  uiMenu.classList.toggle("flex");
  uiMenu.classList.toggle("hidden");
}

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  console.log(uiInput.value);

  if (uiInput.value === "") {
    uiError.innerHTML = "Please enter something";
    uiInput.classList.add("border-red");
  } else if (!validURL(uiInput.value)) {
    uiError.innerHTML = "Please enter a valid URL";
    uiInput.classList.add("border-red");
  } else {
    uiError.innerHTML = "";
    uiInput.classList.remove("border-red");
    alert("Success");
  }
}
