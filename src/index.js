import "./input.css";

const uiForm = document.querySelector("#form");
const uiInput = document.querySelector("#form-input");
const uiError = document.querySelector("#form-error");

uiForm.addEventListener("submit", (e) => formSubmit(e));

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
