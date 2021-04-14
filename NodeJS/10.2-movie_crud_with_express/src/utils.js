const fs = require("fs");

const loadMovies = () => {
  try {
    const dataBuffer = fs.readFileSync("movies.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const findMovie = (title) => {
  const movies = loadMovies();
  const movie = movies.find((movie) => movie.title === title);

  if (movie) {
    console.log(movie.title);
    console.log(movie.body);
  } else {
    console.log("Note not found!");
  }
  console.log("found your movie");
};

const create = () => {
  return "Movie Created";
};

module.exports = {
  findMovie,
  loadMovies,
  create,
};
