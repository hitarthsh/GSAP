gsap.to("#box", {
  borderRadius: "50%",
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "yellow",
  scale: 1.38,
  repeat: -1,
  yoyo: true,
});

gsap.to("#box2", {
  x: 1200,
  duration: 2,
  delay: 1,
  yoyo: true,
  repeat: -1,
});

// gsap.from("h1", {
//   color: "red",
//   opacity: 0,
//   duration: 2,
//   y: 40,
//   delay: 1,
//   stagger: 0.3,
//   yoyo: true,
//   repeat: -1,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

tl.from("#text", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
