const express = require("express");
const app = express();
const fs = require("fs");
//const { get } = require("node:http");
const { findMovies, create } = require("./utils");

app.use(express.json());

// Finding all Movies
app.get("/api/movies", (req, resp) => {
  //const movie = findMovie();
  //console.log(movie);
  resp.status(200).send(movie); // meifo ze???
});

// Get all the movies with the same rating
app.get("/api/movies/query/", (req, resp) => {
  for (const query in req.query) {
    console.log(query);
  }
});

// Finding a specific movie
api.get("/api/movie/:id", (req, resp) => {
  const { id } = req.params;
  const movie = findMovies(id);
  resp.status(200).send(movie);
});

// Creating a user
app.post("/api/movies", (req, resp) => {
  try {
    const createMovie = create(req.body);
    resp.status(201).send(createMovie);
  } catch (e) {
    console.log(e);
  }
  //   console.log(req.body);
  //   const createMovie = create(req.body);
  //   resp.status(201).send(createMovie);
});

// PUT - Updating an existing movie
app.put("/api/movies/:id", (req, resp) => {
  const { id } = req.params;
  const movie = req.body;
  console.log(id, movie);
});

app.delete("/api/movies/:id", (req, res) => {
  const { id } = req.params;
});

// Get all the movies with the same rating
app.get("/api/movies/query/", (req, resp) => {
  console.log("query");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening");
});

// we will be using a json file for our “database”. But now
// we wont be getting the input from yargs but we will get it
// from via postman inside the body.
// We will be creating a simple movie app.
// The user is able to do the following:
// Find all Movies,
// Create a movie,
// Find a single movie,
// Update an existing movie,
// Delete an existing movie
// The movie should contain the following:
// A unique id,
// A title,
// A rating
// A genre (can be more than one)
// Length of the movie
// When creating your own api. You should think of the best way to
// structure your endpoints. Here is an example of how you should do
// it in this app.
