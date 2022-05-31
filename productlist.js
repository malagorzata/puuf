import { get_products } from "./script/modules/api.js";

window.addEventListener("DOMContentLoaded", init);

// window.addEventListener("DOMContentLoaded", start);

const allProducts = [];

let mediaQuery = "desktop";

async function init() {
  registerFilterOptions();
  const data = await get_products();
  prepareData(data);
}

function registerFilterOptions() {
  document.querySelectorAll(".filters li[data-action='filter']").forEach((option) => option.addEventListener("click", selectFilter));
}

// //fetching database

// let url = "https://kea2021-907c.restdb.io/rest/puuf";

// /*API key*/
// const options = {
//   headers: {
//     "x-apikey": "602e264f5ad3610fb5bb6267",
//   },
// };

// function getData() {
//   fetch(url, options)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     })

//     .then((data) => {
//       // console.log(data);
//       prepareData(data);
//     })
//     .catch((e) => {
//       console.error("an error occured:", e.message);
//     });
// }

document.querySelector(".preloader").classList.remove("none");

function prepareData(data) {
  data.forEach((jsonObject) => {
    //adding prducts to global array to use for filtering
    allProducts.push(jsonObject);
    handleProductList(allProducts);
    document.querySelector(".preloader").classList.add("none");
  });
}

//FILTERING

//desktop view filters
function selectFilter(e) {
  const filter = e.target.dataset.filter;

  //find previously selected, and remove .selected
  const previouslySelected = document.querySelector(".filters ul li.selected");
  previouslySelected.classList.remove("selected");

  //indicate active filter
  e.target.classList.add("selected");

  filterList(filter);
}

function filterList(filter) {
  let filteredList = allProducts;
  if (filter === "seats") {
    filteredList = allProducts.filter(showSeats);
  } else if (filter === "vases") {
    filteredList = allProducts.filter(showVases);
  } else if (filter === "accessories") {
    filteredList = allProducts.filter(showAccessories);
  } else if (filter === "recycled_plastic") {
    filteredList = allProducts.filter(showRecycledPlastic);
  } else if (filter === "wood") {
    filteredList = allProducts.filter(showWood);
  }

  handleProductList(filteredList);
}

function showSeats(product) {
  return product.filter1 === "seats" || product.filter2 === "seats";
}

function showVases(product) {
  return product.filter1 === "vases" || product.filter2 === "vases";
}
function showAccessories(product) {
  return product.filter1 === "accessories" || product.filter2 === "accessories";
}
function showRecycledPlastic(product) {
  return product.filter1 === "recycled_plastic" || product.filter2 === "recycled_plastic";
}
function showWood(product) {
  return product.filter1 === "wood" || product.filter2 === "wood";
}

/* MEDIA QUERIES */

//mobile

var x = window.matchMedia("(max-width: 500px)");
readMediaQueries(x); // Call listener function at run time
x.addListener(readMediaQueries); // Attach listener function on state changes

function readMediaQueries(x) {
  if (x.matches) {
    // If media query matches
    mediaQuery = "mobile";
    console.log(mediaQuery);
    handleProductList(allProducts);
  } else {
    mediaQuery = "tablet";
    console.log(mediaQuery);
    handleProductList(allProducts);
  }
}

//tablet

var y = window.matchMedia("(max-width: 770px)");
readMediaQueriesB(y); // Call listener function at run time
y.addListener(readMediaQueriesB); // Attach listener function on state changes

function readMediaQueriesB(y) {
  if (y.matches) {
    // If media query matches
    mediaQuery = "tablet";
    console.log(mediaQuery);
    handleProductList(allProducts);
  } else {
    mediaQuery = "desktop";
    console.log(mediaQuery);
    handleProductList(allProducts);
  }
}

/* handling current data */

function handleProductList(data) {
  //console.log(data);
  document.querySelector("#productListGrid").innerHTML = "";
  data.forEach(showProduct);
}

//displaying the client list
function showProduct(product) {
  //console.log(product);
  //grab the template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".productImg").style.background = `url(${product.photoOne})`;
  copy.querySelector(".productImg").style.backgroundSize = `cover`;
  copy.querySelector(".nameRight").textContent = product.name;
  copy.querySelector(".priceRight").textContent = `${product.price}kr`;
  copy.querySelector(".productImg").style.backgroundSize = `cover`;
  copy.querySelector(".nameBottom").textContent = product.name;
  copy.querySelector(".priceBottom").textContent = `${product.price}kr`;
  copy.querySelector("a.singleProduct").href = `productview.html?_id=${product._id}`;
  copy.querySelector(".materialBottom .circle").style.background = `url(${product.materialPhoto})`;
  copy.querySelector(".materialTop .circle").style.background = `url(${product.materialPhoto})`;
  copy.querySelector(".hoverVideo").src = `../videos/${product.hoverVideo}`;

  if (mediaQuery === "desktop") {
    if (product.rightColumn === true) {
      copy.querySelector(".singleProduct").style.marginTop = "8rem";
      copy.querySelector(".nameBottom").style.display = "none";
      copy.querySelector(".priceBottom").style.display = "none";
      copy.querySelector(".materialBottom").style.display = "none";
      copy.querySelector(".productArrowBottom").style.visibility = "hidden";
    } else {
      copy.querySelector(".singleProduct").style.marginLeft = "6rem";
      copy.querySelector(".nameRight").style.display = "none";
      copy.querySelector(".priceRight").style.display = "none";
      copy.querySelector(".materialTop").style.display = "none";
      copy.querySelector(".infoRight").style.display = "none";
      copy.querySelector(".productArrowRight").style.visibility = "hidden";
    }
  } else if (mediaQuery === "tablet") {
    if (product.rightColumn === true) {
      copy.querySelector(".singleProduct").style.marginTop = "8rem";
      copy.querySelector(".singleProduct").style.marginLeft = "4rem";
      copy.querySelector(".materialBottom").style.display = "none";
    } else {
      copy.querySelector(".singleProduct").style.marginLeft = "6rem";
      copy.querySelector(".materialTop").style.display = "none";
    }
    copy.querySelector(".nameBottom").style.display = "initial";
    copy.querySelector(".priceBottom").style.display = "initial";
    copy.querySelector(".productArrowBottom").style.visibility = "visible";
    copy.querySelector(".infoRight").style.display = "none";
  } else {
    copy.querySelector(".infoRight").style.display = "none";
    copy.querySelector(".materialTop").style.display = "none";
    copy.querySelector(".singleProduct").style.marginLeft = "-3rem";
  }

  //grab the parent
  const parent = document.querySelector("#productListGrid");
  //append
  parent.appendChild(copy);
}
