function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No gallery found");
  }

  this.gallery = gallery;

  this.imgs = Array.from(gallery.querySelectorAll("img"));
  this.modal = document.querySelector(".modal-gallery");

  this.prevButton = this.modal.querySelector(".btn-prev");
  this.nextButton = this.modal.querySelector(".btn-next");

  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);
  this.showNextImage = this.showNextImage.bind(this);
  this.showPreviousImage = this.showPreviousImage.bind(this);

  this.imgs.forEach((img) =>
    img.addEventListener("click", (event) =>
      this.showImage(event.currentTarget),
    ),
  );

  this.imgs.forEach((img) =>
    img.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        this.showImage(event.currentTarget);
      }
    }),
  );

  this.modal.addEventListener("click", this.handleClickOutside);
}

Gallery.prototype.openModal = function () {
  if (!this.modal.classList.contains("hidden")) {
    console.info("Modal already open");
    return;
  }

  this.modal.classList.remove("hidden");

  window.addEventListener("keyup", this.handleKeyUp);
  this.nextButton.addEventListener("click", this.showNextImage);
  this.prevButton.addEventListener("click", this.showPreviousImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.add("hidden");

  window.removeEventListener("keyup", this.handleKeyUp);
  this.nextButton.removeEventListener("click", this.showNextImage);
  this.prevButton.removeEventListener("click", this.showPreviousImage);
};

Gallery.prototype.handleClickOutside = function (event) {
  if (event.target === event.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (event) {
  if (event.key === "Escape") {
    return this.closeModal();
  }

  if (event.key === "ArrowRight") {
    return this.showNextImage();
  }

  if (event.key === "ArrowLeft") {
    return this.showPreviousImage();
  }
};

Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild,
  );
};

Gallery.prototype.showPreviousImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild,
  );
};

Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info("No image to show");
    return;
  }

  this.modal.querySelector("img").src = el.src;

  this.currentImage = el;

  this.openModal();
};

const galleryOne = new Gallery(document.querySelector("#gallery-one"));
const galleryTwo = new Gallery(document.querySelector("#gallery-two"));
