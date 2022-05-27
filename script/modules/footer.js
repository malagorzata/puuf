form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.elements.email.value);

  const payload = {
    email: form.elements.email.value,
  };

  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea2021-907c.restdb.io/rest/puuf-newsletter  ", {
    method: "POST",
    headers: {
      "x-apikey": "602e264f5ad3610fb5bb6267",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.email.value = "";
    })
    .catch((err) => {
      console.error(err);
    });
});
