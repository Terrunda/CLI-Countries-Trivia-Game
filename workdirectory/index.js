#!/usr/bin/env node
/*import { checkbox } from '@inquirer/prompts';
import {returnCountryTable, sortCountriesByContinent, sortCountriesByDifficulty} from '../library/countries.js'
import chalk from 'chalk';*/

import { select, input, checkbox, confirm} from '@inquirer/prompts';
import chalk from 'chalk';
import centertext from 'center-text';

async function displayMainMenu() {
    const centered = centertext("---Welcome to the Countries-Trivia---");
    console.log(chalk.bgHex("B0B0B0").bold(centered));

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
                name: "View credits",
                value: "credits"
            },

            {
                name: "Quit",
                value: "quit"
            }
        ]
        });


        switch (mainMenuSelection) {
            case "play":
                const gameModeSelect = await select ({
                    message: "Select the gamemode you want to play:",
                    choices: [
                        {
                            name: "Countries",
                            value: "countries",
                            description: "Test your knowledge of countries around the world"
                        },

                        {
                            name: "Capitals",
                            value: "capitals",
                            description: "Test your knowledge of capital cities of countries"
                        }
                    ]
                })

                //Quiz functionality will start from here.
                break;
            case "stats":
                // Array of gameStats objects to go here
                break;
            
            case "reset":
                // use of gameStats function will go here
                break;

            case "credits":
                console.log("placeholder");
                await select({ message: "Press Enter to go back", choices: [{ name: "Back", value: "back" }]})
                displayMainMenu();
                break;
            
            case "quit":
                const userQuitQuery = await confirm ({message: "Confirm?", default: true});

                if (userQuitQuery) {
                    console.log("Goodbye!");
                    break;
                } else if (!userQuitQuery) {
                    displayMainMenu();
                };
        };
};


displayMainMenu();
