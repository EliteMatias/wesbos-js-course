import {
  fromSelect,
  toSelect,
} from "../elements/currency-converter-elements.js";
import { generateOptions } from "../utils/currency-converter-utils.js";
import { currencies } from "../vars/currency-converter-vars.js";
import { handleInput } from "../handlers/currency-converter-handlers.js";

export function initCurrencyConverter() {
  const form = document.querySelector(".currency-app form");

  const optionsHTML = generateOptions(currencies);

  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener("input", handleInput);
}
