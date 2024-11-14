function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  let current;
  let prev;
  let next;

  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.btn-prev');
  const nextButton = slider.querySelector('.btn-next');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    prev.classList.add('prev');
    current.classList.add('current');
    next.classList.add('next');
  }

  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];

    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
    } else {
      [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
    }

    applyClasses();
  }

  startSlider();
  applyClasses();

  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));