window.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 1) {
    document.querySelector("#logo-wrapper").classList.remove("returnLogo");

    document.querySelector("#logo-wrapper").classList.remove("logoAppear");

    document.querySelector("#logo-wrapper").classList.add("moveLogo");
  } else {
    document.querySelector("#logo-wrapper").classList.add("returnLogo");
  }
});
