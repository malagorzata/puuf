gsap.set("#circular-icon", { xPercent: 0 });

function gsapAnimation(x) {
  if (x.matches) {
    const rotate = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#circular-icon",
          scrub: 0.2,
          start: 0,
          end: 1300,
          markers: true,
        },
      })
      .to("#circular-icon", {
        rotation: 360 * 1,
        duration: 1,
        ease: "none",
      });

    const imageAnim = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          scrub: 0,
          start: "top 70%",
          end: "bottom 80%",
          markers: false,
        },
      })

      .to(document.querySelector("#circle1"), {
        x: "-20vw",
        delay: 0,
        duration: 4000,
      });

    const imageAnim2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          scrub: 0,
          start: "top 70%",
          end: "bottom 80%",
          markers: true,
        },
      })

      .to(document.querySelector("#circle2"), {
        x: "20vw",
        duration: 4000,
      });

    const imageAnim3 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          scrub: 0.3,
          start: "top 70%",
          end: "bottom 80%",
          markers: false,
        },
      })

      .to(document.querySelector("#inside"), {
        duration: 4000,
        opacity: 1,
      });

    const textAni = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          scrub: 0.3,
          start: "top 70%",
          end: "bottom 80%",
          markers: false,
        },
      })
      .to(document.querySelector("#text-ani"), {
        duration: 4000,
        x: "7vw",
      });
  } else {
    console.log("ekran mniejszy niz 700px");
    const rotate = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#circular-icon",
          scrub: 1,
          start: 0,
          end: 1300,
          markers: true,
        },
      })
      .to("#circular-icon", {
        rotation: 360 * 1,
        duration: 1,
        ease: "none",
      });

    const imageAnim2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          scrub: 0,
          start: "top 20%",
          end: "bottom 80%",
          markers: true,
        },
      })

      .to(document.querySelector("#circle2"), {
        y: "65vw",
        duration: 4000,
      });

    const imageAnim3 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          scrub: 0.3,
          start: "top 20%",
          end: "bottom 80%",
          markers: false,
        },
      })

      .to(document.querySelector("#inside"), {
        duration: 4000,
        opacity: 1,
      });

    const textAni = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section6",
          scrub: 0.3,
          start: "top 20%",
          end: "bottom 80%",
          markers: false,
        },
      })
      .to(document.querySelector("#text-ani"), {
        duration: 4000,
        y: "22vw",
      });
  }
}

const x = window.matchMedia("(min-width:760px)");
gsapAnimation(x);
// x.addEventListener(gsapAnimation);

// const pin = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#circular-icon",
//     pin: true,
//     start: "bottom bottom",
//     markers: true,
//   },
// });

/// images - ease in
// const delSections = document.querySelectorAll(".delayed-section");

// delSections.forEach((section) => {
//   const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
//     y: "100vh",
//     ease: "none",
//   });

//   const imageAnim = gsap.to(section.querySelector("img"), {
//     y: "-100vh",
//     ease: "none",
//     paused: true,
//   });

//   const scrub = gsap.to(imageAnim, {
//     progress: 1,
//     paused: true,
//     ease: "power3",
//     duration: parseFloat(section.dataset.scrub) || 0.1,
//     overwrite: true,
//   });

//   ScrollTrigger.create({
//     animation: containerAnim,
//     scrub: true,
//     trigger: section,
//     start: "top bottom",
//     end: "bottom top",
//     onUpdate: (self) => {
//       scrub.vars.progress = self.progress;
//       scrub.invalidate().restart();
//     },
//   });
// });
