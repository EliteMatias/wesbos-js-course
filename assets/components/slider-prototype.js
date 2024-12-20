function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }

  this.slider = slider;

  this.slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".btn-prev");
  const nextButton = slider.querySelector(".btn-next");

  this.startSlider();
  this.applyClasses();

  this.move = this.move.bind(this);
  prevButton.addEventListener("click", () => this.move("back"));
  nextButton.addEventListener("click", () => this.move());
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector(".current") || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.prev.classList.add("prev");
  this.current.classList.add("current");
  this.next.classList.add("next");
};

Slider.prototype.move = function (direction) {
  const classesToRemove = ["prev", "current", "next"];

  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === "back") {
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

const mySlider = new Slider(document.querySelector(".slider"));
