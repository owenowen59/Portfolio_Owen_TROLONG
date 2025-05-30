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
    } else if (projectId === 'projet9') {
        modalTitle.textContent = "Maquette Figma Vagabonda";
        modalImage.src = "images/Logovagabonda.jpg";
        modalDescription.innerHTML = '<a href="https://www.figma.com/proto/KHrIk9HDs5657oZ6iq9CMG/Vagabonda?node-id=0-1&t=xIAwZpnVNepsOg6u-1">'+
        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVR4nL3SrQ3CcBBA8V9RyJougMcgWaBbNKlhBSwrIFmBHZAM0gE6QE2v5l8Px8dLnny5XO74Enu02fiCwBPHbByYcccuE0dxwg1NJo7iiDO2mXh1wAmbTBzFPju5Q/XznSdcUf/lzg8cXo1WPvrtt1kAAURIunEqQGgAAAAASUVORK5CYII=" alt="play--v1"> Figma<a>'+
        '<br>Dans le cadre de la SAE Marathon du Web 2025, le site web Vagabonda a été conçu en 36 heures. Le lien mène vers une maquette interactive réalisée sur Figma. Ce projet permet aux utilisateurs de partager et découvrir des itinéraires de voyage, principalement en Amérique latine. Il favorise les échanges entre voyageurs à travers des parcours, des commentaires et des recommandations. Le design, réalisé sur Figma, intègre un logo créé avec Illustrator. Ce projet mêle inspiration, partage et découverte de nouvelles destinations.'+
        '<br> Groupe : Owen TROLONG, Jeremy BARBARIN, Hugo TREBUCHERE, Emilien AGACHE, Hugo LEGRAND';
    } else if (projectId === 'projet10') {
        modalTitle.textContent = "Maquette Figma IronWay";
        modalImage.src = "images/banniereironway.jpg"; // Remplace par le chemin de ton image
        modalDescription.innerHTML = '<a href="https://www.figma.com/proto/0itiJD8cmal8V0qrEIn5gi/SAE-202---IronWay?node-id=0-1&t=pA1U63ZQus41n7wz-1" target="_blank" rel="noopener noreferrer">' +
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVR4nL3SrQ3CcBBA8V9RyJougMcgWaBbNKlhBSwrIFmBHZAM0gE6QE2v5l8Px8dLnny5XO74Enu02fiCwBPHbByYcccuE0dxwg1NJo7iiDO2mXh1wAmbTBzFPju5Q/XznSdcUf/lzg8cXo1WPvrtt1kAAURIunEqQGgAAAAASUVORK5CYII=" alt="play--v1"> Figma<a>'+
            "<br>Dans le cadre de la SAE Marathon du Web 2025, le projet IronWay a été conçu en 2 semaines. Inspiré des événements IronMan, il s'agit d'un événement sportif d'endurance. Notre équipe a réalisé la communication complète, la création d’une maquette sur Figma, ainsi que le développement d’un site web sous WordPress. Ce projet met en avant les valeurs de dépassement de soi et d'endurance sportive.<br>" +
            "Groupe : Owen Trolong, Emilien Agache, Jérémy Barbarin, Hugo Legrand, Kilian Kwiczor";
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





















/* Search Word */

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
