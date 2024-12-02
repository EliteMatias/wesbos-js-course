export async function fetchJoke(loader, holder, button) {
  loader.classList.remove("hidden");
  holder.classList.add("hidden");
  button.classList.add("hidden");
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  loader.classList.add("hidden");
  holder.classList.remove("hidden");
  button.classList.remove("hidden");
  return data;
}
