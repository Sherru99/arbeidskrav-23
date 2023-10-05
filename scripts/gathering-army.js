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
