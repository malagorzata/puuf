const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = "https://kea2021-907c.restdb.io/rest/puuf/" + id;

const options = {
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
};

document.querySelector(".preloader").classList.remove("none");

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleProducts(data);
    document.querySelector(".preloader").classList.add("none");
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
  document.querySelector(".first").alt = products.name;
  document.querySelector(".second").alt = products.name;
  document.querySelector(".third").alt = products.name;
  document.querySelector(".breadcrumbs .name").textContent = products.name;

  document.querySelector(".addCart").addEventListener("click", () => {
    CART.add(products);
  });

  /* ADD TO CART BUTTON */
  const cartButton = document.querySelector(".cart-button");

  cartButton.addEventListener("click", cartClick);

  function cartClick() {
    cartButton.classList.add("clicked");
  }

  document.querySelector(".cart-button span.added").addEventListener("animationend", restartButton);

  function restartButton() {
    cartButton.classList.remove("clicked");
  }
}

const form = document.querySelector("form");

//CART
const CART = {
  KEY: "basket",
  contents: [],
  init() {
    //contents is a temporary string

    let _contents = localStorage.getItem(CART.KEY);
    if (_contents) {
      // if there's anything there, turn it into 20 objects that we can access with the dot . notation
      CART.contents = JSON.parse(_contents);
    } else {
    }
    // I want to update the
    //this.updateDOM(); use this when we're not hardcoding the contents, and the content is read from localStorage
    CART.sync();
  },
  sync() {
    //turn CART contents array of objects into a string that we can write in localStorage
    let _cart = JSON.stringify(CART.contents);
    localStorage.setItem(CART.KEY, _cart);
    CART.updateDOM();
  },
  updateDOM() {
    const cartcontentEl = document.querySelector(".cartContent");
    cartcontentEl.innerHTML = "";

    if (CART.contents.length === 0) {
      cartcontentEl.innerHTML = "<h2>The cart is empty</h2>";
      document.querySelector(".lineL").classList.add("hidden");
      document.querySelector(".orderPrice").classList.add("hidden");
      document.querySelector(".itemsTwo").classList.add("hidden");
    } else {
      CART.contents.forEach((element) => {
        const tempItem = document.querySelector("#cartTemplate").content;
        //console.log(element);
        const itemCopy = tempItem.cloneNode(true);

        const bagID = element._id;
        itemCopy.querySelector(".bagName").textContent = element.name;
        itemCopy.querySelector("label").setAttribute("for", "fid-" + bagID);

        const minusBtn = itemCopy.querySelector(".minus");
        minusBtn.addEventListener("click", () => {
          CART.minusOne(bagID);
        });

        itemCopy.querySelector("input").id += bagID;
        itemCopy.querySelector("input").name += bagID;
        itemCopy.querySelector("input").value = element.qty;

        itemCopy.querySelector("input").addEventListener("blur", () => {
          const itemQty = itemCopy.querySelector("input").valueAsNumber;
          element.qty = itemQty;
          console.log("element");
          console.log(element);
          CART.update(element);
        });

        itemCopy.querySelector("input").addEventListener("focus", (e) => {
          e.target.select();
        });

        const plusBtn = itemCopy.querySelector(".plus");
        plusBtn.addEventListener("click", () => {
          CART.plusOne(bagID);
        });

        itemCopy.querySelector("img").src = element.photoOne;
        itemCopy.querySelector(".bagColor").textContent = element.material;
        itemCopy.querySelector(".bagproductPrice").textContent = element.price;

        cartcontentEl.appendChild(itemCopy);
      });
    }
  },
  add(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (index == -1) {
      console.log(obj);
      obj.qty = 1;
      console.log(CART.contents);
      CART.contents.push(obj);
    } else {
      CART.contents[index].qty += 1;
    }

    console.log(CART.contents);
    this.sync();
  },
  update(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    //const inputEl = document.querySelector("#fid-" + obj._id);
    //CART.contents[index].qty = inputEl.valueAsNumber;

    if (obj.qty === 0) {
      CART.contents.splice(index, 1);
    } else {
      CART.contents[index].qty = obj.qty;
    }

    CART.sync();
  },
  minusOne(bagID) {
    const indexObj = CART.contents.find((element) => element._id == bagID);
    indexObj.qty--;
    console.log(indexObj);
    CART.update(indexObj);
  },
  plusOne(bagID) {
    const indexObj = CART.contents.find((element) => element._id == bagID);
    indexObj.qty++;
    console.log(indexObj);
    CART.update(indexObj);
  },
};

CART.init();
