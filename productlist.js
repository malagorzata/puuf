const urlParams = new URLSearchParams(window.location.search); /* 
const category = urlParams.get("category");
console.log(category);
document.querySelector("h1").textContent = category;
document.querySelector(".breadcrumbs .category").textContent = category; */

const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  // console.log(product);
  //grab the template
  const template = document.querySelector("#productTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector(".nameRight").textContent = product.productdisplayname;

  copy.querySelector(".priceRight").textContent = product.price + " DKK";

  //grab parent
  const parent = document.querySelector("#productListGrid");

  //append
  parent.appendChild(copy);
}
