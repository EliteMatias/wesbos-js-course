import { initCurrencyConverter } from "./init.js";

const app = document.querySelector(".currency-app");
app.addEventListener("mouseenter", initCurrencyConverter, { once: true });
