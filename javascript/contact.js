function handleFormSubmit(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire
  
  // Récupère l'adresse e-mail de l'utilisateur
  const emails = document.getElementById("email").value;
  
  // Affiche la pop-up de confirmation avec l'adresse e-mail
  showPopup(emails);
}

function showPopup(email) {
  
  // Affiche la pop-up
  document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}