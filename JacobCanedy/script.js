const PageItems = document.querySelectorAll(".Latest")
const faders = document.querySelectorAll(".scrollin")
const appearOptions = {
  threshold: 0.7,
}
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("active")
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)
faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

PageItems.forEach((Item) => {
  Item.addEventListener("click", () => {
    ItemClassList = Item.classList
    if (ItemClassList.length < 4) {
      Item.classList.add("active")
    } else {
      Item.classList.remove("active")
    }
  })
})
