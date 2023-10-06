import WarriorModule from "./modules/WarriorModule.js";

document.addEventListener("DOMContentLoaded", () => {
  const goldCountElem = document.querySelector("#gold-count");
  const metalCountElem = document.querySelector("#metal-count");
  const woodCountElem = document.querySelector("#wood-count");

  let gold = parseInt(localStorage.getItem("gold")) || 0;
  let metal = parseInt(localStorage.getItem("metal")) || 0;
  let wood = parseInt(localStorage.getItem("wood")) || 0;

  const updateCounts = () => {
    goldCountElem.textContent = `Gold: ${gold}`;
    metalCountElem.textContent = `Metal: ${metal}`;
    woodCountElem.textContent = `Wood: ${wood}`;
  };

  updateCounts();
});

const viper = document.querySelector("#viper");
const giant = document.querySelector("#giant");
const paladin = document.querySelector("#paladin");
const rogue = document.querySelector("#rogue");
const knight = document.querySelector("#knight");
const archer = document.querySelector("#archer");

const cannon = document.querySelector("#cannon");
const catapult = document.querySelector("#catapult");
const elephant = document.querySelector("#elephant");

const warriorTypes = [
  {
    categoryName: "viper",
    priceGold: 50,
    image: "/images/warrior-1",
  },
  {
    categoryName: "giant",
    priceGold: 100,
    image: "/images/warrior-2",
  },
  {
    categoryName: "paladin",
    priceGold: 150,
    image: "/images/warrior-3",
  },
  {
    categoryName: "rogue",
    priceGold: 50,
    image: "/images/warrior-4",
  },
  {
    categoryName: "knight",
    priceGold: 200,
    image: "images/warrior-5",
  },
  {
    categoryName: "archer",
    priceGold: 100,
    image: "/images/warrior-6",
  },
];

const titleTxt = document.querySelector("#title-txt");
const categorySelect = document.querySelector("#category-select");
const saveMovieBtn = document.querySelector("#save-movie-btn");

const saveMovie = () => {
  // NB! Har ikke inkludert sjekk av om brukeren har tastet inn noe for å holde koden minst mulig.
  const categoryName = warriorTypes[0].categoryName;
  const priceGold = warriorTypes[0].priceGold;
  const image = warriorTypes[0].image;

  const newMovie = {
    categoryName: categoryName,
    priceGold: priceGold,
    image: image,
  }; // { propName: value }

  WarriorModule.saveMovie(newMovie); // sender ny film til modulen
};

viper.addEventListener("click", saveMovie);
