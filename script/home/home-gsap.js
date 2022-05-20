gsap.set("#circular-icon", { xPercent: 0 });

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
      start: "top",
      markers: true,
    },
  })

  .to(document.querySelector("#circle1"), {
    x: "-10vw",
    delay: 0,
    duration: 5000,
  });

const imageAnim2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section6",
      scrub: 0,
      start: "top",
      markers: true,
    },
  })

  .to(document.querySelector("#circle2"), {
    x: "10vw",
    duration: 5000,
  });

const imageAnim3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section6",
      scrub: 0.3,
      start: "top",
      markers: true,
    },
  })

  .to(document.querySelector("#inside"), {
    duration: 5000,
    opacity: 1,
  });

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
