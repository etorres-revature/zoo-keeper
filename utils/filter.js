const filterByQuery = (query, animalsArray) => {
  let filteredResults = animalsArray;
  if (query.diet) {
    filteredResults = filteredResults.filter(
      (animal) => animal.diet === query.diet
    );
  }

  if (query.species) {
    filteredResults.filter((animal) => animal.species === query.species);
  }

  if (query.name) {
    filteredResults.filter((animal) => animal.name === query.name);
  }

  return filteredResults;
};

module.exports = filterByQuery;
