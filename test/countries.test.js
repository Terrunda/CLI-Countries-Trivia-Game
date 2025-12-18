const {returnCountryTable, sortCountriesByContinent, sortCountriesByDifficulty} = require("../library/countries.js");
    test("",() => {
        expect(sortCountriesByContinent("South America")).toEqual([{capital: "Buenos Aires", difficulty: "Easy"},
            {capital: "Sucre", difficulty: "Medium"},
            {capital: "Brasília", difficulty: "Easy"},
            {capital: "Santiago", difficulty: "Easy"},
            {capital: "Bogotá", difficulty: "Easy"},
            {capital: "Quito", difficulty: "Medium"},
            {capital: "Georgetown", difficulty: "Hard"},
            {capital: "Asunción", difficulty: "Hard"},
            {capital: "Lima", difficulty: "Easy"},
            {capital: "Paramaribo", difficulty: "Hard"},
            {capital: "Montevideo", difficulty: "Medium"},
            {capital: "Caracas", difficulty: "Easy"}]);
});