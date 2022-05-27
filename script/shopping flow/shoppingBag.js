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
      /*CART.contents = [
          {
            _id: "608187eb3e28515100031d8f",
            qty: 5,
            collection: "",
            colour: "Blue",
            description:
              "Ulrikke Woven Satin is a new shoulder bag with a shiny twist",
            dimensions: "Dimensions: 30 x 6 x 20 cm.",
            material: "Material: 100 % Polyester",
            name: "ULRIKKE WOVEN SATIN",
            newProducts: true,
            outOfStock: false,
            photo:
              "https://anasofich.github.io/SILFEN-website/photos/ulrike-woven-satin-blue.jpg",
            photoOne:
              "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-blue-top.jpg",
            photoThree: "",
            photoTwo:
              "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-statin-blue-side.jpg",
            price: 499,
            sale: false,
            salePrice: "",
            typeOfTheBag: "BumbagsandCrossbodybags",
          },
          {
            _id: "608188303e28515100031d9a",
            qty: 3,
            collection: "",
            colour: "Beige",
            description:
              "Ulrikke Woven Satin is a new crossbody bag with a shiny twist",
            dimensions: "Dimensions: 30 x 6 x 20 cm.",
            material: "Material: 100 % Polyester",
            name: "ULRIKKE WOVEN SATIN",
            newProducts: true,
            outOfStock: false,
            photo:
              "https://anasofich.github.io/SILFEN-website/photos/ulrike-woven-satin-beige.jpg",
            photoOne:
              "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-beige-side.jpg",
            photoThree:
              "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-model.jpg",
            photoTwo:
              "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-beige-top.jpg",
            price: 499,
            sale: false,
            salePrice: "",
            typeOfTheBag: "BumbagsandCrossbodybags",
          },
        ];*/
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
