const filterByQuery = (query, animalsArray) => {
  let personalityTraitsArray = [];

  let filteredResults = animalsArray;

  if (query.personalityTraits) {
    if (typeof query.personalityTraits === "string") {
      personalityTraitsArray = [query.personalityTraits];
    } else {
      personalityTraitsArray = query.personalityTraits;
    }
  }

  personalityTraitsArray.forEach((trait) => {
    filteredResults = filteredResults.filter(
      (animal) => animal.personalityTraits.indexOf(trait) !== -1
    );
  });

  if (query.diet) {
    filteredResults = filteredResults.filter(
      (animal) => animal.diet === query.diet
    );
  }

  if (query.species) {
    filteredResults = filteredResults.filter(
      (animal) => animal.species === query.species
    );
  }

  if (query.name) {
    filteredResults = filteredResults.filter(
      (animal) => animal.name === query.name
    );
  }

  return filteredResults;
};

const findByID = (id, animalsArray) => {
  const result = animalsArray.filter((animal) => animal.id === id)[0];

  return result;
};

const createNewAnimal = (body, animalsArray) => {
  const animal = body;
  animalsArray.push(animal);
  return animal;
};

module.exports = { filterByQuery, findByID, createNewAnimal };
