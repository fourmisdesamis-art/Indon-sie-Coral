console.log("Site chargé")

function toggleMenu() {
  const menu = document.getElementById("navLinks");
  menu.classList.toggle("active");
}

// Fermer le menu quand on clique ailleurs
document.addEventListener("click", function(event) {
  const menu = document.getElementById("navLinks");
  const toggle = document.querySelector(".menu-toggle");

  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove("active");
  }
});

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
