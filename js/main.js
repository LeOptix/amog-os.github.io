/**
 * @fileoverview Main JS file.
 */

/**
 * @description Navbar goes out of the screen when scrolling down and comes back when scrolling up.
 * @param {HTMLElement} navbar - Navbar element.
 */

function navbarScroll(navbar) {

    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) navbar.style.top = "0";
        else navbar.style.top = "-69em";
        prevScrollPos = currentScrollPos;
    }

}


document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav");
    navbarScroll(navbar);
});