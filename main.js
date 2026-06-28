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

function buildHeroSection () {
    const hero = document.querySelector('#hero');

    hero.innerHTML = `
            <h1>${SITE_DATA.hero.headline}</h1>
            <div id="terminal">
                <p id="name"><span class="cursor">|</span></p>
                <p id="location"><span class="cursor">|</span></p>
                <p id="role"><span class="cursor">|</span></p>
                <p id="company"><span class="cursor">|</span></p>
            </div>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#xp">XP</a>
                <a href="#contact">Contact</a>
            </nav>
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

function buildSkillsSection () {
    const skills = document.querySelector('#skills');


}

function turnOnFlashlight (dark_overlay) {
    dark_overlay.style.opacity = '0';
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


document.addEventListener('keydown', (e) => {

    if (e.code === 'KeyF') {
        const dark_overlay = document.querySelector('#overlay');

        if (dark_overlay) {
            turnOnFlashlight(dark_overlay);
            buildHeroSection();
        } else {
            turnOffFlashlight();
        }
        //buildFooterSection();
    }
});
