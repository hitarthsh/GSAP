var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDive = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    // ease: "expo.out",
  });
});

imageDive.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View more";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffff004f",
  });
});

imageDive.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
