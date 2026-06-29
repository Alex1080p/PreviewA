const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {

        const target = document.querySelector(link.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

        mobileMenu.classList.remove("open");
    });
});

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Vielen Dank! Ihre Anfrage wurde erfasst."
        );

        form.reset();

    });

}