// Settings Menu
function toggleSettings() {
    var settingsMenu = document.getElementById("settings")
    
    if (settingsMenu.style.width == "40vw") {
        settingsMenu.style.width = "0";
        settingsMenu.style.padding = "0";
    } else {
        settingsMenu.style.width = "40vw";
        settingsMenu.style.padding = "2vw";
    }
}

// Theme Changer