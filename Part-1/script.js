gsap.to("#box", {
    borderRadius: "50%",
    x: 1200,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    scale: 1.38
})

gsap.to("#box2", {
    x: 1200,
    duration: 2,
    delay: 1,
})

gsap.from("h1", {
    color: "red",
    duration: 2,
})
