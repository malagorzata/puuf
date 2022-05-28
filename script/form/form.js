console.log("hejka to form.js");

const form = document.querySelector("#contact-form");
// console.log(form.elements);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("#contact-form");
  let formData = new FormData(contactForm);
  document.querySelector("button[id=button-submit]").disabled = true;
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("form submited sucesfully");
      document.querySelector("button[id=button-submit]").disabled = false;
      document.querySelector("input[id=name]").value = "";
      document.querySelector("input[id=email]").value = "";
      document.querySelector("textarea[id=message]").value = "";
      document.querySelector("input[type=checkbox]").checked = false;
      document.querySelector("#confirmation-text").classList.remove("hidden");
      setTimeout(removeMessege, 7000);
    })
    .catch((error) => alert(error));
};

form.addEventListener("submit", handleSubmit);

function removeMessege() {
  document.querySelector("#confirmation-text").classList.add("hidden");
}
// document.querySelector("#button-submit").addEventListener("click", checkValidity);

// function checkValidity() {
//   const formIsValid = form.checkValidity();
//   if (formIsValid) {
//     ("valid");
//     // document.querySelector("button[id=button-submit]").disabled = true;
//     // document.querySelector("button[id=button-submit]").backgroundColor = "red";
//   } else {
//     console.log("not valid");
//   }
// }
