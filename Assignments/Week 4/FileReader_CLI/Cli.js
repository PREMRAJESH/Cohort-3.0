/*
 * This is a CLI based project
 * @param {string} file - file to read
 * @returns {number} - number of words in the file
 */
const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program.name("counter").description("CLI based File reader").version("0.0.1");

//count-Words
program
  .command("countWords")
  .description("Count the words of the file")
  .argument("<file>", "files to count words from")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(" ").length;
        console.log(`There are ${words} words in this file ${file}`);
      }
    });
  });

//count-Lines
program
  .command("countLines")
  .description("Count the lines of the file")
  .argument("<file>", "files to count Lines from")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const line = data.split("\n").length;
        console.log(`There are ${line} lines in this file ${file}`);
      }
    });
  });

//count-Letters
program
  .command("countLetters")
  .description("Count the letters of the file")
  .argument("<file>", "files to count letters from")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let letterCount = 0;
        for (let i = 0; i < data.length; i++) {
          const char = data[i];
          if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
            letterCount++;
          }
        }
        console.log(`There are ${letterCount} letters in this file ${file}`);
      }
    });
  });
program.parse();
