import { initCurrencyConverter } from "./init/init.js";

const app = document.querySelector(".currency-app");
app.addEventListener("mouseenter", initCurrencyConverter, { once: true });
