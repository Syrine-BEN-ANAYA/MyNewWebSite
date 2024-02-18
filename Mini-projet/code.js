

// Fonction pour changer la couleur de ' Ma Boutique'
function changerCouleurTexte() {
    var titre = document.querySelector('h1');
    titre.addEventListener('mouseover', function() {
        this.style.color = 'pink';
    });
    titre.addEventListener('mouseout', function() {
        this.style.color = ''; // Rétablir la couleur par défaut
    });
}

// Fonction pour afficher un message au clic sur le bouton
function afficherAlerte() {
    var boutonEnSavoirPlus = document.querySelector('.button');
    boutonEnSavoirPlus.addEventListener('click', function() {
        alert('Cliquez sur Produits pour voir nos articles !');
    });
}

// Appel des fonctions
changerCouleurTexte();
afficherAlerte();
