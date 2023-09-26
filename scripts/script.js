// Settings Menu
var settingsMenu = document.getElementById("settings-modal");

function toggleSettings() {
  if (settingsMenu.style.display = "block") {
    settingsMenu.style.display = "none";
  } else {
    settingsMenu.style.display = "block";
  }
}

window.onclick = function(event) {
  if (event.target == settingsMenu) {
    settingsMenu.style.display = "none";
  }
}

// Theme Changer


// About:Blank Cloaking


