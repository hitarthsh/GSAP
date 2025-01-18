function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")

    var clutter = ""

    // splittedText.forEach(function (elem) {
    //     clutter += `<span>${elem}</span>` // name = name + name
    // })

    var splittedText = h1Text.split("")

    var halfValue = splittedText.length / 2

    splittedText.forEach(function (elem, idx) {
        if (idx < halfValue) {
            clutter += `<span class="a">${elem}</span>`
        } else {
            clutter += `<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = clutter
}

breakTheText()

// gsap.from("h1 span", {
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.2,
//     stagger: -0.15,
// })

gsap.from("h1 .a", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})

gsap.from("h1 .b", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})