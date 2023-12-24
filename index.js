const fetchData = () => {
  fetch(
    `http://api.nbp.pl/api/exchangerates/rates/A/${selectElement.value}/today/`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data?.rates?.[0]?.mid;
      if (rate) {
        const sum = parseFloat(amount.value) * parseFloat(rate);
        finalAmount.innerHTML = `${sum.toFixed(2)} PLN`;
      } else {
        alert("something went wrong");
      }
    })
    .catch((error) => alert(error));
};

const amount = document.querySelector("#amount");
const form = document.querySelector("#form");
const selectElement = document.querySelector("#currencyCode");
const finalAmount = document.querySelector("#finalAmount");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (amount.value > 0) {
    fetchData();
  } else {
    alert("Please enter a valid amount!");
  }
});
