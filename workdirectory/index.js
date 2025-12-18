#!/usr/bin/env node
import {returnCountryTable, sortCountriesByContinent, sortCountriesByDifficulty} from '../library/countries.js'

async function startTrivia() {
    console.log("--- Welcome to the Countries Trivia Game! ---");
    const countryTable = returnCountryTable();
    // 1. Pick a random continent
    const continents = Object.keys(countryTable);
    const randomContinent = continents[Math.floor(Math.random() * continents.length)];
    console.log(randomContinent)
}

startTrivia();