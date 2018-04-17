const showPets = e => {
  const allCards = document.getElementsByClassName('pet-container');
  for (let i = 0; i < allCards.length; i++) {
    console.log('e', e);
    const domPetType = e.target.parentNode.parentNode.childNodes[7].children[0].children[0].children[1].children[0].dataset.typeName;
    if (domPetType === 'cat') {
      allCards.classList.remove('hide');
    } else if (domPetType === 'dog') {
    } else {
      allCards.classList.add('hide');
    }
  }
};

const addButtonEvents = () => {
  const petButtons = document.getElementsByClassName('pet-button');
  for (let i = 0; i < petButtons.length; i++) {
    petButtons[i].addEventListener('click', showPets);
  }
};

module.exports = addButtonEvents;
