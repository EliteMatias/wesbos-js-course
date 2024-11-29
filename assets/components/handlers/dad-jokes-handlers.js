import { fetchJoke } from "../lib/dad-jokes-lib.js";
import {
  jokeLoader,
  jokeButton,
  jokeHolder,
} from "../elements/dad-jokes-elements.js";
import { randomItemFromArray } from "../utils/dad-jokes-utils.js";
import { buttonText } from "../vars/dad-jokes-vars.js";

export async function handleClick() {
  const { joke } = await fetchJoke(jokeLoader, jokeHolder, jokeButton);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent,
  );
}
