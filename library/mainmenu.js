import { select, input, checkbox, confirm} from '@inquirer/prompts';
import chalk from 'chalk';
const centertext = require('center-text');

import { select, input, checkbox, confirm} from '@inquirer/prompts';
import chalk from 'chalk';
import centertext from 'center-text';

async function displayMainMenu() {
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
        };

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

          // Start game here
        }

        if (gameModeSelect === "capitals") {
          const capitalCitiesGameMode = await select({
            message: "Select the game mode for guessing the capital cities",
            choices: [
              { name: "Difficulty based", value: "difficulty" },
              { name: "Continents", value: "continents" }
            ]
          });

          if (capitalCitiesGameMode === "continents") {
            const capitalCitiesContinents = await select({
              message: "Select the continent of your choice",
              choices: [
                { name: "Africa", value: "Africa" },
                { name: "Asia", value: "Asia" },
                { name: "Europe", value: "Europe" },
                { name: "North America", value: "North America" },
                { name: "South America", value: "South America" },
                { name: "Oceania/Australia", value: "Oceania" },
              ]
            });
          }

          if (capitalCitiesGameMode === "difficulty") {
            const capitalCitiesDifficulty = await select({
              message: "Select the difficulty level of your choice",
              choices: [
                { name: "Easy", value: "Easy" },
                { name: "Medium", value: "Medium" },
                {name: "Hard", value: "Hard" } 
              ]
            });
          };
          // Logic here
        }
        break;

      case "stats":
        break;

      case "reset":
        //Logic for resetting stats
        break;

      case "credits":
        console.log(chalk.yellow("\n--- CREDITS ---"));
        console.log("Developed by Terrunda\n");
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


displayMainMenu();