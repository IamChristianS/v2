// Settings Menu
let settingsOpen = false

function toggleSettings() {
  const settingsModal = document.getElementById("settings-modal");
  if (settingsOpen) {
    settingsModal.style.display = "none";
    settingsOpen = false;
  } else {
    settingsModal.style.display = "block";
    settingsOpen = true;
  }
}

document.addEventListener('click', function(event) {
  const settingsModal = document.getElementById("settings-modal");
  const settingsMenu = document.getElementById("settings");
  if (settingsModal.contains(event.target) && !settingsMenu.contains(event.target)) {
    toggleSettings()
  }
});

// Credits
let creditsDropped = false

function toggleCredits() {
  const creditsDropdown = document.getElementById("credits-expand");
  if (creditsDropped) {
    creditsDropdown.style.display = "none";
    creditsDropped = false;
  } else {
    creditsDropdown.style.display = "block";
    creditsDropped = true;
  }
}

// Theme Changer


// About:Blank Cloak


