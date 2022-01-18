function createItem(innerHtml, color = "red") {
  const newItem = document.createElement("button")
  newItem.className = `Item`
  newItem.className += ` ${color}`
  newItem.innerHTML = innerHtml
  return newItem
}
function createTimeElement(innerHtml) {
  const newTimeElement = document.createElement("section")
  newTimeElement.className = "Overview"
  newTimeElement.id = "column"
  newTimeElement.innerHTML = `
  <h3>${innerHtml}</h3>
  <label class="custom-field">
    <input class="Input" id="input" />
    <span class="placeholder"> New Item </span>
    <div id="dropdownmenu" class="dropdownmenu">
      <ul>
        <li>Color</li>
      </ul>
    </div>
  </label>
  <br />
  `
  return newTimeElement
}
function addInputEventListeners() {
  let overview = document.querySelector(".Overview")
  let timeIntervalInputs = overview.querySelectorAll("#input")
  timeIntervalInputs.forEach((input) => {
    input.addEventListener("focus", function addElement(e) {
      this.addEventListener("keydown", function keyPress(e) {
        if (this.value != "" && e.key == "Enter") {
          let innerHTML = this.value
          const newItem = createItem(innerHTML)
          this.closest("#column").appendChild(newItem)
          this.value = ""
        }
      })
      this.addEventListener("blur", function clickOffInput(e) {
        console.log("Clicked Off")
        this.value = ""
      })
    })
  })
}

function addClickOverviewEventListeners() {
  let overview = document.querySelector(".Overview")
  let timeIntervalInputs = overview.querySelectorAll("#input")
  overview.addEventListener("click", (e) => {
    if (e.ctrlKey) {
      if (e.target.classList[0] == "Item") {
        console.log("Selected")
        e.target.parentNode.removeChild(e.target)
      }
      if (e.target.id == "column") {
        e.target.parentNode.removeChild(e.target)
      }
    }
    if (e.target.className == "addcustomtime") {
      const newTimeElement = createTimeElement("New Time")
      e.target.closest(".Overview.Container").appendChild(newTimeElement)
      addInputEventListeners()
    }
  })
}

function main() {
  addInputEventListeners()
  addClickOverviewEventListeners()
}

main()
