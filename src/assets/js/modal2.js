// Get references to the buttons and modals
const openModalButton1 = document.getElementById("openModal1");
const openModalButton2 = document.getElementById("openModal2");
const openModalButton3 = document.getElementById("openModal3");
const openModalButton4 = document.getElementById("openModal4"); // New button
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4"); // New modal
const closeModalButton1 = document.getElementById("closeModal1");
const closeModalButton2 = document.getElementById("closeModal2");
const closeModalButton3 = document.getElementById("closeModal3");
const closeModalButton4 = document.getElementById("closeModal4"); // New close button

// Function to display a modal
function showModal(modal) {
  modal.style.display = "block";
}

// Function to hide a modal
function hideModal(modal) {
  modal.style.display = "none";
}

// Event listeners for buttons
openModalButton1.addEventListener("click", () => {
  showModal(modal1);
});

openModalButton2.addEventListener("click", () => {
  showModal(modal2);
});

openModalButton3.addEventListener("click", () => {
  showModal(modal3);
});

openModalButton4.addEventListener("click", () => { // New event listener
  showModal(modal4);
});

// Event listeners for close buttons
closeModalButton1.addEventListener("click", () => {
  hideModal(modal1);
});

closeModalButton2.addEventListener("click", () => {
  hideModal(modal2);
});

closeModalButton3.addEventListener("click", () => {
  hideModal(modal3);
});

closeModalButton4.addEventListener("click", () => { // New event listener
  hideModal(modal4);
});

// Event listeners to close the modals if the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    hideModal(modal1);
  }
  if (event.target === modal2) {
    hideModal(modal2);
  }
  if (event.target === modal3) {
    hideModal(modal3);
  }
  if (event.target === modal4) { // New condition
    hideModal(modal4);
  }
});
