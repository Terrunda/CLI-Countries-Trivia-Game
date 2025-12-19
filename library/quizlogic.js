
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

