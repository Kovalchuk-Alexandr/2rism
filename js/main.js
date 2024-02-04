customSelect("select"); //Вызов custom Select

// Календарь
const picker = new easepick.create({
    lang: "ru-Ru",
    element: document.getElementById("calendar"),
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
        // "../libs/easepick/customize_sample.css",
        "https://easepick.com/css/customize_sample.css",
    ],
    format: "DD.MM.YYYY",
});

/*  Subscribe label  */
const inputSubscribe = document.querySelector(".subscribe__input");
const label = document.querySelector(".subscribe__label");

inputSubscribe.addEventListener("input", () => {
    if (inputSubscribe.value.trim() !== "") {
        label.classList.add("subscribe__label--top");
    } else {
        label.classList.remove("subscribe__label--top");
    }
});

/* ===================== MOBILE NAV =======================*/
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const fade = document.querySelector(".mobile-nav-fade");

const navLink = document.querySelectorAll(".nav-list__link");

mobileNavButton.addEventListener("click", () => {
    // mobileNav.classList.toggle("active");
    mobileNav.classList.toggle("mobile-nav--open");
    fade.classList.toggle("mobile-nav-fade--open");
    mobileNavIcon.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

fade.onclick = function () {
    mobileNav.classList.toggle("mobile-nav--open");
    fade.classList.toggle("mobile-nav-fade--open");
    mobileNavIcon.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
};

// Устанавливаем активный пункт меню по клику
let isActive;

for (const item of navLink) {
    item.onclick = function () {
        for (const el of navLink) {
            el.classList.remove("nav-list__link--active");
        }

        item.classList.add("nav-list__link--active");
    };
}
