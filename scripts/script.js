// Settings Menu
var settingsMenu = document.getElementById("settings")

function settingsOpen() {
    settingsMenu.style.width = "40vw";
    settingsMenu.style.padding = "2vw";
    settingsMenu.style.right = "0";
}

function toggleSettings() {
    if (settingsMenu.style.width == "40vw") {
        settingsMenu.style.width = "0";
        settingsMenu.style.padding = "0";
        settingsMenu.style.right = "0";
    } else {
        settingsMenu.style.width = "40vw";
        settingsMenu.style.padding = "2vw";
        settingsMenu.style.right = "0";
    }
}

// Theme Changer