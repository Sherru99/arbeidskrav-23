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

  // ---------------Mining-------------------

  document.getElementById("mineImage").addEventListener("click", () => {
    mineIronGold();
  });

  const mineIronGold = () => {
    const isMetal = Math.random() < 0.75;

    if (isMetal) {
      metal += Math.floor(Math.random() * 10) + 1;
    } else {
      gold += Math.floor(Math.random() * 5) + 1;
    }

    // ----------------------------------

    // ---------------Woodcutting-------------------

    updateCounts();
    localStorage.setItem("gold", gold);
    localStorage.setItem("metal", metal);
  };

  document.getElementById("woodImage").addEventListener("click", () => {
    cutWood();
  });

  const cutWood = () => {
    wood += Math.floor(Math.random() * 15) + 1;

    updateCounts();
    localStorage.setItem("wood", wood);
  };

  // ----------------------------------
});
