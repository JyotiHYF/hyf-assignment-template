const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");
const lastUpdated = document.getElementById("lastUpdated");

let rates = {};
async function fetchRates() {
  const response = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await response.json();

  rates = data.rates;

  lastUpdated.textContent = "Last updated: " + data.time_last_update_utc;

  populateDropdowns();
  calculate();
}
function populateDropdowns() {
  const currencies = Object.keys(rates);

  currencies.forEach(function (currency) {
    fromCurrency.add(new Option(currency, currency));
    toCurrency.add(new Option(currency, currency));
  });

  fromCurrency.value = "EUR";
  toCurrency.value = "DKK";
}
function calculate() {
  const value = amountInput.value;
  const amount = parseFloat(value);

  if (value === "") {
    result.textContent = "";
    return;
  }
  if (isNaN(amount) || amount < 0) {
    result.textContent = "Please enter a valid positive number.";
    return;
  }

  const fromRate = rates[fromCurrency.value];
  const toRate = rates[toCurrency.value];

  const convertedAmount = (amount / fromRate) * toRate;

  result.textContent =
    amount.toFixed(2) +
    " " +
    fromCurrency.value +
    " = " +
    convertedAmount.toFixed(2) +
    " " +
    toCurrency.value;
}
