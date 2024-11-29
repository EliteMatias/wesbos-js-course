import { convert } from "../lib/currency-converter-lib.js";
import { formatCurrency } from "../utils/currency-converter-utils.js";
import {
  fromInput,
  fromSelect,
  toSelect,
  toEl,
} from "../elements/currency-converter-elements.js";

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value,
  );

  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
