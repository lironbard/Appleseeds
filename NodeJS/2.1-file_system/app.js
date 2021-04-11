const fs = require("fs");

fs.writeFileSync("text.txt", " Create a new txt file using the same fs module method we have learned before");

fs.copyFileSync("text.txt", "destination.txt");

fs.rename("text.txt", "newFileText.txt", (err) => {
  if (err) throw err;
  console.log("Rename complete!");
});

fs.readdir("./", (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

fs.rename("destination.txt", "newDestination.txt", (err) => {
  if (err) throw err;
  console.log("Rename complete!");
});

// 1. Create a new txt file using the same fs module method we have
// learned before.
// 2. Create a copy of the newly created txt file using a method from
// the fs module.
// 3. Rename one of the files using a method from the fs module.
// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
// 5. Find out and implement another method for the fs module.
