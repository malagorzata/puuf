const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = "https://kea2021-907c.restdb.io/rest/puuf/" + id;

const options = {
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleProducts(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleProducts(products) {
  console.log(products);
  document.querySelector(".product-tile h2").textContent = products.name;
  document.querySelector(".product-description-all h2").textContent = products.name;
  document.querySelector(".price span").textContent = products.price;
  document.querySelector(".product-description").textContent = products.description;
  document.querySelector(".list li").textContent = products.material;
  document.querySelector(".list2 li").textContent = products.measurements;
  document.querySelector(".use span").textContent = products.useproposal;
  document.querySelector(".designer span").textContent = products.designer;
  document.querySelector(".production span").textContent = products.production;
  document.querySelector(".first").src = products.photoOne;
  document.querySelector(".second").src = products.photoTwo;
  document.querySelector(".third").src = products.photoThree;
  document.querySelector(".first alt").textContent = products.name;
  document.querySelector(".second alt").textContent = products.name;
  document.querySelector(".third alt").textContent = products.name;
}

const form = document.querySelector("form");
