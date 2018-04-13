// const petDom = require('./dom');
const petButtons = document.getElementsByClassName('pet-button');

const showPets = (e) => {
  const petType = e.target.innerHTML;
  if (petType === 'Cat') {
    console.log('you clicked the cat button', e);
  } else if (petType === 'Dog') {
    console.log('you clicked the dog button', e);
  } else {
    console.log('you must be a dino', e);
  };
};

// const clearPets = (e) => {
//   const petType = e.target.innerHTML;
//   if (petType === 'Clear Pets') {
//     document.getElementById('pet-container').classList.remove('hide');
//     };
// };

const addButtonEvents = () => {
  for (let i = 0; i < petButtons.length; i++) {
    petButtons[i].addEventListener('click', showPets);
  };
};

module.exports = addButtonEvents;
