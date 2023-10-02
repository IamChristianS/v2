// Settings Menu
let settingsOpen = false

function toggleSettings() {
  const settingsModal = document.getElementById("settings-modal");
  if (settingsOpen) {
    settingsModal.style.display = "none";
    settingsOpen = false;
    document.body.style.overflowY = "auto";
  } else {
    settingsModal.style.display = "block";
    settingsOpen = true;
    document.body.style.overflowY = "hidden";
    window.scrollTo(0, 0);
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

// Theme Changer (ty chatgpt <3)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
} else {
    document.documentElement.setAttribute("data-theme", "light");
}

// About:Blank Cloak
