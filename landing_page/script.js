const loginButton = document.getElementById('login-button');
const createAccountButton = document.getElementById('create-account-button');

loginButton.addEventListener('click', () => {
    window.location.href = "/FORM-LOGIN/index.html";
});

createAccountButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "/FORM-CADASTRO/index.html";
});
