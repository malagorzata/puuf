console.log("hejka to form.js");

const form = document.querySelector("#payment-form");
// console.log(form.elements);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("payment-form");
  let formData = new FormData(paymentForm);
  document.querySelector("button[class=place-order]").disabled = true;
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("form submited sucesfully");
    })
    .catch((error) => alert(error));
};

form.addEventListener("submit", handleSubmit);

// function removeMessege() {
//   document.querySelector("#confirmation-text").classList.add("hidden");
// }
// do
