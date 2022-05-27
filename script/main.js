/*MENU*/

const menu = document.querySelector("#menuSec nav");

document.querySelector("#menuSec .closeMenu").addEventListener("click", closeMenu);
document.querySelector("#menuSec .openMenu").addEventListener("click", openMenu);

function closeMenu() {
  menu.style.top = "-100vh";
}

function openMenu() {
  menu.style.top = "0";
}

// const text = document.querySelector(".title");
// const fullText = text.textContent;
// const splitText = fullText.split("");
// text.textContent = "";

// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//   const span = text.querySelectorAll("span")[char];

//   span.classList.add("fade");
//   char++;

//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// }

// function complete() {
//   clearInterval(timer);
//   timer = null;
// }
