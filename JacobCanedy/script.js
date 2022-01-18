const PageItems = document.querySelectorAll(".Latest")
const title = document.querySelector(".title")
const faders = document.querySelectorAll(".scrollin")
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
