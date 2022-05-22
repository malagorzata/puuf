let url = "https://kea2021-907c.restdb.io/rest/puuf";
const options = {
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
};

async function get_products() {
  const response = await fetch(url, options);
  const jsonData = await response.json();
  return jsonData;
}

export { get_products };
