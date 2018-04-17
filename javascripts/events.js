const showPets = e => {
  const allCards = document.getElementsByClassName('pet-container');
  for (let i = 0; i < allCards.length; i++) {
    console.log('e', e);
    // const domPetType = e.target.parentNode.parentNode.childNodes[7].children[0].children[0].children[1].children[0];
  }
};

const addButtonEvents = () => {
  const petButtons = document.getElementsByClassName('pet-button');
  for (let i = 0; i < petButtons.length; i++) {
    petButtons[i].addEventListener('click', showPets);
  }
};

module.exports = addButtonEvents;
