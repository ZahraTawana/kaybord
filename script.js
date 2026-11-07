const textInput = document.getElementById("textInput");

const keyboard = document.getElementById("keyboard");

keyboard.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const key = event.target.innerText;
  const action = event.target.dataset.action;

  if (action === "delete") {
    textInput.value = textInput.value.slice(0, -1);
  } else if (action === "space") {
    textInput.value += " ";
  } else {
    textInput.value += key;
  }

  textInput.focus();
});
