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

// Tab Masking
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

window.onload = function () {
  const savedTitle = localStorage.getItem('tabTitle');
  const savedFaviconUrl = localStorage.getItem('faviconUrl');

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
};

// About:Blank Cloak


// Panic Button (ty chatgpt <3)
document.addEventListener("DOMContentLoaded", function () {
  const setPanicKeyButton = document.querySelector(".panic-button");
  const resetPanicKeyButton = document.querySelector(".panic-reset-button");
  const displayPanicKey = document.querySelector(".panic-key-display");
  let storedSavedKey = localStorage.getItem("savedKey");
  let panicKey = null;
  const redirectURL = "https://www.google.com";

  const keyNameMapping = { // I hate this (ty chatgpt for speeding this long a** process up)
    KeyA: "A", KeyB: "B", KeyC: "C", KeyD: "D", KeyE: "E", KeyF: "F", KeyG: "G", KeyH: "H", KeyI: "I", KeyJ: "J", KeyK: "K", KeyL: "L", KeyM: "M", KeyN: "N", KeyO: "O", KeyP: "P", KeyQ: "Q", KeyR: "R", KeyS: "S", KeyT: "T", KeyU: "U", KeyV: "V", KeyW: "W", KeyX: "X", KeyY: "Y", KeyZ: "Z", 

    Digit0: "0", Digit1: "1", Digit2: "2", Digit3: "3", Digit4: "4", Digit5: "5", Digit6: "6", Digit7: "7", Digit8: "8", Digit9: "9", 

    F1: "F1", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", F10: "F10", F11: "F11", F12: "F12", F13: "F13", F14: "F14", F15: "F15", F16: "F16", F17: "F17", F18: "F18", F19: "F19", F20: "F20", F21: "F21", F22: "F22", F23: "F23", F24: "F24", 

    Space: "Space", Enter: "Enter", Tab: "Tab", Backspace: "Backspace", Escape: "Escape", Delete: "Delete", CapsLock: "Caps Lock", ShiftLeft: "Left Shift", ShiftRight: "Right Shift", ControlLeft: "Left Ctrl", ControlRight: "Right Ctrl", AltLeft: "Left Alt", AltRight: "Right Alt", ArrowUp: "Up Arrow", ArrowDown: "Down Arrow", ArrowLeft: "Left Arrow", ArrowRight: "Right Arrow", 

    Numpad0: "Numpad 0", Numpad1: "Numpad 1", Numpad2: "Numpad 2", Numpad3: "Numpad 3", Numpad4: "Numpad 4", Numpad5: "Numpad 5", Numpad6: "Numpad 6", Numpad7: "Numpad 7", Numpad8: "Numpad 8", Numpad9: "Numpad 9", NumpadAdd: "Numpad +", NumpadSubtract: "Numpad -", NumpadMultiply: "Numpad *", NumpadDivide: "Numpad /", NumpadEnter: "Numpad Enter", NumpadDecimal: "Numpad .", 

    ArrowUp: "Up Arrow", ArrowDown: "Down Arrow", ArrowLeft: "Left Arrow", ArrowRight: "Right Arrow", 

    ShiftLeft: "Left Shift", ShiftRight: "Right Shift", ControlLeft: "Left Ctrl", ControlRight: "Right Ctrl", AltLeft: "Left Alt", AltRight: "Right Alt", 
    // If you use these,  I don't trust you
    Home: "Home", End: "End", PageUp: "Page Up", PageDown: "Page Down", Insert: "Insert", Delete: "Delete", PrintScreen: "Print Screen", ScrollLock: "Scroll Lock", Pause: "Pause/Break", 
    // Same goes for these
    MediaPlay: "Play", MediaPause: "Pause", MediaStop: "Stop", MediaNextTrack: "Next Track", MediaPrevTrack: "Previous Track", MediaFastForward: "Fast Forward", MediaRewind: "Rewind", MediaEject: "Eject", 
  };
  function getKeyDisplayName(code) {
    return keyNameMapping[code] || code;
  }

  function setPanicKey() {
    setPanicKeyButton.textContent = "Recording... Press a Key";
    document.removeEventListener("keyup", recordPanicKey);
    document.addEventListener("keyup", recordPanicKey);
  }
  function recordPanicKey(event) {
    let key = event.key.toUpperCase();
    panicKey = event.code;
    localStorage.setItem("savedKey", panicKey);
    storedSavedKey = panicKey;
    key = getKeyDisplayName(panicKey);

    displayPanicKey.textContent = `Current Panic Key: ${key}`;
    setPanicKeyButton.textContent = "Change Panic Key";

    document.removeEventListener("keyup", recordPanicKey);
    updateEventListener();
  }

  document.addEventListener("click", function () {
    if (!settingsOpen) {
      document.removeEventListener("keyup", recordPanicKey);
    setPanicKeyButton.textContent = "Press to Record Key...";
    }
  });
  resetPanicKeyButton.addEventListener("click", function () {
    document.removeEventListener("keyup", recordPanicKey);
    localStorage.removeItem("savedKey");
    storedSavedKey = null;
    setPanicKeyButton.textContent = "Press to Record Key...";
    displayPanicKey.textContent = `Current Panic Key: Not Set`;
  });

  function updateEventListener() {
    document.removeEventListener("keydown", checkPanicKey);
    document.addEventListener("keydown", checkPanicKey);
  }
  function checkPanicKey(event) {
    if (storedSavedKey && event.code === storedSavedKey) {  
      window.location.href = redirectURL;
    }
  }
  updateEventListener();
  if (storedSavedKey != null) {
    const displayName = getKeyDisplayName(storedSavedKey);
    displayPanicKey.textContent = `Current Panic Key: ${displayName}`;
    setPanicKeyButton.textContent = "Change Panic Key";
  }
  setPanicKeyButton.addEventListener("click", setPanicKey);
});

// Credits (ty stackoverflow user <3)
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
//////////////////////////////////////////////////
// Theme Changer (ty chatgpt <3)
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
