// Passing functions in as variables with callbacks.
/* function printName(name, callback) {
  callback("Hello " + name)
}

printName("Jacob", function (variable) {
  console.log(variable)
})*/

// Arrow Functions
function sum(a, b) {
  return a + b
}

let sumArrow = (a, b) => a + b

let printNameArrow = (name) => {
  console.log(name)
}
let printHi = (name) => "Hi " + name

printNameArrow("Jacob")
console.log(sumArrow(3, 4))
console.log(printHi("Jacob"))

// Arrow functions passing functions into functions
function func(x, func) {
  func(x)
}

func(10, (x) => {
  console.log(x)
})
