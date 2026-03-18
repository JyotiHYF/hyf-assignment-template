//Log text after 2.5 seconds
setTimeout(function () {
  console.log("Called after 2.5 seconds");
}, 2500);

//Function with delay and string
function logAfterDelay(delay, stringToLog) {
  setTimeout(function () {
    console.log(stringToLog);
  }, delay * 1000);
}

// Calling the functiona
logAfterDelay(2, "Hello after 2 seconds");
logAfterDelay(4, "Hello after 4 seconds");

// Adding event listener to the button

document.getElementById("delayBtn").addEventListener("click", function () {
  logAfterDelay(5, "Called after 5 seconds");
});

// Function that logs Earth and Saturn
const logEarth = function () {
  console.log("Earth");
};

const logSaturn = function () {
  console.log("Saturn");
};

function logPlanet(planetLogFunction) {
  planetLogFunction();
}

// Call the function
logPlanet(logEarth);
logPlanet(logSaturn);

// Geolocation

document.getElementById("locationBtn").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  });
});
