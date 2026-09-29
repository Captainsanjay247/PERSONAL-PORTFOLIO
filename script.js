/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* =========================================================
   NAVBAR SHADOW
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 35px rgba(15, 23, 42, 0.06)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.style.color = "#635bff";

        }

    });

});



/* =========================================================
   PROJECT CARD 3D HOVER
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y - rect.height / 2) /
                rect.height) * -2;

        const rotateY =
            ((x - rect.width / 2) /
                rect.width) * 2;

        card.style.transform =
            `translateY(-8px)
             perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



/* =========================================================
   3D SANJAY CHARACTER MOUSE MOVEMENT
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");

const characterImage =
    document.querySelector(".character-image");


if (heroVisual && characterImage) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const rotateY =
                ((x - rect.width / 2) /
                    rect.width) * 5;


            const rotateX =
                ((y - rect.height / 2) /
                    rect.height) * -5;


            characterImage.style.transform =
                `translateY(-8px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.015)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            characterImage.style.transform = "";

        }
    );

}



/* =========================================================
   BUTTON RIPPLE / CLICK EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform =
            "scale(0.97)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});
