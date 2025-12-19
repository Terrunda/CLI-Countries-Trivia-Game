import { select, input, checkbox, confirm} from '@inquirer/prompts';
import chalk from 'chalk';

async function displayMainMenu() {
    console.log(chalk.bgRgb(15, 100, 204).bold("Welcome to the Countries-Trivia"));

    const mainMenuSelection = await select ({
        message: chalk.bold("[DESCRIPTION]: In this trivia, you can choose to challenge your general knowledge by either trying to name as many countries as possible or as selecting the correct capital cities for a given list of countries."),
        choices: [
            {
                name: "Play Game",
                value: "play",
                description: "Choose the gamemode you want to play.",
            },

            {
                name: "View Statistics",
                value: "stats",
                description: "View your statistics across your play time."
            },
            
            {
                name: "Reset Statistics",
                value: "reset",
                description: "Reset your statistics."

            },

            {
                name: "Quit",
                value: "quit"
            }
        ]
        });


        switch (mainMenuSelection) {
            case "play":

                break;
        }
}


displayMainMenu();
