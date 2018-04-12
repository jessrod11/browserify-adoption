const petOutputDiv = document.getElementById('pets');

const petDom = (pets) => {
  let petString = '';
  pets.forEach((pet) => {
    petString += `<div>`;
    petString += `<h1>${pet.name}</h1>`;
    petString += `</div>`;
  });
  return petString;
};

const printToDom = (petArray) => {
  petOutputDiv.innerHTML = petDom(petArray);
};

module.exports = printToDom;
