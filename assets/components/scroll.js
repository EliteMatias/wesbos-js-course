const scrollable = document.querySelector('.scrollable');
const scrollableEnd = scrollable.querySelector('.scrollable-end');
const btn = document.querySelector('.btn-scrollable');

function observerCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    btn.disabled = false;

    observer.unobserve(scrollable.lastElementChild);
  }
}

const observer = new IntersectionObserver(observerCallback, {
  root: scrollable,
});

observer.observe(scrollable.lastElementChild);