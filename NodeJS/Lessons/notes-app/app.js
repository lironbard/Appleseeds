//const validator = require("validator");
// console.log(validator.isEmail("walla.com"));
// console.log(validator.isURL("https://walla.co.il"));

//------------------------------------------------------------\\
// const msg = getNotes();
// console.log(msg);

// console.log(chalk.bold.inverse.red.bgBlue("NICE"));

// console.log(process.argv[0]);
//------------------------------------------------------------\\

const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

// Create add command

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler() {
    notes.listNotes();
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
