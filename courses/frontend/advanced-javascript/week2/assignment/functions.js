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

// Calling the function
logAfterDelay(2, "Hello after 2 seconds");
logAfterDelay(4, "Hello after 4 seconds");
