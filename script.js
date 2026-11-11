
// ===============================
// WELCOME MESSAGE
// ===============================

console.log("Welcome to Asmaa's Portfolio! 💜");


// ===============================
// NAVIGATION LINKS
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");


// Highlight active navigation link
function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


// Navigation click
navLinks.forEach(link => {

    link.addEventListener("click", function () {

        console.log("Navigation:", this.textContent);

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

// Add animation styles
const animationStyle = document.createElement("style");

animationStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .reveal.show {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links a.active {
        color: #a78bfa;
    }
`;

document.head.appendChild(animationStyle);


// Select elements to animate
const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


// Observe elements when they appear
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ===============================
// FOOTER YEAR
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Asmaa. All Rights Reserved.`;

}


// ===============================
// LANGUAGE SWITCHER
// ===============================

// ===============================
// FULL WEBSITE LANGUAGE SWITCHER
// ===============================

const languageButton = document.getElementById("language-toggle");

let currentLanguage = "en";

function changeLanguage() {

    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    const elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(element => {
        element.textContent =
            element.getAttribute(`data-${currentLanguage}`);
    });

    languageButton.textContent =
        currentLanguage === "en" ? "AR | EN" : "EN | AR";
}

if (languageButton) {
    languageButton.addEventListener("click", changeLanguage);
}
