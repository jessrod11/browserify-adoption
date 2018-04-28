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

// const setPets = (petList) => {
//   console.log('petArray in setPets', petList);
//   const petArray = petList;
// };

module.exports = {
  initializer,
  getPets,
  // setPets,
};
