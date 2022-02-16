// FETCH (Recieve Data)
// query info on the web through an API returns data that you can use in js code
// jsonplaceholder.typicode.com
const Boxes = document.querySelector(".Boxes")

function createTimerPromise(i, maxIterations, maxWaitTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const box = document.createElement("div")
      box.classList = "Box"
      resolve(box)
    }, Math.sin((i * Math.PI) / maxIterations) * maxWaitTime)
  })
}

async function async_time_fetch(maxIterations, maxWaitTime) {
  for (let i = 0; i < maxIterations; i++) {
    box = await createTimerPromise(i, maxIterations, maxWaitTime)
    Boxes.appendChild(box)
  }
}
function time_fetch() {
  for (let i = 0; i < 10; i++) {
    createTimerPromise(i).then((reslove) => {
      console.log(`Time ${reslove}`)
    })
  }
}

// time_fetch()
// async_time_fetch()
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     dataNames = data.map((person) => {
//       return person.name
//     })
//     console.log(dataNames)
//   })

async function showDataNames() {
  // Fetch (Send data)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
    }),
  })
  try {
    if (response.ok) {
      const post = await response.json()

      console.log(post)
    } else {
      console.log("There is a problem")
    }
  } catch (error) {
    console.log(error)
  }
}
// showDataNames()

// async_time_fetch(100, 1000)

// Fetching
const URL = "https://jsonplaceholder.typicode.com/comments?postId=1"

async function getPostId1() {
  const response = await fetch(URL)
  const dataList = await response.json()
  console.log(dataList)
}

// getPostId1()

//Event Loop
// function test() {
//   console.log("1")
//   console.log("2")
//   setTimeout(() => console.log("3"), 10)
//   setTimeout(() => console.log("4"), 0)
//   console.log("5")
// }

// test()

//EVENT DELEGATION
/*
bubbles select down then runs out
*/

const BUTTONS = document.querySelectorAll("button")

// document.addEventListener("click", (e) => console.log("clicked document"))
// document.body.addEventListener("click", (e) => console.log("clicked body"))

// BUTTONS.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("clicked")
//   })
// })

document.addEventListener("click", (e) => {
  // Usual way to addEvent listener to elements that are dynamically added to page
  if (e.target.matches("button")) {
    // .matches is like a query selector
    console.log("Clicked Button")
  }
})

//Browser Storage
// Local Storage  | Cookier             | Session Storage
// 10MB           | 4KB                 | 5MB
// Never Expires  | Manual Expiration   | Expire on tab close
// Client         | Client/Server       | Client
//  Easy          | Unwieldly           | Easy

//LOCAL STORAGE (use most of the time...)
//SESSION STORAGE (use when you want to delete info after session)
localStorage.setItem("Name", "Jacob")
sessionStorage.setItem("Name2", "Bob")
// remove key value by simply passing key
console.log(localStorage.getItem("Name"))

//COOKIES  (usually use when sending info to storage)
//Cookies are on the document
const futureDate = new Date(9999, 0, 1).toUTCString() // Never Expire
const pastDate = new Date(1999, 0, 1).toUTCString() // Never Expire
document.cookie = `name=Kyle; expires = ${futureDate}`
document.cookie = `age = 25; expires =${futureDate}` // adds instead of replaces
document.cookie = `age = ; expres = ${pastDate}` //Delete Cookie

// console.log(document.cookie)
//
// key-Value
