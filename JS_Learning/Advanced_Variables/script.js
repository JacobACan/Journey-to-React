// Advanced Variables
a = "1"
const b = "3.2"
// cannot redefine
/* b cant = 3 */
console.log(a)
console.log(b)

// !! shouldn't us var!!
// available outside of it's scope
{
  var c = 3
}
console.log(c)
// var are hoisted without assigning it to a value
/* var c = undefined before reassigned to 3*/

// Type Coercion
/* Coverting from one type to another */
let d = 3

console.log(parseInt(a)) // Explicit Type Coercion String => Int
console.log(parseFloat(b)) // String => float
console.log(c.toString()) // Number => String

// Implicit Type Coersion
a = 1
d = "Hello"
implicitTypeCoercion = a + d
console.log(implicitTypeCoercion)

// NaN
/* Side effect of type coercion*/
const NAN = parseInt("afafafaf")
console.log(NAN)
console.log(isNaN(NAN))

//Arrays
const array = [1, 2, 3, 4]
array.push(11)
console.log(array.length)

//Objects
let name1 = "Jacob"
let age = 18
let favoriteNumber = 3

let person = {
  name1: "Jacob",
  age: 18,
  favoriteNumber: 3,
}
let car = {
  make: "Honda",
  model: "207",
  isUsed: true,
  drive(k) {
    console.log("car is being driven")
  },
}
console.log(person)

const book = {
  title: "Beauty and the Beast",
  Author: {
    name: "Jacob",
    age: "18",
  },
}
console.log(JSON.stringify(book))

//Array methods (Actually a list LOL)
const array2 = [1, 2, 3]

array2.forEach((number) => {
  //FOREACH
  console.log(number)
})

const array3 = array2.map((number) => {
  //MAP
  // Loops through the array and returns an array with new values
  return number * 2
})

console.log(array3)

const array5 = array2.filter((number) => {
  //FILTER
  return number > 1 //Loops through array and returns an array with values that are true
})

console.log(array5)

const element = array2.find((number) => {
  //FIND
  return number > 1 //Loops through array and finds first element that returns true
})
console.log(element)

const isTrue = array2.some((number) => {
  //SOME
  return number > 1 //Loops through array and finds if some elements match criteria. /*.every returns true if every element fits criteria*/
})
console.log(isTrue)

const singleValue = array2.reduce(
  (acc, n) => {
    //REDUCE
    return acc / n //Loops through array and accumulates all values to one value based on function given and starting value.
  },
  array2.reduce((acc, n) => {
    return acc + n
  }, 0)
)
console.log(singleValue)

//Template Leterals
const hello = "Hello"
const world = "World"
console.log(`${hello} ${world}`)

//New and This
let createUser = (name, age) => {
  ;(this.name = name), (this.age = age)
}

let date = new Date()
console.log(date.getSeconds())

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
