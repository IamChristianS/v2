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
  var creditsArrows = document.querySelectorAll('.credits-button i');
  if (creditsDropped) {
    creditsDropdown.style.display = "none";
    creditsDropped = false;
    for (var i=0; i<creditsArrows.length; i++) {
      creditsArrows[i].style.transform = "translate(0,-15%)"
      creditsArrows[i].classList.remove("fa-angles-up");
      creditsArrows[i].classList.add("fa-angles-down");
    }
  } else {
    creditsDropdown.style.display = "block";
    creditsDropped = true;
    for (var i=0; i<creditsArrows.length; i++) {
      creditsArrows[i].style.transform = "translate(0,0)"
      creditsArrows[i].classList.remove("fa-angles-down");
      creditsArrows[i].classList.add("fa-angles-up");
    }
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

// Tab Masking
function updateTitle() {
  const newTitle = document.getElementById('tabNameInput').value;
  document.title = newTitle;
}

function updateFavicon() {
  const faviconInput = document.getElementById('faviconInput');
  const faviconFileInput = document.getElementById('faviconFileInput');
  const favicon = document.getElementById('favicon');

  if (faviconFileInput.files.length > 0) {
      const file = faviconFileInput.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
          favicon.href = event.target.result;
      };
      reader.readAsDataURL(file);

      faviconInput.value = '';
  } else if (faviconInput.value.trim() !== '') {
      favicon.href = faviconInput.value;
  }
}

function loadPreset(presetTitle, presetFaviconUrl) {
  document.title = presetTitle;
  const favicon = document.getElementById('favicon');
  favicon.href = presetFaviconUrl;
}

function customPresetPopup() {
  const customPresetTitle = prompt('Enter Custom Preset Title:');
  if (customPresetTitle === null || customPresetTitle.trim() === '') {
      return;
  }
  const customPresetFavicon = prompt('Enter Custom Preset Favicon URL:');
  if (customPresetFavicon === null || customPresetFavicon.trim() === '') {
      return;
  }

  const customPreset = {
      title: customPresetTitle,
      favicon: customPresetFavicon
  };
  localStorage.setItem('customPreset', JSON.stringify(customPreset));

  const presetContainer = document.getElementById('presetContainer');
  const customPresetElement = document.createElement('div');
  customPresetElement.innerHTML = `
      <img src="${customPreset.favicon}" onclick="loadPreset('${customPreset.title}', '${customPreset.favicon}')">
      <p>${customPreset.title}</p>
  `;
  presetContainer.appendChild(customPresetElement);
}