const WarriorModule = (() => {
  const itemName = "warriors";

  const getAll = () => {
    return getLocalStorageOrEmptyArray();
  };

  const saveGame = (newGame) => {
    const gameArray = getLocalStorageOrEmptyArray();
    newGame.id = Math.floor(Math.random() * 999999); // Ikke optimal måte å lage id på siden det er en viss risiko at man får like id'er, men vises her som et konsept.
    gameArray.push(newGame);
    localStorage.setItem(itemName, JSON.stringify(gameArray));
  };

  // HELPERS
  const getLocalStorageOrEmptyArray = () => {
    if (localStorage.getItem(itemName) != null) {
      const gameArray = JSON.parse(localStorage.getItem(itemName));
      return gameArray;
    } else {
      return [];
    }
  };

  return {
    getAll,
    saveGame,
  };
})();

export default WarriorModule;
