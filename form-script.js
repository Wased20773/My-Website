let submitButton = document.querySelector("input[type='submit']");
let form = document.querySelector("form");

submitButton.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent page refresh

  // Get values of form fields
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Message: ", message);

  // Check if all fields are filled out
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return; // Prevent form submission if any field is empty
  }

  // Create form data object
  const formData = new FormData(form);

  fetch("https://formspree.io/f/xyzkyqpg", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        form.reset(); // Reset the form after successful submission
      } else {
        return response.json().then((data) => {
          throw new Error(data.error || "Something went wrong!");
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}
