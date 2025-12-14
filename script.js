const yourName = document.querySelector("#username");
const button = document.querySelector("#greetButton");
const greeting = document.querySelector("#greeting");

button.addEventListener("click", (event) => {
  greeting.innerText = `Hello, ${yourName.value}!`;
});
