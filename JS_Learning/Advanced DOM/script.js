// FETCH (Recieve Data)
// query info on the web through an API returns data that you can use in js code
// jsonplaceholder.typicode.com

function createTimerPromise(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i + 1)
    }, 100)
  })
}

async function async_time_fetch() {
  for (let i = 0; i < 10; i++) {
    time = await createTimerPromise(i)
    console.log(`Time: ${time}`)
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
showDataNames()

console.log("Here")
