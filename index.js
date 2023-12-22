const fetchData = (currencyCode) => {
  fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}/today/`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[0].mid;
      const sum = parseFloat(amount.value) * parseFloat(rate);
      finalAmount.innerHTML = `${sum.toFixed(2)} PLN`;
      amount.value = "";
    });
};

const amount = document.querySelector("#amount");
const btn = document.querySelector("#btn");
const selectElement = document.querySelector("#currencyCode");
const finalAmount = document.querySelector("#finalAmount");

btn.addEventListener("click", () => {
  if (amount.value > 0) {
    fetchData(selectElement.value);
  } else {
    alert("Please enter a valid amount!");
  }
});
