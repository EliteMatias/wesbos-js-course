const endpoint = "https://api.apilayer.com/exchangerates_data/latest";
const ratesByBase = {};

const myHeaders = new Headers();
const apikey = "DBspOWqkznCJPChTD7MI436WPMFURXJw";

myHeaders.append("apikey", apikey);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export async function fetchRates(base = "USD") {
  const res = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(`Oh no, we don't have ${from} to convert to ${to}`);

    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
  }

  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
