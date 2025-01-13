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
        btn1.classList.add('active-btn'); 

        btn1.addEventListener('click', () => {
            if (!content1.classList.contains('active')) {
                content1.classList.add('active');
                content2.classList.remove('active');
                btn1.classList.add('active-btn'); 
                btn2.classList.remove('active-btn'); 
            }
        });

        btn2.addEventListener('click', () => {
            if (!content2.classList.contains('active')) {
                content2.classList.add('active');
                content1.classList.remove('active');
                btn2.classList.add('active-btn'); 
                btn1.classList.remove('active-btn'); 
            }
        });
    } else {
        console.error('Un ou plusieurs éléments nécessaires au script sont introuvables.');
    }
});




function showModal(projectId) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    
    
    if (projectId === 'projet1') {
        modalTitle.textContent = "Mockup Maison édition";
        modalImage.src = "images/Mockup 1ere couverture livre sensorielle.png";
        modalDescription.textContent = "Dans le cadre d'un cours de gestion de projet, nous avons dû mettre en place une communication et des créations d'ouvrages, notre cible était un public jeune entre 3 à 6 ans, voici un mockup pour un livre sensoriel.";
    } else if (projectId === 'projet2') {
        modalTitle.textContent = "Mystère façon hitchicock";
        modalImage.src = "images/TROLONG_Owen_MYSTÈRE version2.jpg";
        modalDescription.textContent = "Création d'une affiche avec 5 photos dans le cadre d'un cours, cette affiche avait pour thème 'Mystère à la manière d'Hitchcock'.";
    } else if (projectId === 'projet3') {
        modalTitle.textContent = "Miroir Musée d'art Moderne (Paris)";
        modalImage.src = "images/TROLONG_Owen_2_modifiée.jpg";
        modalDescription.textContent = "Création d'une affiche avec pour thème 'Miroir' pour le Musée d'Art Moderne à Paris dans le cadre un cours";
    } else if (projectId === 'projet4') {
        modalTitle.textContent = "Logo Association";
        modalImage.src = "images/Logo 2.png";
        modalDescription.textContent = "Création d'un logo pour une association où l'on a coopéré avec eux lors d'une SAE pendant plusieurs mois, ce logo fait parti de l'un des logos que l'on a proposé à l'association.";
    } else if (projectId === 'projet5') {
        modalTitle.textContent = "Tournoi d'Échecs 2024";
        modalImage.src = "images/Affiche de tournoi.jpg";
        modalDescription.textContent = "Création d'une affiche pour l'annonce du tournoi interne de fin d'année 2024 du club MAT88 publiée sur Facebook.";
    } else if (projectId === 'projet6') {
        modalTitle.textContent = "Échecs, Stage 2024";
        modalImage.src = "images/Affiche Stage.png";
        modalDescription.textContent = "Création d'une affiche pour annoncer un stage d'échecs pour le club MAT88 mais ce stage n'a pas pu avoir lieu.";
    } else if (projectId === 'projet7') {
        modalTitle.textContent = "2024, Pendaison Échecs";
        modalImage.src = "images/Pendaison.jpg";
        modalDescription.textContent = "Affiche permettant d'annoncer la pendaison au groupe Facebook du club et celui du cdje59 pour l'annonce de changement de salle du club MAT88.";
    } else if (projectId === 'projet8') {
        modalTitle.textContent = "Création du logo personnel";
        modalImage.src = "images/Logo ot.png";
        modalDescription.textContent = "Ce logo permet de me définir dans un style assez simple avec deux couleurs qui sont le noir pour le côté sobre et or pour le côté luxueux du logo.";
    }
    
   
    modal.style.display = "block";
}


function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



function clearHighlights() {
    const marks = document.querySelectorAll('mark'); 
    marks.forEach(mark => {
        const parent = mark.parentNode; 
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
    });
}


function highlightWord(element, word) {
    const regex = new RegExp(`(${word})`, 'gi'); 

    
    element.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            const text = child.nodeValue; 
            const highlightedText = text.replace(regex, '<mark>$1</mark>'); 

            
            if (highlightedText !== text) {
                const tempElement = document.createElement('span'); 
                tempElement.innerHTML = highlightedText; 
                element.replaceChild(tempElement, child); 
                Array.from(tempElement.childNodes).forEach(newNode => element.insertBefore(newNode, tempElement)); 
                element.removeChild(tempElement); 
            }
        } else if (child.nodeType === Node.ELEMENT_NODE) { 
            highlightWord(child, word);
        }
    });
}


const searchInput = document.querySelector('.recherche');
const sections = document.querySelectorAll('section');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim(); 
        clearHighlights(); 
        if (!searchTerm) return; 

        let found = false;

        
        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                highlightWord(section, searchTerm); 
                if (!found) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'center' });  
                    found = true;
                }
            }
        });

        if (!found) {
            alert(`Le mot "${searchTerm}" n'a pas été trouvé.`);
        }
    });
}
