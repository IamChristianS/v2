localStorage.getItem("theme");
localStorage.setItem("theme", newTheme);

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }
    
    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

const button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    document.querySelector("html").setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
});