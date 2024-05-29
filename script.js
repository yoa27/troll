document.getElementById('openButton').addEventListener('click', function() {
    const door = document.getElementById('door');
    const hiddenContent = document.getElementById('hiddenContent');
    
    // Ouvrir la porte
    door.style.transform = 'rotateY(-90deg)';
    
    // Afficher le contenu caché après un délai pour synchroniser avec l'ouverture de la porte
    setTimeout(() => {
        hiddenContent.style.opacity = '1';
    }, 1000);  // délai en millisecondes, correspondant à la durée de l'animation de la porte
});
