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
// Open Google Maps with the current location
document.getElementById("locationBtn").onclick = function () {
  navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    window.open(`https://www.google.com/maps?q=${lat},${lng}`);
  });
};
// Function to run a callback after a delay
const runAfterDelay = (delay, callback) => setTimeout(callback, delay * 1000);

document.getElementById("btn").onclick = () => {
  const delay = document.getElementById("delayInput").value;

  runAfterDelay(delay, () => {
    document.getElementById("output").textContent = "Done!";
  });
};
// Double click event listener
let lastClick = 0;
document.addEventListener("click", () => {
  if (Date.now() - lastClick < 500) {
    document.getElementById("msg").textContent = "double click!";
  }
  lastClick = Date.now();
});
// Joke creator function
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) =>
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();

const logFunnyJoke = () => {
  document.getElementById("joke").textContent =
    "Why don’t programmers like nature? Too many bugs 😂";
};

const logBadJoke = () => {
  document.getElementById("joke").textContent =
    "I told my computer a joke… it didn’t laugh 😐";
};

// Example calls
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
