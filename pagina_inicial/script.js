// Botão de pesquisa
document.querySelector('.btn-outline-secondary').addEventListener('click', function () {
  const query = document.querySelector('.form-control').value;
  if (query.trim() !== "") {
      alert(`Você buscou por: ${query}`);
  } else {
      alert("Por favor, insira algo na barra de pesquisa.");
  }
});

// Adicionar aos favoritos
document.querySelectorAll('.fa-heart').forEach(function (heartIcon) {
  heartIcon.addEventListener('click', function () {
      alert("Filme adicionado aos favoritos!");
      this.classList.toggle('text-danger'); 
  });
});

// Assistir Depois
document.querySelectorAll('.fa-bookmark').forEach(function (bookmarkIcon) {
  bookmarkIcon.addEventListener('click', function () {
      alert("Filme salvo para assistir depois!");
      this.classList.toggle('text-primary'); 
  });
});

const profileButton = document.querySelector(".login-btn");

profileButton.addEventListener("click", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Redireciona para a página do perfil
        window.location.href = "/PROFILE/profile.html"; // Altere para a rota real da página do perfil
    } else {
        // Caso o usuário não esteja logado, redireciona para a página de login
        window.location.href = "/FORM-LOGIN/index.html"; // Altere para a rota da página de login
    }
});
