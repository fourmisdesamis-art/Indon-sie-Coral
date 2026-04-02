console.log("Site chargé !");

function toggleMenu() {
  const menu = document.getElementById("navLinks");
  menu.classList.toggle("active");
}

// INSCRIPTION
function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (!username || !password) {
    alert("Remplis tous les champs !");
    return;
  }

  localStorage.setItem(username, password);
  alert("Compte créé !");
}

// CONNEXION
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    alert("Connexion réussie !");
  } else {
    alert("Identifiants incorrects !");
  }
}
