export function countdownTimer(startTime, interval) {
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

//Reserved for games.
export function startGameTriviaTimer(startTime = 5, interval = 1000) {
  countdownTimer(startTime, interval);
}

//Game mode timer
export function gameModeTimer(interval = 1000) {
  const timerID = setInterval(() => {
    const minuteCounter = Math.floor(currentTime / 60);
    const secondCounter = currentTime % 60;
    
    console.log(`${minuteCounter}:${secondCounter}`);

  }, interval);

  return timerID;
} 

export function stopgameModeTimer(timerID) {
  clearInterval(timerID);
}


//Used for stats

// Planned for future use
export function saveGameStats() {

}
export function resetGameStats() {
}

export function loadGameStats() {
  
};