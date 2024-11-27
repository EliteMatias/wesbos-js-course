const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");
const jokeLoader = document.querySelector(".joke-loader");

const buttonText = [
  "ugh",
  "🤦🏻‍♂️",
  "omg dad",
  "you are the worst",
  "seriously",
  "stop it",
  "please stop",
  "that was bad",
  "that was the worst one",
];

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log("ooops, we used that one last time, look again");
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function fetchJoke() {
  jokeLoader.classList.remove("hidden");
  jokeHolder.classList.add("hidden");
  jokeButton.classList.add("hidden");
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  jokeLoader.classList.add("hidden");
  jokeHolder.classList.remove("hidden");
  jokeButton.classList.remove("hidden");
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent,
  );
}

jokeButton.addEventListener("click", handleClick);
