console.log("hejka to form.js");

const form = document.querySelector("#contact-form");
// console.log(form.elements);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("#contact-form");
  let formData = new FormData(contactForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

form.addEventListener("submit", handleSubmit);

// document.querySelector("#button-submit").addEventListener("click", checkValidity);

// function checkValidity() {
//   const formIsValid = form.checkValidity();
//   if (formIsValid) {
//     ("valid");
//   } else {
//     console.log("not valid");
//   }
// }
