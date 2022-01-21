'use strict';

const modalArray = document.querySelectorAll('.modal');
// Overlay div
const overlay = document.querySelector('.overlay');
// Close Button on window
const bntCloseModal = document.querySelectorAll('.close-modal');
// Show modal buttons (1-3)
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  for (let i = 0; i < btnShowModal.length; i++) {
    modalArray[i].classList.add('hidden');
  }
  overlay.classList.add('hidden');
};

// Looping through the Node.list to attach an event listener to each of the elements
for (let i = 0; i < btnShowModal.length; i++) {
  const openModal = function () {
    modalArray[i].classList.remove('hidden');
    bntCloseModal[i].addEventListener('click', closeModal);
    overlay.classList.remove('hidden');
  };
  btnShowModal[i].addEventListener('click', openModal);
}
// Clicking on button, adds back the .hidden class

// Clicking on overlay, adds back the .hidden class
overlay.addEventListener('click', closeModal);

// Pressing Escape key, adds back the .hidden class
// We need to listen to the entire document for a keypress, keydown, or keyup event
/*
document.addEventListener('keydown', function (esc) {
  console.log(esc);
  if (esc.key === 'Escape' && !modal.classList.contains('hidden')) {
    addHidden();
  }
});
*/
