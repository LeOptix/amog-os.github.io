/**
 * @fileOverview Constructs repeated elements such as the header and footer.
 */

const links = [
    { href: `./index.html`, name: `Home`, id: `home`, icon: "nf-md-home" },
    { href: `./download.html`, name: `Download`, id: `downloads`, icon: "nf-md-download" },
    { href: `./help.html`, name: `Help`, id: `help`, icon: "nf-md-help" },
    { href: `./credits.html`, name: `Credits`, id: `credits`, icon: "nf-md-crowd" }
];

/**
 * @name navConstructor
 */

function navConstructor() {

    const nav = document.createElement(`nav`);

    for (let i = 0; i < links.length; i++) {
        const link = document.createElement(`a`);
        link.href = links[i].href;
        link.innerText = links[i].name;
        link.id = links[i].id;

        const icon = document.createElement(`i`);
        icon.classList.add(`nf`);
        icon.classList.add(links[i].icon);
        link.prepend(icon);

        nav.appendChild(link);
    }

    document.body.prepend(nav);

}

function createElement(tag, classes = [], content = '') {
    const element = document.createElement(tag);
    if (classes.length > 0) element.classList.add(...classes);
    if (content) element.innerHTML = content;
    return element;
}

function createLink(link) {
    const a = createElement('a', ['footer__link']);
    a.href = link.href;
    a.innerText = link.name;
    a.id = link.id;
    return a;
}

function footerConstructor() {
    const footer = createElement('footer');

    // noinspection HtmlUnknownTarget
    footer.appendChild(createElement('div', ['logo'], '<img src="img/toppat-banner.png" alt="Logo" class="logo__image">'));

    // noinspection HtmlUnknownTarget
    const textContent = `
        <h2>AmogOS <span id="toppat"><img src="img/toppat.png" alt="Top Hat" id="topHatImage" class="topHatImage">Toppat</span></h2>
        <p>The sus OS for sus computers is back, and <span class="sussy">even more sussy</span>.</p>
        <p><br><strong>© AmogOS Project</strong> All suspiciousness reserved.</p>
    `;
    const text = createElement('div', ['footer__text', 'footer__subsection'], textContent);

    const linksContainer = createElement('div', ['footer__links', 'footer__subsection']);
    linksContainer.appendChild(createElement('h2', [], 'Links'));
    links.forEach(link => linksContainer.appendChild(createLink(link)));

    const social = createElement('div', ['footer__social', 'footer__subsection']);
    social.appendChild(createElement('h2', [], 'Social'));
    const discordLink = createLink({ href: 'https://discord.gg/z86muknm9y', id: 'discord', name: 'Join the Discord' });
    const githubLink = createLink({ href: 'https://github.com/amog-os', id: '', name: 'AmogOS GitHub' });
    social.appendChild(discordLink);
    social.appendChild(githubLink);

    footer.append(text, linksContainer, social);
    document.body.appendChild(footer);
}

navConstructor();
footerConstructor();