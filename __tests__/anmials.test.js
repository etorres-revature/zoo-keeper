const fs = require("fs");
const {
  filterByQuery,
  findByID,
  createNewAnimal,
  validateAnimal,
} = require("../utils/animalFuncs");
const { animals } = require("../db/animals.json");

jest.mock("fs")

let startingAnimals = () => {
  return [
    {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
      personalityTraits: ["quirky", "rash"],
    },
    {
      id: "4",
      name: "Noel",
      species: "bear",
      diet: "carnivore",
      personalityTraits: ["impish", "sassy", "brave"],
    },
  ];
};

test("creates an animal object", () => {
  const animal = createNewAnimal(
    { name: "Darlene", id: "jhgdja3ng2" },
    animals
  );

  expect(animal.name).toBe("Darlene");
  expect(animal.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
  let startingAnimal = startingAnimals();

  const updateAnimals = filterByQuery({ species: "gorilla" }, startingAnimal);

  expect(updateAnimals.length).toEqual(1);
});

test("finds by id", () => {
  let startingAnimal = startingAnimals();

  const result = findByID("3", startingAnimal);

  expect(result.name).toBe("Erica");
});

test("validates personality trait", () => {
  const animal = {
    id: "3",
    name: "Erica",
    species: "gorilla",
    diet: "omnivore",
    personalityTraits: ["quirky", "rash"],
  };

  const individualAnimal = {
    id: "3",
    name: "Erica",
    species: "gorilla",
    diet: "omnivore",
  };

  const result = validateAnimal(animal);
  const result2 = validateAnimal(individualAnimal);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
