export function returnCountryTable() {
  const countryTable = {
    "Africa": {
      "Algeria": {country: "Algeria", capital: "Algiers", difficulty: "Medium"},
      "Angola": {country: "Angola", capital: "Luanda", difficulty: "Hard"},
      "Benin": {country: "Benin", capital: "Porto-Novo", difficulty: "Hard"},
      "Botswana": {country: "Botswana", capital: "Gaborone", difficulty: "Hard"},
      "Burkina Faso": {country: "Burkina Faso", capital: "Ouagadougou", difficulty: "Hard"},
      "Burundi": {country: "Burundi", capital: "Gitega", difficulty: "Hard"},
      "Cabo Verde": {country: "Cabo Verde", capital: "Praia", difficulty: "Hard"},
      "Cameroon": {country: "Cameroon", capital: "Yaoundé", difficulty: "Medium"},
      "Central African Republic": {country: "Central African Republic", capital: "Bangui", difficulty: "Hard"},
      "Chad": {country: "Chad", capital: "N'Djamena", difficulty: "Hard"},
      "Comoros": {country: "Comoros", capital: "Moroni", difficulty: "Hard"},
      "Democratic Republic of the Congo": {country: "Democratic Republic of the Congo", capital: "Kinshasa", difficulty: "Medium"},
      "Republic of the Congo": {country: "Republic of the Congo", capital: "Brazzaville", difficulty: "Hard"},
      "Côte d'Ivoire": {country: "Côte d'Ivoire", capital: "Yamoussoukro", difficulty: "Hard"},
      "Djibouti": {country: "Djibouti", capital: "Djibouti", difficulty: "Hard"},
      "Egypt": {country: "Egypt", capital: "Cairo", difficulty: "Easy"},
      "Equatorial Guinea": {country: "Equatorial Guinea", capital: "Malabo", difficulty: "Hard"},
      "Eritrea": {country: "Eritrea", capital: "Asmara", difficulty: "Hard"},
      "Eswatini": {country: "Eswatini", capital: "Mbabane", difficulty: "Hard"},
      "Ethiopia": {country: "Ethiopia", capital: "Addis Ababa", difficulty: "Medium"},
      "Gabon": {country: "Gabon", capital: "Libreville", difficulty: "Hard"},
      "Gambia": {country: "Gambia", capital: "Banjul", difficulty: "Hard"},
      "Ghana": {country: "Ghana", capital: "Accra", difficulty: "Medium"},
      "Guinea": {country: "Guinea", capital: "Conakry", difficulty: "Hard"},
      "Guinea-Bissau": {country: "Guinea-Bissau", capital: "Bissau", difficulty: "Hard"},
      "Kenya": {country: "Kenya", capital: "Nairobi", difficulty: "Easy"},
      "Lesotho": {country: "Lesotho", capital: "Maseru", difficulty: "Hard"},
      "Liberia": {country: "Liberia", capital: "Monrovia", difficulty: "Hard"},
      "Libya": {country: "Libya", capital: "Tripoli", difficulty: "Medium"},
      "Madagascar": {country: "Madagascar", capital: "Antananarivo", difficulty: "Medium"},
      "Malawi": {country: "Malawi", capital: "Lilongwe", difficulty: "Hard"},
      "Mali": {country: "Mali", capital: "Bamako", difficulty: "Hard"},
      "Mauritania": {country: "Mauritania", capital: "Nouakchott", difficulty: "Hard"},
      "Mauritius": {country: "Mauritius", capital: "Port Louis", difficulty: "Medium"},
      "Morocco": {country: "Morocco", capital: "Rabat", difficulty: "Easy"},
      "Mozambique": {country: "Mozambique", capital: "Maputo", difficulty: "Hard"},
      "Namibia": {country: "Namibia", capital: "Windhoek", difficulty: "Hard"},
      "Niger": {country: "Niger", capital: "Niamey", difficulty: "Hard"},
      "Nigeria": {country: "Nigeria", capital: "Abuja", difficulty: "Easy"},
      "Rwanda": {country: "Rwanda", capital: "Kigali", difficulty: "Medium"},
      "Sao Tome and Principe": {country: "Sao Tome and Principe", capital: "São Tomé", difficulty: "Hard"},
      "Senegal": {country: "Senegal", capital: "Dakar", difficulty: "Medium"},
      "Seychelles": {country: "Seychelles", capital: "Victoria", difficulty: "Medium"},
      "Sierra Leone": {country: "Sierra Leone", capital: "Freetown", difficulty: "Hard"},
      "Somalia": {country: "Somalia", capital: "Mogadishu", difficulty: "Medium"},
      "South Africa": {country: "South Africa", capital: "Pretoria", difficulty: "Easy"},
      "South Sudan": {country: "South Sudan", capital: "Juba", difficulty: "Hard"},
      "Sudan": {country: "Sudan", capital: "Khartoum", difficulty: "Medium"},
      "Tanzania": {country: "Tanzania", capital: "Dodoma", difficulty: "Medium"},
      "Togo": {country: "Togo", capital: "Lomé", difficulty: "Hard"},
      "Tunisia": {country: "Tunisia", capital: "Tunis", difficulty: "Medium"},
      "Uganda": {country: "Uganda", capital: "Kampala", difficulty: "Medium"},
      "Zambia": {country: "Zambia", capital: "Lusaka", difficulty: "Hard"},
      "Zimbabwe": {country: "Zimbabwe", capital: "Harare", difficulty: "Medium"}
    },
    "Asia": {
      "Afghanistan": {country: "Afghanistan", capital: "Kabul", difficulty: "Easy"},
      "Armenia": {country: "Armenia", capital: "Yerevan", difficulty: "Hard"},
      "Azerbaijan": {country: "Azerbaijan", capital: "Baku", difficulty: "Hard"},
      "Bahrain": {country: "Bahrain", capital: "Manama", difficulty: "Hard"},
      "Bangladesh": {country: "Bangladesh", capital: "Dhaka", difficulty: "Medium"},
      "Bhutan": {country: "Bhutan", capital: "Thimphu", difficulty: "Hard"},
      "Brunei": {country: "Brunei", capital: "Bandar Seri Begawan", difficulty: "Hard"},
      "Cambodia": {country: "Cambodia", capital: "Phnom Penh", difficulty: "Medium"},
      "China": {country: "China", capital: "Beijing", difficulty: "Easy"},
      "Cyprus": {country: "Cyprus", capital: "Nicosia", difficulty: "Medium"},
      "Georgia": {country: "Georgia", capital: "Tbilisi", difficulty: "Hard"},
      "India": {country: "India", capital: "New Delhi", difficulty: "Easy"},
      "Indonesia": {country: "Indonesia", capital: "Jakarta", difficulty: "Easy"},
      "Iran": {country: "Iran", capital: "Tehran", difficulty: "Easy"},
      "Iraq": {country: "Iraq", capital: "Baghdad", difficulty: "Easy"},
      "Israel": {country: "Israel", capital: "Jerusalem", difficulty: "Easy"},
      "Japan": {country: "Japan", capital: "Tokyo", difficulty: "Easy"},
      "Jordan": {country: "Jordan", capital: "Amman", difficulty: "Medium"},
      "Kazakhstan": {country: "Kazakhstan", capital: "Astana", difficulty: "Medium"},
      "Kuwait": {country: "Kuwait", capital: "Kuwait City", difficulty: "Medium"},
      "Kyrgyzstan": {country: "Kyrgyzstan", capital: "Bishkek", difficulty: "Hard"},
      "Laos": {country: "Laos", capital: "Vientiane", difficulty: "Hard"},
      "Lebanon": {country: "Lebanon", capital: "Beirut", difficulty: "Medium"},
      "Malaysia": {country: "Malaysia", capital: "Kuala Lumpur", difficulty: "Easy"},
      "Maldives": {country: "Maldives", capital: "Malé", difficulty: "Medium"},
      "Mongolia": {country: "Mongolia", capital: "Ulaanbaatar", difficulty: "Medium"},
      "Myanmar": {country: "Myanmar", capital: "Naypyidaw", difficulty: "Hard"},
      "Nepal": {country: "Nepal", capital: "Kathmandu", difficulty: "Medium"},
      "North Korea": {country: "North Korea", capital: "Pyongyang", difficulty: "Easy"},
      "Oman": {country: "Oman", capital: "Muscat", difficulty: "Hard"},
      "Pakistan": {country: "Pakistan", capital: "Islamabad", difficulty: "Easy"},
      "Palestine": {country: "Palestine", capital: "Ramallah", difficulty: "Medium"},
      "Philippines": {country: "Philippines", capital: "Manila", difficulty: "Easy"},
      "Qatar": {country: "Qatar", capital: "Doha", difficulty: "Easy"},
      "Saudi Arabia": {country: "Saudi Arabia", capital: "Riyadh", difficulty: "Easy"},
      "Singapore": {country: "Singapore", capital: "Singapore", difficulty: "Easy"},
      "South Korea": {country: "South Korea", capital: "Seoul", difficulty: "Easy"},
      "Sri Lanka": {country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", difficulty: "Medium"},
      "Syria": {country: "Syria", capital: "Damascus", difficulty: "Medium"},
      "Taiwan": {country: "Taiwan", capital: "Taipei", difficulty: "Easy"},
      "Tajikistan": {country: "Tajikistan", capital: "Dushanbe", difficulty: "Hard"},
      "Thailand": {country: "Thailand", capital: "Bangkok", difficulty: "Easy"},
      "Timor-Leste": {country: "Timor-Leste", capital: "Dili", difficulty: "Hard"},
      "Turkey": {country: "Turkey", capital: "Ankara", difficulty: "Easy"},
      "Turkmenistan": {country: "Turkmenistan", capital: "Ashgabat", difficulty: "Hard"},
      "United Arab Emirates": {country: "United Arab Emirates", capital: "Abu Dhabi", difficulty: "Easy"},
      "Uzbekistan": {country: "Uzbekistan", capital: "Tashkent", difficulty: "Hard"},
      "Vietnam": {country: "Vietnam", capital: "Hanoi", difficulty: "Easy"},
      "Yemen": {country: "Yemen", capital: "Sana'a", difficulty: "Hard"}
    },
    "Europe": {
      "Albania": {country: "Albania", capital: "Tirana", difficulty: "Hard"},
      "Andorra": {country: "Andorra", capital: "Andorra la Vella", difficulty: "Hard"},
      "Austria": {country: "Austria", capital: "Vienna", difficulty: "Easy"},
      "Belarus": {country: "Belarus", capital: "Minsk", difficulty: "Medium"},
      "Belgium": {country: "Belgium", capital: "Brussels", difficulty: "Easy"},
      "Bosnia and Herzegovina": {country: "Bosnia and Herzegovina", capital: "Sarajevo", difficulty: "Medium"},
      "Bulgaria": {country: "Bulgaria", capital: "Sofia", difficulty: "Medium"},
      "Croatia": {country: "Croatia", capital: "Zagreb", difficulty: "Medium"},
      "Czechia": {country: "Czechia", capital: "Prague", difficulty: "Easy"},
      "Denmark": {country: "Denmark", capital: "Copenhagen", difficulty: "Easy"},
      "Estonia": {country: "Estonia", capital: "Tallinn", difficulty: "Hard"},
      "Finland": {country: "Finland", capital: "Helsinki", difficulty: "Easy"},
      "France": {country: "France", capital: "Paris", difficulty: "Easy"},
      "Germany": {country: "Germany", capital: "Berlin", difficulty: "Easy"},
      "Greece": {country: "Greece", capital: "Athens", difficulty: "Easy"},
      "Hungary": {country: "Hungary", capital: "Budapest", difficulty: "Easy"},
      "Iceland": {country: "Iceland", capital: "Reykjavik", difficulty: "Easy"},
      "Ireland": {country: "Ireland", capital: "Dublin", difficulty: "Easy"},
      "Italy": {country: "Italy", capital: "Rome", difficulty: "Easy"},
      "Latvia": {country: "Latvia", capital: "Riga", difficulty: "Hard"},
      "Liechtenstein": {country: "Liechtenstein", capital: "Vaduz", difficulty: "Hard"},
      "Lithuania": {country: "Lithuania", capital: "Vilnius", difficulty: "Hard"},
      "Luxembourg": {country: "Luxembourg", capital: "Luxembourg", difficulty: "Medium"},
      "Malta": {country: "Malta", capital: "Valletta", difficulty: "Hard"},
      "Moldova": {country: "Moldova", capital: "Chisinau", difficulty: "Hard"},
      "Monaco": {country: "Monaco", capital: "Monaco", difficulty: "Medium"},
      "Montenegro": {country: "Montenegro", capital: "Podgorica", difficulty: "Hard"},
      "Netherlands": {country: "Netherlands", capital: "Amsterdam", difficulty: "Easy"},
      "North Macedonia": {country: "North Macedonia", capital: "Skopje", difficulty: "Hard"},
      "Norway": {country: "Norway", capital: "Oslo", difficulty: "Easy"},
      "Poland": {country: "Poland", capital: "Warsaw", difficulty: "Easy"},
      "Portugal": {country: "Portugal", capital: "Lisbon", difficulty: "Easy"},
      "Romania": {country: "Romania", capital: "Bucharest", difficulty: "Medium"},
      "Russia": {country: "Russia", capital: "Moscow", difficulty: "Easy"},
      "San Marino": {country: "San Marino", capital: "San Marino", difficulty: "Hard"},
      "Serbia": {country: "Serbia", capital: "Belgrade", difficulty: "Medium"},
      "Slovakia": {country: "Slovakia", capital: "Bratislava", difficulty: "Medium"},
      "Slovenia": {country: "Slovenia", capital: "Ljubljana", difficulty: "Hard"},
      "Spain": {country: "Spain", capital: "Madrid", difficulty: "Easy"},
      "Sweden": {country: "Sweden", capital: "Stockholm", difficulty: "Easy"},
      "Switzerland": {country: "Switzerland", capital: "Bern", difficulty: "Easy"},
      "Ukraine": {country: "Ukraine", capital: "Kyiv", difficulty: "Easy"},
      "United Kingdom": {country: "United Kingdom", capital: "London", difficulty: "Easy"},
      "Vatican City": {country: "Vatican City", capital: "Vatican City", difficulty: "Easy"}
    },
    "North America": {
      "Antigua and Barbuda": {country: "Antigua and Barbuda", capital: "St. John's", difficulty: "Hard"},
      "Bahamas": {country: "Bahamas", capital: "Nassau", difficulty: "Medium"},
      "Barbados": {country: "Barbados", capital: "Bridgetown", difficulty: "Hard"},
      "Belize": {country: "Belize", capital: "Belmopan", difficulty: "Hard"},
      "Canada": {country: "Canada", capital: "Ottawa", difficulty: "Easy"},
      "Costa Rica": {country: "Costa Rica", capital: "San José", difficulty: "Medium"},
      "Cuba": {country: "Cuba", capital: "Havana", difficulty: "Easy"},
      "Dominica": {country: "Dominica", capital: "Roseau", difficulty: "Hard"},
      "Dominican Republic": {country: "Dominican Republic", capital: "Santo Domingo", difficulty: "Medium"},
      "El Salvador": {country: "El Salvador", capital: "San Salvador", difficulty: "Medium"},
      "Grenada": {country: "Grenada", capital: "St. George's", difficulty: "Hard"},
      "Guatemala": {country: "Guatemala", capital: "Guatemala City", difficulty: "Medium"},
      "Haiti": {country: "Haiti", capital: "Port-au-Prince", difficulty: "Medium"},
      "Honduras": {country: "Honduras", capital: "Tegucigalpa", difficulty: "Hard"},
      "Jamaica": {country: "Jamaica", capital: "Kingston", difficulty: "Easy"},
      "Mexico": {country: "Mexico", capital: "Mexico City", difficulty: "Easy"},
      "Nicaragua": {country: "Nicaragua", capital: "Managua", difficulty: "Hard"},
      "Panama": {country: "Panama", capital: "Panama City", difficulty: "Medium"},
      "Saint Kitts and Nevis": {country: "Saint Kitts and Nevis", capital: "Basseterre", difficulty: "Hard"},
      "Saint Lucia": {country: "Saint Lucia", capital: "Castries", difficulty: "Hard"},
      "Saint Vincent and the Grenadines": {country: "Saint Vincent and the Grenadines", capital: "Kingstown", difficulty: "Hard"},
      "Trinidad and Tobago": {country: "Trinidad and Tobago", capital: "Port of Spain", difficulty: "Medium"},
      "USA": {country: "USA", capital: "Washington, D.C.", difficulty: "Easy"}
    },
    "South America": {
      "Argentina": {country: "Argentina", capital: "Buenos Aires", difficulty: "Easy"},
      "Bolivia": {country: "Bolivia", capital: "Sucre", difficulty: "Medium"},
      "Brazil": {country: "Brazil", capital: "Brasília", difficulty: "Easy"},
      "Chile": {country: "Chile", capital: "Santiago", difficulty: "Easy"},
      "Colombia": {country: "Colombia", capital: "Bogotá", difficulty: "Easy"},
      "Ecuador": {country: "Ecuador", capital: "Quito", difficulty: "Medium"},
      "Guyana": {country: "Guyana", capital: "Georgetown", difficulty: "Hard"},
      "Paraguay": {country: "Paraguay", capital: "Asunción", difficulty: "Hard"},
      "Peru": {country: "Peru", capital: "Lima", difficulty: "Easy"},
      "Suriname": {country: "Suriname", capital: "Paramaribo", difficulty: "Hard"},
      "Uruguay": {country: "Uruguay", capital: "Montevideo", difficulty: "Medium"},
      "Venezuela": {country: "Venezuela", capital: "Caracas", difficulty: "Easy"}
    },
    "Oceania": {
      "Australia": {country: "Australia", capital: "Canberra", difficulty: "Easy"},
      "Fiji": {country: "Fiji", capital: "Suva", difficulty: "Medium"},
      "Kiribati": {country: "Kiribati", capital: "Tarawa", difficulty: "Hard"},
      "Marshall Islands": {country: "Marshall Islands", capital: "Majuro", difficulty: "Hard"},
      "Micronesia": {country: "Micronesia", capital: "Palikir", difficulty: "Hard"},
      "Nauru": {country: "Nauru", capital: "Yaren District", difficulty: "Hard"},
      "New Zealand": {country: "New Zealand", capital: "Wellington", difficulty: "Easy"},
      "Palau": {country: "Palau", capital: "Ngerulmud", difficulty: "Hard"},
      "Papua New Guinea": {country: "Papua New Guinea", capital: "Port Moresby", difficulty: "Hard"},
      "Samoa": {country: "Samoa", capital: "Apia", difficulty: "Hard"},
      "Solomon Islands": {country: "Solomon Islands", capital: "Honiara", difficulty: "Hard"},
      "Tonga": {country: "Tonga", capital: "Nukuʻalofa", difficulty: "Hard"},
      "Tuvalu": {country: "Tuvalu", capital: "Funafuti", difficulty: "Hard"},
      "Vanuatu": {country: "Vanuatu", capital: "Port Vila", difficulty: "Hard"}
    }
  };
  return countryTable
}


//Methods: 
export function getAllCountriesAsArray() {
  const countryTable = returnCountryTable();
  let countryArray = [];

  for (continent in countryTable) {
    const continentObject = countryTable[continent];
    for (country in continentObject) {
      const countryObject = continentObject[country];
      countryArray.push(countryObject);
    }
  }

  return countryArray;
}

export function sortCountriesByDifficulty(difficultyLevel) {
  const countryObject = returnCountryTable()
  let difficultySortedCountries = [];

  for (let continent in countryObject) {
    const continentTable = countryObject[continent];
    for (let country in continentTable) {
      const currentcountry =  continentTable[country];
      if (currentcountry.difficulty == difficultyLevel) {
        difficultySortedCountries.push(currentcountry);
      }
    }
  }
  return difficultySortedCountries;
}

export function sortCountriesByContinent(continentQuery) {
  const countryObject = returnCountryTable();
  let continentArray = [];

  for (let continent in countryObject) {
    if (continent == continentQuery) {
      const continentTable = countryObject[continent];
      for (let country in continentTable) {
        const continentCountry = continentTable[country]
        continentArray.push(continentCountry);
      }
    }
  }

  return continentArray
}

export function searchCountryfromArray(array, countryQuery) {
  for (let index = 0; index < array.length; index++) {
    const countryObject = array[index];
    if (countryObject.country === countryQuery) {
      return true;
    }
  }
  return false;
}

//Used for choice functionality:

//Used for multiple choice:
export function getRandomFourCountriesFromArray (array) {
  let newArray = [];

  while (newArray.length <= 3) {
    let randomIndexValue = Math.floor(Math.random() * array.length);
    const randomCountryObject = array[randomIndexValue];
    if (!newArray.includes(randomCountryObject)) {
      newArray.push(randomCountryObject);
    };
  }

  return newArray;
}

export function assignCorrectCountryToArray(correctCountry, array) {
  const existenceCheck = searchCountryfromArray(array, correctCountry);
  if (existenceCheck) {
    return array;
  }

  const countryTable = returnCountryTable();

  for (let continent in countryTable) {
    const continentTable = countryTable[continent];

    for (let countryData of Object.values(continentTable)) {
      
      if (countryData.country === correctCountry) {
        let randomIndexValue = Math.floor(Math.random() * array.length);
        array[randomIndexValue] = countryData;
        return array;
      }
    }
  }
  return array;
}

//Used for checking user input
export function listOfCountriesByContinent(continent) {
  const listArray = [];
  const arrayofObjects = sortCountriesByContinent(continent);

  for (let objectValue of arrayofObjects) {
    listArray.push(objectValue.country);
  }
  return listArray;
}

export function listofAllCountries() {
  const listArray = [];
  const arrayOfObjects = getAllCountriesAsArray();

  for (let objectValue of arrayOfObjects) {
    listArray.push(objectValue.country);
  }
  return listArray;
}