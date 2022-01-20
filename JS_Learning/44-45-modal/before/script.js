/*
  TODO: 2. Select the elements with the following IDs*/
const modal = document.querySelector("#modal") //* modal
const openModalButton = document.querySelector("#open-modal-btn") //* open-modal-btn
const closeModalButton = document.querySelector("#close-modal-btn") //* close-modal-btn
const overlay = document.querySelector("#overlay") //* BONUS: overlay

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay
openModalButton.addEventListener("click", toggleModal)

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay
closeModalButton.addEventListener("click", toggleModal)

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
overlay.addEventListener("click", toggleModal)

function toggleModal() {
  modal.classList.toggle("open")
  overlay.classList.toggle("open")
}
