// gsap.to("#circular-icon", {
//   rotate: 360,
//   duration: 4,
//   toggleActions: "play none none reverse",
//   scrollTrigger: { trigger: "#circular-icon", start: "100px 200px", end: "200px", markers: true },
// });

console.log("heeeej");

gsap.set("#circular-icon", { xPercent: -50 });

var rotate = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#circular-icon",
      pin: true,
      scrub: 0.2,
      start: "bottom bottom",
      end: "+=10000",
      markers: true,
    },
  })
  .to("#circular-icon", {
    rotation: 360 * 5,
    duration: 1,
    ease: "none",
  });
