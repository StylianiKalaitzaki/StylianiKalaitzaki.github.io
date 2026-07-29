function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    const interval = setInterval(() => {
        element.innerHTML = text.slice(0, i) + '<span class="cursor">|</span>';
        i++;

        if (i >= text.length) {
            element.innerHTML = text
            clearInterval(interval);
        }
    }, speed);
}

function buildInfoSection () {
    const hero = document.querySelector('#modal-body');

    hero.innerHTML = `
            <div id="terminal">
                <p id="name"><span class="cursor">|</span></p>
                <p id="location"><span class="cursor">|</span></p>
                <p id="role"><span class="cursor">|</span></p>
                <p id="company"><span class="cursor">|</span></p>
            </div>
        `;

    const nameText = `Name: ${SITE_DATA.meta.name}`;
    const locationText = `Location: ${SITE_DATA.meta.location}`;
    const roleText = `Role: ${SITE_DATA.meta.role}`;
    const companyText = `Company: ${SITE_DATA.meta.company}`;


    let delay = 500;
    setTimeout(() => {
            typeWriter(document.querySelector('#name'), nameText);
        },
        delay
    );

    delay += nameText.length * 50;
    setTimeout(() => {
            typeWriter(document.querySelector('#location'), locationText);
        },
        delay
    );

    delay += locationText.length * 50;
    setTimeout(() => {
            typeWriter(document.querySelector('#role'), roleText);
        },
        delay
    );

    delay += roleText.length * 50;
    setTimeout(() => {
            typeWriter(document.querySelector('#company'), companyText);

        },
        delay
    );
}

function buildFooterSection () {
    const footer = document.querySelector('footer');
    const emailTxt = `${SITE_DATA.meta.email}`;
    const nameTxt = `${SITE_DATA.meta.name}`;
    const roleTxt = `${SITE_DATA.meta.role}`;
    const locationTxt = `${SITE_DATA.meta.location}`;

    footer.innerHTML = `${nameTxt} | ${roleTxt} | ${locationTxt} | <a href="mailto:${emailTxt}">${emailTxt}</a>`;

}

function turnOnFlashlight (dark_overlay) {
    dark_overlay.style.opacity = '0';
    dark_overlay.style.pointerEvents = 'none';
    setTimeout(() => dark_overlay.remove(), 800);
}

function turnOffFlashlight () {
    const newOverlay = document.createElement('div');
    newOverlay.id = 'overlay';
    newOverlay.innerHTML = '<p>Press F for flashlight</p>';
    newOverlay.style.opacity = '0';
    document.body.prepend(newOverlay);
    setTimeout(() => newOverlay.style.opacity = '1', 10);
}

function closeModal() {
    modalWindow.classList.remove('open');
    modalContainer.classList.remove('open');
    //setTimeout(() => modalContainer.classList.add('hidden'), 300);
    setTimeout(() => {
        modalContainer.classList.add('hidden');
        modalBody.innerHTML = ''; // clear content
    }, 300);
}

// render correct content
function renderSection(section) {
    switch(section) {
        case 'info':
            buildInfoSection();
            break;
        case 'skills':
            buildSkillsSection();
            break;
        case 'projects':
            modalBody.innerHTML = `<h2>Projects</h2>`;
            break;
        case 'xp':
            buildXPSection();
            break;
        case 'contact':
            buildContactSection();
            break;
        default:
            modalBody.innerHTML = `<p>Coming soon</p>`;
    }
}

function buildSkillsSection() {
    const skills = document.querySelector('#modal-body');

    let html = `<h2>Skills</h2>`;

    for (const category of SITE_DATA.stack) {
        html += `<h3 class="skill-category">${category.name}</h3>`;
        html += `<div class="skill-items">`;

        for (const item of category.items) {
            html += `<span class="skill-circle">${item}</span>`;
        }

        html += `</div>`;
    }

    skills.innerHTML = html;
}

function buildXPSection() {
    const xp = document.querySelector('#modal-body');

    let html = `<h2>XP</h2>`;

    for (const job of SITE_DATA.experience) {
        html += `
            <div class="xp-items">
                <p>Company: ${job.company}</p>
                <p>Role: ${job.role}</p>
                <p>Location: ${job.location}</p>
                <p>Period: ${job.period}</p>
            </div>`;
    }

    xp.innerHTML = html;
}

function buildContactSection() {
    const contact = document.querySelector('#modal-body');

    let html = `<h2>Contact</h2>`;

    for (const link of SITE_DATA.contact.links) {
        html += `
            <div class="contact-items">
                <p>${link.platform}: ${link.handle}</p>
            </div>`;
    }

    contact.innerHTML = html;
}

document.querySelector('#headline').textContent = SITE_DATA.hero.headline;

// ---- Flashlight ----
document.addEventListener('keydown', (e) => {

    if (e.code === 'KeyF') {
        const dark_overlay = document.querySelector('#overlay');

        if (dark_overlay) {
            turnOnFlashlight(dark_overlay);
            //buildHeroSection();
        } else {
            turnOffFlashlight();
        }
        //buildFooterSection();
    }
});

// ---- Modal ----
const modalContainer = document.querySelector('#modal-container');
const modalWindow = document.querySelector('#modal-window');
const modalBody = document.querySelector('#modal-body');
const modalClose = document.querySelector('#modal-close');

document.querySelector('nav').addEventListener('click', (e) => {
    const link = e.target.closest('a');
    console.log('clicked element:', e.target);
    console.log('closest a:', e.target.closest('a'));
    console.log('dataset:', e.target.closest('a')?.dataset);
    if (!link) return;

    e.preventDefault();
    const section = link.dataset.section;
    console.log('section clicked:', section);

    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('open');

    setTimeout(() => {
        modalWindow.classList.add('open');
        renderSection(section);
    }, 10);
});

modalClose.addEventListener('click', closeModal);
