console.log("hejka to form-services.js");

const form = document.querySelector("#contact-form-services");
// console.log(form.elements);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("#contact-form-services");
  let formData = new FormData(contactFormServices);
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
