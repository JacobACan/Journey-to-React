// Ternary Operator
// check ? run() : runElse
// isLoggedin = false
// isLoggedin ? console.log("Is Logged In") : console.log("Is Not Logged In")

// //Switch statement
// /* If you want to comare one variable and check if it is directly equal to another value multiple times*/
// const favoriteAnimal = "shark"
// /*switch(variable you want to check) {scope
//     case
// }*/
// switch (favoriteAnimal) {
//   case "cheetah":
//   case "bobcat":
//   case "cat": // if equal to cat then
//     console.log("cats are pretty cool")
//     break
//   case "dog":
//     console.log("wow they are loud")
//     break
//   case "shark":
//     console.log("that's an interesting choice")
//     break
//   default:
//     // Else
//     console.log("What kinda animal is that?!?!")
// }

const number = 0

switch (number) {
  case 0:
    console.log("The Number is 0")
    break
  case 1:
  case 2:
    console.log("The Number is small")
    break
  case 3:
  case 4:
    console.log("The Number is medium")
    break
  case 5:
    console.log("The Number is large")
    break
  default:
    console.log("try again!")
    break
}
// Short Circuit Evaluation
function printName(name) {
  console.log(name || "default")
}

printName()
