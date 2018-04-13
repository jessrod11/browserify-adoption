const domEvents = require('./events');

const petOutputDiv = document.getElementById('pets');

const petDom = (pets) => {
  let petString = '';
  pets.forEach((pet) => {
    petString += `<div class="pet-container">`;
    petString += `<h1>${pet.name}</h1>`;
    petString += `<img class="pet-image" src=${pet.imageUrl}>`;
    petString += `<h2>${pet.color}</h2>`;
    petString += `<p>${pet.specialSkill}</p>`;
    petString += `<h2>${pet.type}</h2>`;
    petString += `</div>`;
  });
  return petString;
};

const printToDom = (petArray) => {
  petOutputDiv.innerHTML = petDom(petArray);
  domEvents();
};

module.exports = printToDom;
