const submit_btn = document.querySelector(".submit");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const tel = document.getElementById("tel");
const hidden = document.querySelectorAll(".hidden");
const input = document.querySelectorAll(".input");
const inc_email = document.querySelector(".incorrect_mail");


submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    // validation for empty fields, shows hidden notifications
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            hidden[i].style.display = "block";
        }
    }

    function isValidEmail(mail) {
        // Regular expression pattern for validating email addresses
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Test the email address against the pattern and return the result
        return pattern.test(mail);
    }

    // hide error notifications if filled
    if (!email.value == "" && !isValidEmail(email.value)) {
        inc_email.style.display = "block";
    }
    input.forEach((inc_email) => {
        inc_email.addEventListener("focus", () => {
            hidden.forEach((inc_email) => {
                inc_email.style.display = "none";
            });
        });
    });
});
