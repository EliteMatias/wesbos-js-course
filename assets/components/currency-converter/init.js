import { fromSelect, toSelect } from "./elements.js";
import { generateOptions } from "./utils.js";
import { currencies } from "./vars.js";
import { handleInput } from "./handlers.js";

export function initCurrencyConverter() {
  const form = document.querySelector(".currency-app form");

  const optionsHTML = generateOptions(currencies);

  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener("input", handleInput);
}
