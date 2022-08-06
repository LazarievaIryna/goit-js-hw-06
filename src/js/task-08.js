const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
const emailFormName = form.elements.email.name;
const passwordFormName = form.elements.password.name;

function handleSubmit(event) {
  event.preventDefault();
  const { elements: email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const formElements = event.currentTarget.elements;

  const FormData = {
    [emailFormName]: formElements.email.value,
    [passwordFormName]: formElements.password.value,
  };

  console.log(FormData);
  event.currentTarget.reset();
}
