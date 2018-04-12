const loadPets = require ('./pets');
const printToDom = require('./dom');

let petsArray = [];

const whenPetsLoad = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
};

const badPets = function () {
  console.error('What happened, Stix?!');
};

const initializer = () => {
  loadPets(whenPetsLoad, badPets);
};

const getPets = () => {
  return petsArray;
};

module.exports = {
  initializer,
  getPets,
};
