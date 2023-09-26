// Settings Menu
function openSettings() {
  var settingsMenu = document.getElementById("settings");
  settingsMenu.style.display = "block";
}
function closeSettings() {
  var settingsMenu = document.getElementById("settings");
  settingsMenu.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == settingsMenu) {
    settingsMenu.style.display = "none";
  }
}

// Theme Changer