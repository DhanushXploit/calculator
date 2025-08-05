const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

function safeEvaluate(expression) {
  if (/^[0-9+\-*/%.() ]+$/.test(expression)) {
    try {
      return new Function("return " + expression)();
    } catch {
      return "Error";
    }
  } else {
    return "Invalid";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.textContent.trim());
    const value = button.textContent.trim();

    if (value === "=") {
      let result = safeEvaluate(display.textContent.trim());
      display.textContent = result;
    } else if (value === "AC") {
      display.textContent = "0";
    } else if (value === "⌫") {
      display.textContent = display.textContent.slice(0, -1);
      if (display.textContent === "") {
        display.textContent = "0";
      }
    } else {
      if (display.textContent === "0") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});
