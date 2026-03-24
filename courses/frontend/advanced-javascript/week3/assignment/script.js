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
