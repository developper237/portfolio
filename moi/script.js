// === Navigation fluide ===
const navigationLinks = document.querySelectorAll('nav ul li a');

navigationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// === Animation du texte dans la section Hero ===
const heroText = document.querySelector('.hero h1');
if (heroText) {
    let textArray = heroText.textContent.split('');
    heroText.textContent = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => {
            heroText.textContent += letter;
        }, i * 100);
    });
}



// === Détection d'inactivité ===
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

// === Animation au défilement ===
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// === Bouton Retour en Haut ===
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '⬆️';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.padding = '10px';
scrollTopButton.style.display = 'none';
scrollTopButton.style.cursor = 'pointer';
scrollTopButton.style.zIndex = '1000';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    scrollTopButton.style.display = (window.scrollY > 200) ? 'block' : 'none';
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Ajout des boutons "Visiter" aux projets ===
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
// script.js
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

