const submit_btn = document.querySelector(".submit");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const tel = document.getElementById("tel");
const hidden = document.querySelectorAll(".hidden");
const input = document.querySelectorAll(".input");
const inc_email = document.querySelector(".incorrect_mail");

submit_btn.addEventListener("click", (e) => {
  // validation for empty fields, shows hidden notifications
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      e.preventDefault();
      hidden[i].style.display = "block";
    }
  }

  function isValidEmail(email) {
    // Regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email address against the pattern and return the result

    return pattern.test(email);
  }

  // display error if email is invalid
  if (!email.value == "" && !isValidEmail(email.value)) {
    inc_email.style.display = "block";
    e.preventDefault();
  }
  // when clicking inside input field hide error notif.
  input.forEach((a) => {
    a.addEventListener("focus", () => {
      inc_email.style.display = "none";
      hidden.forEach((b) => {
        b.style.display = "none";
      });
    });
  });
});
