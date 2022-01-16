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
