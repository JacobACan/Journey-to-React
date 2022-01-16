// Window
// console.log(window)
//Document
// console.log(document)
// /*Create Element  */
// const newElement = document.createElement("div")
// newElement.innerHTML = "Sup People"
// console.log(newElement)
// document.body.appendChild(newElement)

// GetElementsbyClassName
// const divsWithClass = document.getElementsByClassName("div-class")
// console.log(divsWithClass)

// divsWithClassArray = Array.from(divsWithClass)

// // divsWithClassArray.forEach((div) => {
//   div.style.color = "orange"
// })
//Query Selectors
/* Query selector returns one element whereas Query selector all returns an array of all elements that meet specified criteria*/
// const dataAtrributeElement = document.querySelector("[data-test]") // [] is data element
// const classElement = document.querySelector(".div-class") // . is class element
// /* Allows you to pass in CSS selectors */
// // .class
// // #id
// // [data]
// console.log(dataAtrributeElement)
// console.log(classElement)

// // Event Listeners
// const input = document.querySelector("[data-input-text]")
// const btn = document.querySelector("[data-btn]")
// btn.addEventListener("click", (e) => {
//   console.log(e)
// })
// input.addEventListener("input", (e) => {
//   let data = e.data
//   if (data == null) {
//     document.body.removeChild("div")
//   } else {
//     const inputElement = document.createElement("div")
//     inputElement.innerHTML = data
//     document.body.appendChild(inputElement)
//   }

//   // console.log(e)
// })
//preventDefault()
// const googleLink = document.body.querySelector("a")
// console.log(googleLink)
// googleLink.addEventListener("click", (e) => {
//   e.preventDefault()
//   console.log("Link Clicked")
// })
//Mouseenter
//mouseleave
//mouseover
//focus
//blur (opposite of focus)
//resize

// Scoping between normal and arrow functions.
const btn = document.querySelector("[data-btn]")
btn.addEventListener("click", (e) => {
  console.log(`This in arrow:`)
  console.log(this)
})
btn.addEventListener("click", function (e) {
  console.log(`This in normal:`)
  console.log(this)
})
