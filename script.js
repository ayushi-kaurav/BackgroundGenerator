const body = document.querySelector("body");
const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const cssOutput = document.querySelector(".css-output");

//getting colours

let leftColor = leftInput.value;
let rightColor = rightInput.value;

const changeBackground = () => {
  const cssString = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
  body.style.background = cssString;

  cssOutput.textContent = `background: ${cssString};`;
};

//adding event on inputs

leftInput.addEventListener("change", (Event) => {
  leftColor = Event.target.value;
  changeBackground();
});

rightInput.addEventListener("change", (Event) => {
  rightColor = Event.target.value;
  changeBackground();
});

const button = document.querySelector("button");

const randomColor = () => {
  const values = "0123456789abcdef";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor((Math.random() * 100) % 16);
    color += values[randomIndex];
  }
  return color;
};

button.addEventListener("click", () => {
  leftColor = randomColor();
  rightColor = randomColor();

  leftInput.value = leftColor;
  rightInput.value = rightColor;
  changeBackground();
});
