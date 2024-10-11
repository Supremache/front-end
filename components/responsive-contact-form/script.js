document.addEventListener("DOMContentLoaded", () => {
  let contactForm = document.getElementById("contactForm");
  let alertBox = document.querySelector(".alert-container");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      showValidationMessages(contactForm);
    } else {
      alertBox.style.display = "flex";
      setTimeout(() => {
        alertBox.style.display = "none";
      }, 3000);
    }
  });

  function showValidationMessages(form) {
    // Select all inputs, textareas, and fieldsets
    let inputs = form.querySelectorAll("input, textarea, fieldset");

    inputs.forEach((input) => {
      let errorMessage;

      if (input.type === "radio") {
        let fieldset = input.closest("fieldset");
        if (fieldset) {
          errorMessage = form.querySelector(
            `.error-message[data-for="${fieldset.id}"]`
          );
          let isValidRadio =
            fieldset.querySelectorAll("input[type='radio']:checked").length > 0;

          if (isValidRadio) {
            errorMessage.style.display = "none";
            fieldset.classList.remove("invalid");
          } else {
            errorMessage.style.display = "block";
            fieldset.classList.add("invalid");
          }
        }
      } else {
        // For other input types
        errorMessage = form.querySelector(
          `.error-message[data-for="${input.id}"]`
        );

        if (input.checkValidity()) {
          errorMessage.style.display = "none";
          input.classList.remove("invalid");
        } else {
          errorMessage.style.display = "block";
          input.classList.add("invalid");
        }
      }
    });
  }
});
