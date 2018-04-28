const cats = document.getElementsByClassName('cat');
const dogs = document.getElementsByClassName('dog');
const dinos = document.getElementsByClassName('dino');

const showCats = () => {
  for (let i = 0; i < dogs.length; i++) {
    const allDogs = dogs[i];
    allDogs.classList.add('hide');
  };
  for (let j = 0; j < dinos.length; j++) {
    const allDinos = dinos[j];
    allDinos.classList.add('hide');
  };
  for (let x = 0; x < cats.length; x++) {
    const allCats = cats[x];
    allCats.classList.remove('hide');
  };
};

const showDogs = () => {
  for (let i = 0; i < dogs.length; i++) {
    const allDogs = dogs[i];
    allDogs.classList.remove('hide');
  };
  for (let j = 0; j < dinos.length; j++) {
    const allDinos = dinos[j];
    allDinos.classList.add('hide');
  };
  for (let x = 0; x < cats.length; x++) {
    const allCats = cats[x];
    allCats.classList.add('hide');
  };
};

const showDinos = () => {
  for (let i = 0; i < dogs.length; i++) {
    const allDogs = dogs[i];
    allDogs.classList.add('hide');
  };
  for (let j = 0; j < dinos.length; j++) {
    const allDinos = dinos[j];
    allDinos.classList.remove('hide');
  };
  for (let x = 0; x < cats.length; x++) {
    const allCats = cats[x];
    allCats.classList.add('hide');
  };
};

const showAll = () => {
  for (let i = 0; i < dogs.length; i++) {
    const allDogs = dogs[i];
    allDogs.classList.remove('hide');
  };
  for (let j = 0; j < dinos.length; j++) {
    const allDinos = dinos[j];
    allDinos.classList.remove('hide');
  };
  for (let x = 0; x < cats.length; x++) {
    const allCats = cats[x];
    allCats.classList.remove('hide');
  };
};

const addButtonEvents = (e) => {
  const petButtons = document.getElementsByClassName('pet-button');
  for (let i = 0; i < petButtons.length; i++) {
    const allPetBtns = petButtons[i];
    allPetBtns.addEventListener('click', (e) => {
      const buttonTarget = e.target.innerHTML;
      if (buttonTarget === 'Cat') {
        showCats();
      } else if (buttonTarget === 'Dog') {
        showDogs();
      } else if (buttonTarget === 'Dino') {
        showDinos();
      } else {
        showAll();
      }
    });
  }
};

module.exports = addButtonEvents;
