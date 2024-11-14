const cardButtons = document.querySelectorAll('.card button');
const cardImages = document.querySelectorAll('.card img');
const modal = document.querySelector('.modal');
const modalInnerContent = modal.querySelector('.modal-inner--content');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');

  const name = card.dataset.name;
  const img = card.querySelector('img').src;

  modalInnerContent.innerHTML = `
    <img src="${img}" alt="">
    <p>You've clicked this card: ${name}</p>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

cardButtons.forEach(function(button) {
  button.addEventListener('click', handleCardButtonClick);
});

cardImages.forEach(function(button) {
  button.addEventListener('click', handleCardButtonClick);
});

// Close modal when clicking outside of it
modal.addEventListener('click', function(event) {
  const isOutside = event.target.closest('.modal-inner');

  if (!isOutside) {
    closeModal();
  }
});

// Close modal when pressing the Escape key
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});