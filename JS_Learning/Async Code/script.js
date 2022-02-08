// Add event listener and set timeout are asynchronous.

// setTimeout(() => {
//   console.log("")
// }, 1000) // Other code continues to run until timeout is reached  Code that

// //Promises

// const promise = new Promise((resolve, reject) => {
//   const sum = 1 + 5
//   if (sum === 2) {
//     resolve(sum)
//   } else {
//     reject(sum)
//   }
// })

// promise
//   .then((message) => {
//     console.log(message)
//   })
//   .catch((message) => {
//     console.error(message)
//   })

//Asyc Code ---> Promises
// setTimeout(() => {
//     console.log("here")
// }, 500)

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve("Hello"), duration)
  })
}

setTimeoutPromise(500)
  .then(() => {
    console.log("here1")
    return setTimeoutPromise(1000)
  })
  .then(() => {
    console.log("here2")
    return setTimeoutPromise(1000)
  })
  .then(() => {
    console.log("here3")
    return setTimeoutPromise(1000)
  })

/*
//Create a promise version of addEventListener
const button = document.querySelector("button")
function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, (e) => {
      resolve(e)
    })
  })
}

addEventListenerPromise(button, "click").then((e) => {
  console.log("clicked")
  console.log("e")
})
*/

Promise.all([
  setTimeoutPromise(500),
  Promise.all([
    setTimeoutPromise(1000),
    Promise.resolve("2"),
    Promise.resolve("3"),
  ]),
  Promise.resolve("3"),
])
  .then((messages) => {
    console.log(messages)
  })
  .catch((error) => {
    console.error(error)
  })
