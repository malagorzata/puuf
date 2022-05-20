let url = "https://kea2021-907c.restdb.io/rest/puuf";

/*API key*/
const options = {
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
};

function getData() {
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })

    .then((data) => {
      // console.log(data);
      handleData(data);
    })
    .catch((e) => {
      console.error("an error occured:", e.message);
    });
}

export { getData };
