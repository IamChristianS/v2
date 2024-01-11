//////////////////////////////////////////////////
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

// Tab Masking (I wrote half of this at 3am, so only god knows how this works now)
function updateTitle() {
  const title = document.getElementById('tabNameInput').value;
  document.title = title;
  localStorage.setItem('tabTitle', title);
}

function updateFavicon() {
  const faviconUrl = document.getElementById('faviconInput').value;
  const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = faviconUrl;
  document.head.appendChild(favicon);
  localStorage.setItem('faviconUrl', faviconUrl);
}

function applyPreset(presetButton) {
  const presetName = presetButton.getAttribute('data-name');
  const presetFaviconUrl = presetButton.getAttribute('data-favicon');

  document.title = presetName;
  document.getElementById('tabNameInput').value = presetName;
  localStorage.setItem('tabTitle', presetName);

  const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = presetFaviconUrl;
  document.head.appendChild(favicon);
  document.getElementById('faviconInput').value = presetFaviconUrl;
  localStorage.setItem('faviconUrl', presetFaviconUrl);
}

function addPreset() {
  const title = document.getElementById('tabNameInput').value;
  const favicon = document.getElementById('faviconInput').value;
  const presetTxt = document.getElementById("presetTitle");
  const presetImg = document.getElementById("presetFavicon");
  const presetBtn = document.getElementById("presetBtn");
  
  if (title != '' && favicon != '' && presetBtn.innerText != "Remove Custom Preset") {
    localStorage.setItem('presetTabTitle', title);
    localStorage.setItem('presetFaviconUrl', favicon);
    presetTxt.innerText = title;
    presetImg.src = favicon;
    presetImg.width = 200;
    presetImg.style.padding = ".5vw"
    presetBtn.innerText = "Remove Custom Preset"
  } else {
    localStorage.removeItem('presetTabTitle');
    localStorage.removeItem('presetFaviconUrl');

    presetTxt.innerText = "Custom Preset";
    presetImg.src = "https://i.ibb.co/VjNwzxv/custom-Preset.png";
    presetBtn.innerText = "Add Custom Preset"
  }
}
function usePreset() {
  const savedPresetTitle = localStorage.getItem('presetTabTitle');
  const savedPresetFavicon = localStorage.getItem('presetFaviconUrl');
  if (savedPresetTitle && savedPresetFavicon) {
    document.title = savedPresetTitle;
    document.getElementById('tabNameInput').value = savedPresetTitle;
    localStorage.setItem('tabTitle', savedPresetTitle);

    const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = savedPresetFavicon;
    document.head.appendChild(favicon);
    document.getElementById('faviconInput').value = savedPresetFavicon;
    localStorage.setItem('faviconUrl', savedPresetFavicon);
  }
}

function resetMasking() {
  localStorage.removeItem('tabTitle');
  localStorage.removeItem('faviconUrl');

  location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
  const savedTitle = localStorage.getItem('tabTitle');
  const savedFaviconUrl = localStorage.getItem('faviconUrl');
  const savedPresetTitle = localStorage.getItem('presetTabTitle');
  const savedPresetFavicon = localStorage.getItem('presetFaviconUrl');

  if (savedTitle) {
    document.title = savedTitle;
    document.getElementById('tabNameInput').value = savedTitle;
  }
  if (savedFaviconUrl) {
    const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = savedFaviconUrl;
    document.head.appendChild(favicon);
    document.getElementById('faviconInput').value = savedFaviconUrl;
  }

  if (savedPresetTitle && savedPresetFavicon) {
    const presetTxt = document.getElementById("presetTitle");
    const presetImg = document.getElementById("presetFavicon");
    const presetBtn = document.getElementById("presetBtn");

    presetTxt.innerText = savedPresetTitle;
    presetImg.src = savedPresetFavicon;
    presetImg.width = 200;
    presetImg.style.padding = ".5vw"
    presetBtn.innerText = "Remove Custom Preset"
  }
});

// About:Blank Cloak
function toggleABCloak(url) {
  var win = window.open('', '_blank', 'menubar=no,toolbar=no,location=no,status=no')
  var iframe = win.document.createElement('iframe')
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url
  win.document.body.appendChild(iframe)
}

// Credits (ty stackoverflow user <3)
let creditsDropped = false

function toggleCredits() {
  const creditsDropdown = document.getElementById("credits-expand");
  var creditsArrows = document.querySelectorAll('.settings-btn i');
  if (creditsDropped) {
    creditsDropdown.style.display = "none";
    creditsDropped = false;
    for (var i = 0; i < creditsArrows.length; i++) {
      creditsArrows[i].classList.remove("fa-angles-up");
      creditsArrows[i].classList.add("fa-angles-down");
    }
  } else {
    creditsDropdown.style.display = "block";
    creditsDropped = true;
    for (var i = 0; i < creditsArrows.length; i++) {
      creditsArrows[i].classList.remove("fa-angles-down");
      creditsArrows[i].classList.add("fa-angles-up");
    }
  }
}
//////////////////////////////////////////////////
// Theme Changer
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);
}
//////////////////////////////////////////////////
// Language Selector
let translateOpen = false

function toggleTranslate() {
  const translateMenu = document.getElementById("translate");
  if (translateOpen) {
    translateMenu.style.display = "none";
    translateOpen = false;
  } else {
    translateMenu.style.display = "block";
    translateOpen = true;
  }
}
//////////////////////////////////////////////////
// Mobile
let navOpen = false

function toggleMobileNav() {
    const navOut = document.getElementById("mobile-nav-out");
    const navBtn = document.getElementById("mobile-open-nav");
    var navLink = document.querySelectorAll('.mobile-nav-link');
    if (navOpen) {
        navOut.style.display = "none";
        navOpen = false;
        document.body.style.overflowY = "auto";
        navBtn.style.scale = "100%";
        for (var i = 0; i < navLink.length; i++) {
          navLink[i].style.display = "none";
        }
    } else {
        navOut.style.display = "block";
        navOpen = true;
        window.scrollTo(0,0);
        document.body.style.overflowY = "hidden";
        navBtn.style.scale = "115%";
        for (var i = 0; i < navLink.length; i++) {
          navLink[i].style.display = "block";
        }
    }
}