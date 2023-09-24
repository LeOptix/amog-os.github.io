/**
 * @fileOverview Constructs repeated elements such as the header and footer.
 */

/**
 * @name navConstructor
 */

function navConstructor() {

    /*
    <nav>
        <a href="/index.html">Home</a>
        <a href="#story">The story of AmogOS</a>
        <a href="#credits">Credits</a>
    </nav>
     */

    const links = [ { href: `/index.html`, name: `Home`, id: `home` } ]

    // find every section with an id
    const sections = document.querySelectorAll(`section[id]`);
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const link = {
            href: `#${section.id}`,
            name: section.id.charAt(0).toUpperCase() + section.id.slice(1).replace(/-/g, ` `),
            id: section.id
        }
        links.push(link);
    }


    const nav = document.createElement(`nav`);

    for (let i = 0; i < links.length; i++) {
        const link = document.createElement(`a`);
        link.href = links[i].href;
        link.innerText = links[i].name;
        link.id = links[i].id;
        nav.appendChild(link);
    }

    document.body.prepend(nav);

}

function footerConstructor() {


    /*
    <footer>
    <h4>&copy; AmogOS Project | All auspiciousness reserved</h4>
    <p><a href="credits.html">Our story, team and acknowledgment</a></p>
</footer>
     */

    const footer = document.createElement(`footer`);

    const h4 = document.createElement(`h4`);
    h4.innerHTML = `<b>© AmogOS Project</b> | All auspiciousness reserved`;
    footer.appendChild(h4);

    const p = document.createElement(`p`);
    const a = document.createElement(`a`);
    a.href = `credits.html`;
    a.innerText = `Our story, team and acknowledgment`;

    p.appendChild(a);
    footer.appendChild(p);
    document.body.appendChild(footer);

}

navConstructor();
footerConstructor();