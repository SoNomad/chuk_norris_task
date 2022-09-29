const fn = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const jokeObject = await response.json();
  jokeText.textContent = jokeObject.value;
};

const btn = document.createElement("button");
btn.textContent = "say";

const jokeContainer = document.querySelector(".joke_div");

const jokeText = document.createElement("div");
jokeContainer.append(jokeText, btn);

btn.addEventListener("click", () => {
  fn();
});
