const toggleBtn = document.querySelector(".js-toggle-btn");
const toggleNumber = document.querySelector(".js-toggle-number");

toggleBtn.addEventListener("click", toggleTheNumber);

function toggleTheNumber() {
  toggleNumber.classList.toggle("toggle-number");
}
