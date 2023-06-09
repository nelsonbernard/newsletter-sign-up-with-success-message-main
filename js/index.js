const errorMessage = document.getElementById("errorMessage");
const submitButton = document.getElementById("submitButton");
const dismissButton = document.getElementById("dismissButton");
const emailInput = document.getElementById("emailInput");
const successEmail = document.getElementById("successEmail");
const containerMain = document.getElementById("containerMain");
const containerSuccess = document.getElementById("containerSuccess");

submitButton.addEventListener("click", (e) => {
  var regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  e.preventDefault();

  if (!regex.test(emailInput.value)) {
    emailInput.classList.add("error-input");
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("error-input");
    errorMessage.style.display = "none";

    containerMain.style.display = "none";
    containerSuccess.style.display = "block";
    successEmail.innerText = emailInput.value;
  }
});

dismissButton.addEventListener("click", (e) => {
  e.preventDefault();

  containerMain.style.display = "block";
  containerSuccess.style.display = "none";
});
