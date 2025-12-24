import { select, input, checkbox, confirm} from '@inquirer/prompts';
import chalk from 'chalk';
import centertext from 'center-text';


//Countries functions 
import {listOfCountriesByContinent, listofAllCountries} from '../library/countries.js'

export async function displayMainMenu() {
  let isRunning = true;

  while (isRunning) {
    const centered = centertext("---Welcome to the Countries-Trivia---");
    console.log(chalk.bgHex("B0B0B0").bold(centered));

    const mainMenuSelection = await select({
      message: chalk.bold("[DESCRIPTION]: In this trivia, you can challenge your knowledge of countries and capitals."),
      choices: [
        { name: "Play Game", value: "play" },
        { name: "View Statistics", value: "stats" },
        { name: "Reset Statistics", value: "reset" },
        { name: "View Credits", value: "credits" },
        { name: "Quit", value: "quit" }
      ]
    });

    switch (mainMenuSelection) {
      case "play":
        const gameModeSelect = await select({
          message: "Select the gamemode you want to play:",
          choices: [
            { name: "Countries", value: "countries" },
            { name: "Capitals", value: "capitals" },
            { name: "Return to main menu", value: "back" }
          ]
        });

        if (gameModeSelect === "back") {
          continue;
        }

        // --- COUNTRIES MODE ---
        if (gameModeSelect === "countries") {
          const continent = await select({
            message: "Select a continent:",
            choices: [
              { name: "All", value: "all" },
              { name: "Africa", value: "Africa" },
              { name: "Asia", value: "Asia" },
              { name: "Europe", value: "Europe" },
              { name: "North America", value: "North America" },
              { name: "South America", value: "South America" },
              { name: "Oceania/Australia", value: "Oceania" },
              { name: "Return to main menu", value: "back" }
            ]
          });

          if (continent === "back") {
            continue;
          }

          let dataCallback;
          if (continent === "all") {
            dataCallback = listofAllCountries;
          } else {
            dataCallback = listOfCountriesByContinent;
          }
          await startGameModeForCountries(continent, dataCallback);
        }

        if (gameModeSelect === "capitals") {
          const comingSoonMessage = await select({
            message: "Coming soon",
            choices: [
              { name: "Return to main menu", value: "back" }
            ]
          });

          if (comingSoonMessage === "back") {
            continue;
          }
        }
        break;

      case "stats":
        console.log(chalk.yellow("\nStatistics are coming soon!\n"));
        await input({ message: "Press Enter to return..." });
        break;

      case "reset":
        console.log(chalk.yellow("\nReset function coming soon!\n"));
        await input({ message: "Press Enter to return..." });
        break;

      case "credits":
        console.log(chalk.yellow("--- CREDITS ---"));
        console.log("Created by Terrunda");

        const uncenteredText = chalk.underline.bold("---Resources used---");
        const centeredText = centertext(uncenteredText);

        console.log(centeredText);
        console.log(chalk.green("Chalk") + " used for CLI Styling");
        console.log(chalk.green("@inquirer/prompts") +  " used for enabling the functionality of the CLI such as user prompts, selections and confirmations.");
        console.log(chalk.green("center-text") + " for centering the ---Welcome to the Countries Trivia--- message.");
        await input({ message: "Press Enter to return..." });
        break;

      case "quit":
        const userQuitQuery = await confirm({ message: "Are you sure you want to quit?" });
        if (userQuitQuery) {
          console.log(chalk.blue("Goodbye!"));
          isRunning = false;
        }
        break;
    }
  }
}
async function startGameModeForCountries(value, callback) {

  const fetchedCountryArray = callback(value);

  let remainingCountries = [...fetchedCountryArray]; 

  let guessedCountries = [];
  
  const totalCountries = remainingCountries.length;
  let hasQuit = false;

  console.clear();
  console.log(chalk.magenta.bold(`\n--- QUIZ START: ${value === 'all' ? 'The World' : value} ---`));
  console.log(chalk.dim(`There are ${totalCountries} countries to guess. Type 'quit' to exit.`));


  while (remainingCountries.length > 0) {
    

    console.log(chalk.yellow(`\nScore: ${guessedCountries.length} / ${totalCountries}`));

    const answer = await input({
      message: `Name a country in ${value}:`,
      required: true,
    });

    if (answer.trim().toLowerCase() === "quit") {
      hasQuit = true;
      break;
    };

    const foundIndex = remainingCountries.findIndex(
      (countries) => countries.toLowerCase() === answer.trim().toLowerCase() //Used to accept lowercase answers and white spaces.
    );

    if (foundIndex !== -1) {
      const countryName = remainingCountries[foundIndex];
      
      remainingCountries.splice(foundIndex, 1);
      guessedCountries.push(countryName);

      console.log(chalk.green(`✔ Correct! ${countryName} added.`));
    } else {

      const alreadyGuessed = guessedCountries.some(
        (c) => c.toLowerCase() === answer.trim().toLowerCase()
      );

      if (alreadyGuessed) {
        console.log(chalk.yellow(`⚠ You already guessed ${answer}!`));
      } else {
        console.log(chalk.red(`✘ '${answer}' is not a valid country in this list.`));
      }
    }
  }

  console.log(chalk.bgBlue("\n--- GAME OVER ---"));
  if (!hasQuit) {
    console.log(chalk.green.bold("CONGRATULATIONS! You named all of them!"));
  }
  console.log(`Final Score: ${guessedCountries.length} / ${totalCountries}`);
  await input({ message: "Press Enter to return to Main Menu..." });
};


/* function startGameModeForCapitals(value, callback) {

}; */

