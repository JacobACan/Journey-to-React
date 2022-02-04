// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const FORM = document.querySelector("#form")
const USERNAME = document.querySelector("#username")
const PASSWORD = document.querySelector("#password")
const PASSWORD_CONFIRMATION = document.querySelector("#password-confirmation")
const TERMS = document.querySelector("#terms")
const ERRORS = document.querySelector(".errors")
const ERRORS_LIST = document.querySelector(".errors-list")
// TODO: Create an event listener for when the form is submitted and do the following inside of it.
FORM.addEventListener("submit", (e) => {
  e.preventDefault()
  const errorMessages = []
  let condition1 = USERNAME.value.length >= 6
  if (!condition1)
    errorMessages.push("Ensure the username is at least 6 characters long")
  let condition2 = PASSWORD.value.length >= 10
  if (!condition2)
    errorMessages.push("Ensure the password is at least 10 characters long")
  let condition3 = PASSWORD.value == PASSWORD_CONFIRMATION.value
  if (!condition3)
    errorMessages.push("Ensure the password and confirmation password match")
  let condition4 = TERMS.checked
  if (!condition4) errorMessages.push("Ensure the terms checkbox is checked")

  if (condition1 && condition2 && condition3 && condition4) {
    FORM.submit()
  } else {
    showErrors(errorMessages)
  }
})
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

// TODO: Define this function
function clearErrors() {
  while (document.querySelectorAll(".error-message").length > 0) {
    let currentErrorList = document.querySelector(".errors-list")
    let currentError = document.querySelector(".error-message")
    currentErrorList.removeChild(currentError)
  }
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
  clearErrors()
  errorMessages.forEach((errorMessage) => {
    errorHTMLMessage = document.createElement("li")
    errorHTMLMessage.innerText = errorMessage
    errorHTMLMessage.classList = "error-message"
    errorsInList = ERRORS_LIST.querySelectorAll(".error-message")
    errorsInListArray = Array.from(errorsInList)
    containsError = errorsInListArray.some((element) => {
      return element.innerText == errorMessage
    })
    if (!containsError) ERRORS_LIST.appendChild(errorHTMLMessage)
  })
  if (ERRORS_LIST.childElementCount > 0) ERRORS.classList.add("show")
  else ERRORS.classList.remove("show")
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
}
