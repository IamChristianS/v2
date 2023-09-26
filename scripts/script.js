// Settings Menu
var settingsMenu = document.getElementById("settings");

function openSettings() {
  settingsMenu.style.display = "block";
}
function closeSettings() {
  settingsMenu.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == settingsMenu) {
    settingsMenu.style.display = "none";
  }
}

// Theme Changer