const paragraphElement = document.querySelector("p");
const inputElement = document.querySelector("form input");
const spanElement = document.getElementById("remaining-chars");
const maxAllowedChars = inputElement.maxLength;
const labelElement = document.querySelector(".control label");

function changeParaghraphText(event) {
  const numberOfRemainedChars = maxAllowedChars - event.target.value.length;
  spanElement.textContent = numberOfRemainedChars;
  if (numberOfRemainedChars < 10) {
    spanElement.classList.add("warning");
    inputElement.classList.add("warning");
  } else {
    spanElement.classList.remove("warning");
    inputElement.classList.remove("warning");
  }
}

inputElement.addEventListener("input", changeParaghraphText);
