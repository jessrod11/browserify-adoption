const domEvents = require('./events');

const petOutputDiv = document.getElementById('pets');

const petDom = pets => {
  let petString = '';
  pets.forEach(pet => {
    petString += `<div class="col-sm-4 text-center pet-container">`;
    petString += `<div class="panel panel-default">`;
    petString += `<div class="panel-body">`;
    petString += `<h1>${pet.name}</h1>`;
    petString += `<img class="pet-image" src=${pet.imageUrl}>`;
    petString += `<h2>${pet.color}</h2>`;
    petString += `<p>${pet.specialSkill}</p>`;
    petString += `</div>`;
    petString += `<div class="panel-footer">`;
    petString += `<h2 data-type-name="${pet.type}">${pet.type}</h2>`;
    petString += `</div>`;
    petString += `</div>`;
    petString += `</div>`;
    petString += `</div>`;
  });
  return petString;
};

const printToDom = petArray => {
  petOutputDiv.innerHTML = petDom(petArray);
  domEvents();
};

module.exports = printToDom;
