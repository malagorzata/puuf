console.log("hejka to form.js");

const form = document.querySelector("#contact-form");
console.log(form.elements);

document.querySelector("#button-submit").addEventListener("click", checkValidity);

function checkValidity() {
  const formIsValid = form.checkValidity();
  if (formIsValid) {
    ("valid");
  } else {
    console.log("not valid");
  }
}
