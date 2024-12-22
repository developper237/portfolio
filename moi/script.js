// Fonctionnalités JavaScript pour un Portfolio Interactif

// Effet de défilement fluide pour la navigation
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation du texte de la section hero
const heroText = document.querySelector('.hero h1');
let textArray = heroText.textContent.split('');
heroText.textContent = '';
textArray.forEach((letter, i) => {
    setTimeout(() => {
        heroText.textContent += letter;
    }, i * 100);
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙 Mode Nuit';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '5px 10px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Mode Jour';
    } else {
        toggleButton.textContent = '🌙 Mode Nuit';
    }
});

// Détection d'inactivité de l'utilisateur avec popup personnalisé
let inactivityTimer;
function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        showCustomPopup();
    }, 30000); // 30 secondes d'inactivité
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);
resetTimer();

function showCustomPopup() {
    const popup = document.createElement('div');
    popup.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); text-align: center; z-index: 10000; padding: 20px; width: 300px;">
            <h3 style='margin: 0 0 10px;'>Toujours là ? 👋</h3>
            <p>Explorez davantage mon portfolio et découvrez mes projets passionnants !</p>
            <button id='closePopup' style='background: #4e54c8; color: #fff; border: none; padding: 8px 16px; margin-top: 10px; border-radius: 5px; cursor: pointer;'>Fermer</button>
        </div>
    `;
    document.body.appendChild(popup);

    document.getElementById('closePopup').addEventListener('click', () => {
        popup.remove();
    });
}

// Animation au défilement des sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Ajout d'un bouton Retour en Haut
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '⬆️';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.padding = '10px';
scrollTopButton.style.display = 'none';
scrollTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Ajouter des boutons 'Visiter' aux projets avec des liens uniques
const projectElements = document.querySelectorAll('.project');
const projectLinks = [
    'https://e-computers-ten.vercel.app/',
    'https://ndeserge.joelminka.com',
    'https://ndeserge.joelminka.com/figma',
    'https://projet4.example.com'
];

projectElements.forEach((project, index) => {
    const visitButton = document.createElement('a');
    visitButton.textContent = 'Visiter';
    visitButton.href = projectLinks[index] || '#';
    visitButton.target = '_blank';
    visitButton.style.display = 'inline-block';
    visitButton.style.marginTop = '10px';
    visitButton.style.padding = '8px 12px';
    visitButton.style.background = '#4e54c8';
    visitButton.style.color = '#fff';
    visitButton.style.borderRadius = '5px';
    visitButton.style.textDecoration = 'none';
    visitButton.style.cursor = 'pointer';
    project.appendChild(visitButton);
});


