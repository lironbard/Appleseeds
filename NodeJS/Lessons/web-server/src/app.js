const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, resp) => {
  resp.render("index", {
    title: "Weather",
    name: "Liron",
  });
});

app.get("/about", (req, resp) => {
  resp.render("about", {
    title: "About Me",
    name: "Liron",
  });
});

app.get("/help", (req, resp) => {
  resp.render("help", {
    HelpText: "This is help text",
    title: "help",
    name: "Liron",
  });
});

app.get("/weather", (req, resp) => {
  resp.send({
    forecast: "Snow",
    location: "Timbakto",
  });
});

app.get("/help/*", (req, resp) => {
  resp.render("404", {
    title: "404",
    name: "Liron",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, resp) => {
  resp.render("404", {
    title: "404",
    name: "Liron",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up port 3000");
});

// app.get("/help", (req, resp) => {
//   resp.send({
//     name: "Liron",
//     age: "30",
//   });
// });

// app.get("/about", (req, resp) => {
//   resp.send("<h1>About</h1>");
// });
