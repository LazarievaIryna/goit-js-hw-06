const form = document.querySelector(".login-form");
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: email, password } = event.currentTarget;
    if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    } 
    const formElements = event.currentTarget.elements;
    const FormData = {
    email: formElements.email.value,
    password: formElements.password.value
    };
    event.currentTarget.reset();
    console.log(FormData);
}
