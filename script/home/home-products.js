import { get_products } from "../modules/api.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const data = await get_products();
  handleData(data);
}

function handleData(product) {
  console.log(product);
  document.querySelector("#products").innerHTML = "";
  product.forEach(showProduct);
}

function showProduct(product) {
  //grab the template
  const template = document.querySelector("#product-template").content;
  //clone it
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".name").textContent = product.name;
  copy.querySelector(".image").src = product.photoOne;
  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector("a.productLink").href = `productview.html?_id=${product._id}`;

  //grab the parent
  const parent = document.querySelector("#products");
  //append
  parent.appendChild(copy);
}
