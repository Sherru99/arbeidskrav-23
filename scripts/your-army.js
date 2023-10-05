document.addEventListener("DOMContentLoaded", () => {
  const goldCountElem = document.getElementById("gold-count");
  const metalCountElem = document.getElementById("metal-count");
  const woodCountElem = document.getElementById("wood-count");

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
