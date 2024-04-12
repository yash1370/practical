function changeText() {
  let selectedOption = document.querySelector(
    'input[name="option"]:checked'
  ).value;
  let displayTexts = document.querySelectorAll(".position-box h5");

  // Change text based on selected option
  displayTexts.forEach((displayText) => {
    displayText.textContent = `${selectedOption} ~ Full Time`;
  });
}

// Set default selected option
changeText();

// Get the modal title element
document.addEventListener("DOMContentLoaded", function () {
  let applyButtons = document.querySelectorAll(
    '[data-bs-target="#exampleModal"]'
  );

  applyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let positionName = button.getAttribute("data-position-name");
      let modalTitle = document.getElementById("modalTitle");
      modalTitle.textContent = positionName;
    });
  });
});

function fileSelected(inputId) {
  var input = document.getElementById(inputId);
  var file = input.files[0];
  var fileName = document.getElementById(inputId + "Name");
  fileName.textContent = file.name;
}
function submitForm(event) {
  event.preventDefault();
  document.getElementById("letterName").textContent = "";
  document.getElementById("resumeName").textContent = "";
}

//  form submission
document
  .getElementById("application-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Perform form validation
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let letter = document.getElementById("letter").value;
    let resume = document.getElementById("resume").value;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      letter.trim() === "" ||
      resume.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    // If validation passes, show success message in alert
    alert("Thank you! Your application has been submitted successfully.");
    document.getElementById("application-form").reset();
  });

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("responsive-navbar");
const crossIcon = document.getElementById("cross-icon");

menuIcon.addEventListener("click", () => {
  navbar.style.display = "block";
});

crossIcon.addEventListener("click", () => {
  navbar.style.display = "none";
});
