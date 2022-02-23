//ES6 modules
import { Bear, Joey } from "./user.js"

console.log(Bear)
console.log(Joey)

// //Node.js Modules
// const userExport = require("./user.js")
// console.log(userExport.Julia.fur)
// console.log(userExport.Dameon.fur)

//NPM
const uuid = require("uuid")
console.log(uuid.v4())
