document.addEventListener("click", (e) => {
  if (e.target.classList != "expand-button") return
  toggleExpand(e.target)
})

function toggleExpand(target) {
  Card = target.closest(".card")
  cardBody = Card.querySelector(".card-body")
  cardBody.classList.toggle("show")

  if (target.innerText == "Expand") {
    target.innerText = "Collapse"
  } else if (target.innerText == "Collapse") {
    target.innerText = "Expand"
  }
}
