const loadPets = ('./pets');

let petsArray = [];

const whenPetsLoad = function () {
  petsArray = JSON.parse(this.responseText).pets;
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
