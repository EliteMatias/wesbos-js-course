import { fetchJoke } from "./lib.js";
import { jokeLoader, jokeButton, jokeHolder } from "../dad-jokes/elements.js";
import { randomItemFromArray } from "./utils.js";
import { buttonText } from "./vars.js";

export async function handleClick() {
  const { joke } = await fetchJoke(jokeLoader, jokeHolder, jokeButton);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent,
  );
}
