import ResourceModule from "/modules/ResourceModule.js";

const woodSection = document.querySelector("#wood-count");
const goldSection = document.querySelector("#gold-count");
const ironSection = document.querySelector("#iron-count");
const resourceDiv = document.querySelector("#resource-div");

const showAllResources = () => {
  const resources = ResourceModule.getAll();

  let htmlTxt = "";

  resources.forEach((resource) => {
    htmlTxt += `

    <p id="wood-count">>Wood: ${resource.wood}</p>
    <p id="gold-count">>Gold: ${resource.gold}</p>
    <p id="iron-count">>Iron: ${resource.iron}</p>

        `;
  });

  resourceDiv.innerHTML = htmlTxt;
};

(() => {
  showAllResources();
})();
