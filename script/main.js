/*MENU*/
function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");
  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}

const text = document.querySelector(".title");
const fullText = text.textContent;
const splitText = fullText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];

  span.classList.add("fade");
  char++;

  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
