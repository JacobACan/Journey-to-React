const PageItems = document.querySelectorAll(".Latest")
const title = document.querySelector(".title")
const faders = document.querySelectorAll(".scrollin")
let windowWidth = window.innerWidth

const appearOptions = {
  threshold: 0.9,
}

const disappearOnScroll = new IntersectionObserver(
  function (entries, disappearOnScroll) {
    entries.forEach((entry) => {
      entry.target.classList.toggle("slideAway", !entry.isIntersecting)
    })
  },
  { threshold: 0.3 }
)
disappearOnScroll.observe(title)

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      let windowWidth = window.innerWidth

      entry.target.classList.add(
        "active",
        windowWidth > 762 && entry.isIntersecting
      )

      entry.target.classList.add(
        "activePhone",
        windowWidth < 762 && entry.isIntersecting
      )
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
    let windowWidth = window.innerWidth
    Item.classList.toggle(
      "active",
      !Item.classList.contains("active") && windowWidth > 762
    )
    Item.classList.toggle(
      "activePhone",
      !Item.classList.contains("activePhone") && windowWidth < 762
    )
    // Item.classList.remove("active", Item.classList.contains("active"))
    // Item.classList.remove("activePhone", Item.classList.contains("activePhone"))
  })
})
