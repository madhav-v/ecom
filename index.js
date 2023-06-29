function searchToggle(obj, evt) {
  var container = $(obj).closest(".search-wrapper");
  if (!container.hasClass("active")) {
    container.addClass("active");
    evt.preventDefault();
  } else if (
    container.hasClass("active") &&
    $(obj).closest(".input-holder").length == 0
  ) {
    container.removeClass("active");
    // clear input
    container.find(".search-input").val("");
  }
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const expandButton = document.querySelector(".expand-button");
const newsContent = document.querySelector(".news-content");

// Add event listener to the expand button
expandButton.addEventListener("click", function () {
  // Toggle the display of the news content
  if (newsContent.style.display === "none") {
    newsContent.style.display = "block";
    expandButton.textContent = "Collapse";
  } else {
    newsContent.style.display = "none";
    expandButton.textContent = "Expand";
  }
});

// function showForm() {
//   var formContainer = document.createElement("div");
//   formContainer.classList.add("overlay-form");

//   var closeBtn = document.createElement("div");
//   closeBtn.classList.add("close-btn");
//   closeBtn.innerHTML = "×";
//   closeBtn.setAttribute("onclick", "toggleForm()");
//   formContainer.appendChild(closeBtn);

//   var heading = document.createElement("h1");
//   heading.innerHTML = "Create a new account";
//   formContainer.appendChild(heading);

//   var paragraph = document.createElement("p");
//   paragraph.innerHTML = "Join our community. Let's set up your account";
//   formContainer.appendChild(paragraph);

//   var fullnameDiv = document.createElement("div");
//   fullnameDiv.classList.add("form-element");
//   var fullnameLabel = document.createElement("label");
//   fullnameLabel.setAttribute("for", "fullname");
//   fullnameLabel.innerHTML = "Fullname";
//   fullnameDiv.appendChild(fullnameLabel);
//   var fullnameInput = document.createElement("input");
//   fullnameInput.setAttribute("type", "text");
//   fullnameInput.setAttribute("id", "fullname");
//   fullnameDiv.appendChild(fullnameInput);
//   formContainer.appendChild(fullnameDiv);

//   var emailDiv = document.createElement("div");
//   emailDiv.classList.add("form-element");
//   var emailLabel = document.createElement("label");
//   emailLabel.setAttribute("for", "email");
//   emailLabel.innerHTML = "Email";
//   emailDiv.appendChild(emailLabel);
//   var emailInput = document.createElement("input");
//   emailInput.setAttribute("type", "email");
//   emailInput.setAttribute("id", "email");
//   emailDiv.appendChild(emailInput);
//   formContainer.appendChild(emailDiv);

//   var passwordDiv1 = document.createElement("div");
//   passwordDiv1.classList.add("form-element");
//   var passwordLabel1 = document.createElement("label");
//   passwordLabel1.setAttribute("for", "password-1");
//   passwordLabel1.innerHTML = "Password";
//   passwordDiv1.appendChild(passwordLabel1);
//   var passwordInput1 = document.createElement("input");
//   passwordInput1.setAttribute("type", "password");
//   passwordInput1.setAttribute("id", "password-1");
//   passwordDiv1.appendChild(passwordInput1);
//   formContainer.appendChild(passwordDiv1);

//   var passwordDiv2 = document.createElement("div");
//   passwordDiv2.classList.add("form-element");
//   var passwordLabel2 = document.createElement("label");
//   passwordLabel2.setAttribute("for", "password-2");
//   passwordLabel2.innerHTML = "Confirm password";
//   passwordDiv2.appendChild(passwordLabel2);
//   var passwordInput2 = document.createElement("input");
//   passwordInput2.setAttribute("type", "password");
//   passwordInput2.setAttribute("id", "password-2");
//   passwordDiv2.appendChild(passwordInput2);
//   formContainer.appendChild(passwordDiv2);

//   var submitDiv = document.createElement("div");
//   submitDiv.classList.add("form-element");
//   var submitButton = document.createElement("button");
//   submitButton.innerHTML = "Signup";
//   submitDiv.appendChild(submitButton);
//   formContainer.appendChild(submitDiv);

//   document.body.appendChild(formContainer);
//   toggleForm();
// }

// function toggleForm() {
//   document.body.classList.toggle("activeForm");
// }
function showForm() {
  var formContainer = document.createElement("div");
  formContainer.classList.add("overlay-form");

  var closeBtn = document.createElement("div");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "×";
  closeBtn.setAttribute("onclick", "toggleForm()");
  formContainer.appendChild(closeBtn);

  var heading = document.createElement("h1");
  heading.innerHTML = "Create a new account";
  formContainer.appendChild(heading);

  var paragraph = document.createElement("p");
  paragraph.innerHTML = "Join our community. Let's set up your account";
  formContainer.appendChild(paragraph);

  var fullnameDiv = document.createElement("div");
  fullnameDiv.classList.add("form-element");
  var fullnameLabel = document.createElement("label");
  fullnameLabel.setAttribute("for", "fullname");
  fullnameLabel.innerHTML = "Fullname";
  fullnameDiv.appendChild(fullnameLabel);
  var fullnameInput = document.createElement("input");
  fullnameInput.setAttribute("type", "text");
  fullnameInput.setAttribute("id", "fullname");
  fullnameDiv.appendChild(fullnameInput);
  formContainer.appendChild(fullnameDiv);

  var emailDiv = document.createElement("div");
  emailDiv.classList.add("form-element");
  var emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.innerHTML = "Email";
  emailDiv.appendChild(emailLabel);
  var emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailDiv.appendChild(emailInput);
  formContainer.appendChild(emailDiv);

  var passwordDiv1 = document.createElement("div");
  passwordDiv1.classList.add("form-element");
  var passwordLabel1 = document.createElement("label");
  passwordLabel1.setAttribute("for", "password-1");
  passwordLabel1.innerHTML = "Password";
  passwordDiv1.appendChild(passwordLabel1);
  var passwordInput1 = document.createElement("input");
  passwordInput1.setAttribute("type", "password");
  passwordInput1.setAttribute("id", "password-1");
  passwordDiv1.appendChild(passwordInput1);
  formContainer.appendChild(passwordDiv1);

  var passwordDiv2 = document.createElement("div");
  passwordDiv2.classList.add("form-element");
  var passwordLabel2 = document.createElement("label");
  passwordLabel2.setAttribute("for", "password-2");
  passwordLabel2.innerHTML = "Confirm password";
  passwordDiv2.appendChild(passwordLabel2);
  var passwordInput2 = document.createElement("input");
  passwordInput2.setAttribute("type", "password");
  passwordInput2.setAttribute("id", "password-2");
  passwordDiv2.appendChild(passwordInput2);
  formContainer.appendChild(passwordDiv2);

  var submitDiv = document.createElement("div");
  submitDiv.classList.add("form-element");
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Signup";
  submitDiv.appendChild(submitButton);
  formContainer.appendChild(submitDiv);

  // Add form submission event listener
  formContainer.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    if (validateForm()) {
      // Form is valid, perform desired action (e.g., submit form)
      console.log("Form submitted successfully!");
      // Add your form submission logic here
    }
  });

  document.body.appendChild(formContainer);
  toggleForm();
}

function toggleForm() {
  document.body.classList.toggle("activeForm");
}

function validateForm() {
  var fullname = document.getElementById("fullname").value.trim();
  var email = document.getElementById("email").value.trim();
  var password1 = document.getElementById("password-1").value.trim();
  var password2 = document.getElementById("password-2").value.trim();

  // Validate Fullname
  if (fullname === "") {
    alert("Please enter your Fullname.");
    return false;
  }

  // Validate Email
  if (email === "") {
    alert("Please enter your Email.");
    return false;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid Email address.");
    return false;
  }

  // Validate Password
  if (password1 === "") {
    alert("Please enter a password.");
    return false;
  } else if (password1 !== password2) {
    alert("Passwords do not match.");
    return false;
  }

  return true; // Form is valid
}

function isValidEmail(email) {
  // Use a regular expression to validate the email format
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
