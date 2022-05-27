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

// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },

//   pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed",
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();
// class Page {
//   constructor() {
//     this.elements = {
//       scrollHolder: document.querySelector(".tt-scroll"),
//       scrollTitle: document.querySelector(".tt-scroll__title"),
//     };
//     this.titleWidth = document.querySelector(".tt-scroll__title").offsetWidth;
//     this.addEventListeners();
//     this.create();
//   }
//   create() {
//     gsap.to(this.elements.scrollTitle, {
//       scrollTrigger: {
//         trigger: this.elements.trigger,
//         scrub: 1,
//         scroller: ".smooth-scroll",
//         start: "center center",
//         markers: false,
//         invalidateOnRefresh: true,
//         //pin: true,
//         end: () => this.titleWidth + window.innerWidth,
//       },
//       //alpha:0,
//       x: 200,
//       opacity: 100,
//       ease: "none",
//     });
//     gsap.to(this.elements.scrollTitle, {
//       scrollTrigger: {
//         trigger: this.elements.scrollHolder,
//         scrub: 1,
//         scroller: ".smooth-scroll",
//         start: "top top",
//         markers: false,
//         invalidateOnRefresh: true,
//         pin: true,
//         end: () => this.titleWidth + window.innerWidth,
//         // end: "bottom center",
//       },
//       //alpha:0,
//       //x: -this.titleWidth,
//       ease: "none",
//     });
//   }
//   onResize() {
//     this.titleWidth = this.elements.scrollTitle.offsetWidth;
//     console.log(this.titleWidth);
//   }
//   addEventListeners() {
//     window.addEventListener("resize", this.onResize.bind(this));
//   }
// }
// new Page();
