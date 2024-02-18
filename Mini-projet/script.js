

document.addEventListener('DOMContentLoaded', function () {
    initFormValidation();
});

function initFormValidation() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

   
        if (validateForm()) {
            // Si le formulaire est valide, vous pouvez envoyer les données au serveur ici
            alert('Formulaire soumis avec succès!');
        }
    });
}

function validateForm() {
    var email = document.getElementById('email').value;
    var reclamation = document.getElementById('reclamation').value;

    // Ajoutez ici votre logique de validation du formulaire
    // Par exemple, vous pouvez vérifier si l'email est valide et si la réclamation n'est pas vide

    if (!isValidEmail(email)) {
        alert('Veuillez fournir une adresse e-mail valide.');
        return false;
    }

    if (reclamation.trim() === '') {
        alert('Veuillez entrer votre réclamation.');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Cette fonction vérifie si l'email a un format valide
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
