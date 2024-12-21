// Function to show the pop-up modal
function showPopup() {
  document.getElementById("popup-modal").style.display = "block";
}

// Function to close the pop-up modal
function closePopup() {
  document.getElementById("popup-modal").style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("popup-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
