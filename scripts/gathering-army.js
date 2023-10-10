import WarriorModule from "./modules/Warrior-Module.js";

// RESOURCES DIV
//

const resourceDiv = document.querySelector("#resource-div");

let goldCount = parseInt(localStorage.getItem("goldCount")) || 0;
let ironCount = parseInt(localStorage.getItem("ironCount")) || 0;
let woodCount = parseInt(localStorage.getItem("woodCount")) || 0;

const showAllResources = () => {
  let htmlTxt = "";

  htmlTxt = `

    <p id="wood-count">>Wood: ${woodCount}</p>
    <p id="gold-count">>Gold: ${goldCount}</p>
    <p id="iron-count">>Iron: ${ironCount}</p>

        `;

  resourceDiv.innerHTML = htmlTxt;
};

function updateCounts() {
  document.getElementById("gold-count").textContent = `Gold: ${goldCount}`;
  document.getElementById("iron-count").textContent = `Iron: ${ironCount}`;
  document.getElementById("wood-count").textContent = `Wood: ${woodCount}`;

  // Save counts to localStorage
  localStorage.setItem("goldCount", goldCount);
  localStorage.setItem("ironCount", ironCount);
  localStorage.setItem("woodCount", woodCount);
}

//
// RESOURCES DIV

// GATHERING ARMY CODE
//

const viper = document.querySelector("#viper");
const giant = document.querySelector("#giant");
const paladin = document.querySelector("#paladin");
const rogue = document.querySelector("#rogue");
const knight = document.querySelector("#knight");
const archer = document.querySelector("#archer");

const warriors = [
  {
    categoryName: "viper",
    priceGold: 50,
    image: "./images/warrior-1.jpg",
  },
  {
    categoryName: "giant",
    priceGold: 50,
    image: "./images/warrior-2.jpg",
  },
  {
    categoryName: "paladin",
    priceGold: 50,
    image: "./images/warrior-3.jpg",
  },
  {
    categoryName: "rogue",
    priceGold: 50,
    image: "./images/warrior-4.jpg",
  },
  {
    categoryName: "knight",
    priceGold: 50,
    image: "./images/warrior-5.jpg",
  },
  {
    categoryName: "archer",
    priceGold: 50,
    image: "./images/warrior-6.jpg",
  },
];

const buyViper = () => {
  const categoryName = warriors[0].categoryName;
  const priceGold = warriors[0].priceGold;
  const image = warriors[0].image;

  // TODO: check if input fields are filled out
  const newGame = {
    categoryName: categoryName,
    priceGold: priceGold,
    image: image,
  };
  WarriorModule.saveGame(newGame);
};

viper.addEventListener("click", buyViper);

(() => {
  showAllResources();
})();
