
function countdownTimer(startTime, interval) {
  let currentTime = startTime;

  const intervalID = setInterval(() => {
    const minuteCounter = Math.floor(currentTime / 60);
    const secondCounter = currentTime % 60;

    console.log(`${minuteCounter}:${secondCounter}`);
    if (currentTime <= 0) {
      clearInterval(intervalID);
      return;
    }
    currentTime--; 
  }, interval);
  return intervalID;
}

function startGameTriviaTimer(startTime = 5, interval = 1000) {
  countdownTimer(startTime, interval);
}

function startGameModeCountry(arrayOfCountries) {
  const workingArray = arrayOfCountries;
  

}

function startGameModeCapitals(arrayOfObjects) {
  
}

function determineStatistics() {
  //Fired during the completion of a game or when a user terminates session before completion.
}