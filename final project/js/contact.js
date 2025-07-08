    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    function validateName() {
      const name = nameInput.value.trim();
      const regex = /^[A-Za-z\s]{3,}$/;
      if (!name) {
        nameError.textContent = "This field is required";
        return false;
      } else if (!regex.test(name)) {
        nameError.textContent = "Invalid name";
        return false;
      } else {
        nameError.textContent = "";
        return true;
      }
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        emailError.textContent = "This field is required";
        return false;
      } else if (!regex.test(email)) {
        emailError.textContent = "Invalid email";
        return false;
      } else {
        emailError.textContent = "";
        return true;
      }
    }

    function validateSubject() {
      const subject = subjectInput.value.trim();
      if (!subject) {
        subjectError.textContent = "This field is required";
        return false;
      } else {
        subjectError.textContent = "";
        return true;
      }
    }

    function validateMessage() {
      const message = messageInput.value.trim();
      if (!message) {
        messageError.textContent = "This field is required";
        return false;
      } else {
        messageError.textContent = "";
        return true;
      }
    }

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    subjectInput.addEventListener("input", validateSubject);
    messageInput.addEventListener("input", validateMessage);

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        alert("Form submitted successfully!");
        this.reset();
      }
    });