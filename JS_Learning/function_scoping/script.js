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

// Hoisting
/* Takes all functions in a .js file and moves them as 
if they were at the top of the file */
/* Does not work with arrow functions because they are assigned as a variable*/

// Scoping
// Closures
/* functions within other functions */
/* js has access to variables outside of its scope but not within*/
function print(x) {
  return function func(x2) {
    console.log(x)
    console.log(x2)
  }
}

let a = print(1)
a(2)
