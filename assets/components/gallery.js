function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No gallery found");
  }

  const imgs = Array.from(gallery.querySelectorAll("img"));
  const modal = document.querySelector(".modal-gallery");

  const prevButton = modal.querySelector(".btn-prev");
  const nextButton = modal.querySelector(".btn-next");

  let currentImage;

  function openModal() {
    if (!modal.classList.contains("hidden")) {
      console.info("Modal already open");
      return;
    }

    modal.classList.remove("hidden");

    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);
  }

  function closeModal() {
    modal.classList.add("hidden");

    window.removeEventListener("keyup", handleKeyUp);
    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPreviousImage);
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      return closeModal();
    }

    if (event.key === "ArrowRight") {
      return showNextImage();
    }

    if (event.key === "ArrowLeft") {
      return showPreviousImage();
    }
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPreviousImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info("No image to show");
      return;
    }

    modal.querySelector("img").src = el.src;

    currentImage = el;

    openModal();
  }

  imgs.forEach((img) =>
    img.addEventListener("click", (event) => showImage(event.currentTarget)),
  );

  imgs.forEach((img) =>
    img.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        showImage(event.currentTarget);
      }
    }),
  );

  modal.addEventListener("click", handleClickOutside);
}

const galleryOne = Gallery(document.querySelector("#gallery-one"));
const galleryTwo = Gallery(document.querySelector("#gallery-two"));
