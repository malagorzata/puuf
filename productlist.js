let url = "https://kea2021-907c.restdb.io/rest/puuf";

/*API key*/
const options = {
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
};

getData();

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

function handleData(data) {
  console.log(data);
  document.querySelector("#productListGrid").innerHTML = "";
  data.forEach(showProduct);
}

function showProduct(product) {
  //grab the template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".nameRight").textContent = product.name;
  copy.querySelector(".priceRight").textContent = product.price;

  //grab the parent
  const parent = document.querySelector("#productListGrid");
  //append
  parent.appendChild(copy);
}
