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

  if (product.rightColumn === true) {
    console.log(product.name, "is in the right column");
    copy.querySelector(".singleProduct").style.marginTop = "10rem";
    copy.querySelector(".nameBottom").style.display = "none";
    copy.querySelector(".priceBottom").style.display = "none";
    copy.querySelector(".materialBottom").style.display = "none";
    copy.querySelector(".productArrowBottom").style.visibility = "hidden";
  } else {
    copy.querySelector(".nameRight").style.display = "none";
    copy.querySelector(".priceRight").style.display = "none";
    copy.querySelector(".materialTop").style.display = "none";
    copy.querySelector(".productArrowRight").style.visibility = "hidden";
  }

  //grab the parent
  const parent = document.querySelector("#productListGrid");
  //append
  parent.appendChild(copy);
}
