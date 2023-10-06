const WarriorModule = (() => {
  const itemName = "army"; // greit å definere en variabel som inneholder navnet på localStorage item, da er det lettere å unngå å skrive feil, samt at hvis man trenger å endre på navnet gjør man det bare her.

  /*
          ***
          Main functions to be used by HTML
          ***
      */
  const getAll = () => {
    if (checkIfLocalStorageIsNotEmpty()) {
      return getLocalStorageMoviesParsed();
    } else {
      return [];
    }
  };

  const saveMovie = (newMovie) => {
    const newRandomId = crypto.randomUUID(); // genererer en tilfeldig UUID: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
    newMovie.id = newRandomId;

    const newArray = getAll();
    newArray.push(newMovie);

    const newArrayStringified = JSON.stringify(newArray);

    localStorage.setItem(itemName, newArrayStringified);
  };

  const getByCategory = (category) => {
    const fullArray = getAll();
    const filteredArray = fullArray.filter(
      (movie) => movie.category === category
    );
    return filteredArray;
  };

  const getById = (id) => {
    const fullArray = getAll();
    const movieById = fullArray.find((movie) => movie.id === id); // find() har den fordelen at den kan finne noe unikt og returnere et enkeltobjekt
    return movieById;
  };

  const deleteMovie = (id) => {
    // det finnes flere måter å slette noe på fra en array. Måten nedenfor gjør at man lar være å inkludere filmen som har id'en som er angitt.
    const fullArray = getAll();
    const newArrayWithoutDeleteMovie = fullArray.filter(
      (movie) => movie.id !== id
    );
    localStorage.setItem(itemName, JSON.stringify(newArrayWithoutDeleteMovie));
  };

  /*
          ***
          Helper functions: not to be used outside module
          ***
      */
  const checkIfLocalStorageIsNotEmpty = () => {
    if (localStorage.getItem(itemName) != null) {
      return true;
    } else {
      return false;
    }
  };

  const getLocalStorageMoviesParsed = () => {
    return JSON.parse(localStorage.getItem(itemName)); // viktig å huske at man må JSON.stringify ved lagring, og JSON.parse ved henting
  };

  /*
          ***
          Functions available to use from outside the Module.
          Also quick overview of functionality.
          ***
      */
  return {
    getAll,
    getByCategory,
    getById,
    saveMovie,
    deleteMovie,
  };
})();

export default WarriorModule;
