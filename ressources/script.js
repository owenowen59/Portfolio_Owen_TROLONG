document.addEventListener('DOMContentLoaded', (event) => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    
    if (scrollToTopBtn) {
        window.onscroll = function() {
            const sectionAccueil = document.getElementById("Accueil");
            const sectionPosition = sectionAccueil.offsetTop + sectionAccueil.offsetHeight;

            if (window.scrollY > sectionPosition) {
                scrollToTopBtn.style.display = "block";  
            } else {
                scrollToTopBtn.style.display = "none";   
            }
        };

        
        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" }); 
        });
    } else {
        console.error('Le bouton scrollToTopBtn n\'a pas été trouvé dans le DOM');
    }
});







/* Fonctionnalités de Progres Bar */ 

window.addEventListener('DOMContentLoaded', (event) => {
    const progressBars = document.querySelectorAll('.progress');

    
    function animateProgressBar() {
        progressBars.forEach((bar) => {
            const skillValue = bar.getAttribute('data-skill');
            bar.style.width = `${skillValue}%`;
        });
    }

    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    
    window.addEventListener('scroll', () => {
        progressBars.forEach((bar) => {
            if (isInViewport(bar) && !bar.classList.contains('animated')) {
                animateProgressBar(); 
                bar.classList.add('animated'); 
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('univ');
    const btn2 = document.getElementById('perso');
    const content1 = document.getElementById('creauniv');
    const content2 = document.getElementById('creaperso');

    if (btn1 && btn2 && content1 && content2) {
        content1.classList.add('active');
        btn1.classList.add('active-btn'); // Initialiser le bouton1 comme actif

        btn1.addEventListener('click', () => {
            if (!content1.classList.contains('active')) {
                content1.classList.add('active');
                content2.classList.remove('active');
                btn1.classList.add('active-btn'); // Mettre à jour la couleur du bouton1
                btn2.classList.remove('active-btn'); // Réinitialiser le bouton2
            }
        });

        btn2.addEventListener('click', () => {
            if (!content2.classList.contains('active')) {
                content2.classList.add('active');
                content1.classList.remove('active');
                btn2.classList.add('active-btn'); // Mettre à jour la couleur du bouton2
                btn1.classList.remove('active-btn'); // Réinitialiser le bouton1
            }
        });
    } else {
        console.error('Un ou plusieurs éléments nécessaires au script sont introuvables.');
    }
});



// Fonction pour afficher le modal avec les informations du projet
function showModal(projectId) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    
    // Remplir les informations du modal selon le projet sélectionné
    if (projectId === 'projet1') {
        modalTitle.textContent = "Mockup Maison édition";
        modalImage.src = "images/Mockup 1ere couverture livre sensorielle.png";
        modalDescription.textContent = "Description détaillée du projet 1...";
    } else if (projectId === 'projet2') {
        modalTitle.textContent = "Mystère façon hitchicock";
        modalImage.src = "images/TROLONG_Owen_MYSTÈRE version2.jpg";
        modalDescription.textContent = "Description détaillée du projet 2...";
    } else if (projectId === 'projet3') {
        modalTitle.textContent = "Miroir Musée d'art Moderne (Paris)";
        modalImage.src = "images/TROLONG_Owen_2_modifiée.jpg";
        modalDescription.textContent = "Description détaillée du projet 3...";
    } else if (projectId === 'projet4') {
        modalTitle.textContent = "Logo Association";
        modalImage.src = "images/Logo 2.png";
        modalDescription.textContent = "Description détaillée du projet 4...";
    } else if (projectId === 'projet5') {
        modalTitle.textContent = "Tournoi d'Échecs 2024";
        modalImage.src = "images/Affiche de tournoi.jpg";
        modalDescription.textContent = "Description détaillée du projet 5...";
    } else if (projectId === 'projet6') {
        modalTitle.textContent = "Échecs, Stage 2024";
        modalImage.src = "images/Affiche Stage.png";
        modalDescription.textContent = "Description détaillée du projet 6...";
    } else if (projectId === 'projet7') {
        modalTitle.textContent = "2024, Pendaison Échecs";
        modalImage.src = "images/Pendaison.jpg";
        modalDescription.textContent = "Description détaillée du projet 7...";
    } else if (projectId === 'projet8') {
        modalTitle.textContent = "Création du logo personnel";
        modalImage.src = "images/Logo ot.png";
        modalDescription.textContent = "Description détaillée du projet 8...";
    }
    
    // Afficher le modal
    modal.style.display = "block";
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Fermeture du modal en cliquant en dehors de la fenêtre
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


