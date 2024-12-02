import { initCurrencyConverter } from "./currency-converter/init.js";

const app = document.querySelector(".currency-app");
app.addEventListener("mouseenter", initCurrencyConverter, { once: true });
