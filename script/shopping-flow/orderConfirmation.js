/* const form = document.querySelector(".paymentForm");
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get("article"); */

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
    const cartcontentEl = document.querySelector(".cartContentConf");
    cartcontentEl.innerHTML = "";

    if (CART.contents.length === 0) {
      cartcontentEl.innerHTML = "<h2>The cart is empty</h2>";
      document.querySelector(".lineL").classList.add("hidden");
      document.querySelector(".orderPrice").classList.add("hidden");
      document.querySelector(".itemsTwo").classList.add("hidden");
    } else {
      CART.contents.forEach((element) => {
        const tempItem = document.querySelector("#cartTemplateConf").content;
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
        itemCopy.querySelector(".bagproductPrice").textContent = element.price * element.qty + "dkk";

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
    /*const inputEl = document.querySelector("#fid-" + obj._id);
      CART.contents[index].qty = inputEl.valueAsNumber;*/

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

/* form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.elements.firstName.value);
  console.log(form.elements.lastName.value);
  console.log(form.elements.address.value);
  console.log(form.elements.city.value);
  console.log(form.elements.country.value);
  console.log(form.elements.postCode.value);
  console.log(form.elements.phoneNumber.value);
  console.log(form.elements.email.value);

  const payload = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    address: form.elements.address.value,
    city: form.elements.city.value,
    country: form.elements.country.value,
    postCode: form.elements.postCode.value,
    phoneNumber: form.elements.phoneNumber.value,
    email: form.elements.email.value,
  };

  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea2021-907c.restdb.io/rest/orderdetails", {
    method: "POST",
    headers: {
      "x-apikey": "602e264f5ad3610fb5bb6267",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.firstName.value = "";
      form.elements.lastName.value = "";
      form.elements.address.value = "";
      form.elements.city.value = "";
      form.elements.country.value = "";
      form.elements.postCode.value = "";
      form.elements.phoneNumber.value = "";
      form.elements.email.value = "";
      document.querySelector("#orderDetails").classList.add("hidden");
      document.querySelector("#orderConfirmation").classList.remove("hidden");
    })
    .catch((err) => {
      console.error(err);
    });
});
 */
