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

// Tab Masking (ty chatgpt <3)


// About:Blank Cloak


// Panic Button (ty chatgpt <3)
document.addEventListener("DOMContentLoaded", function () {
  let panicKey = null;
  const setPanicKeyButton = document.querySelector(".panic-button");
  const displayPanicKey = document.querySelector(".panic-key-display");
  const storedSavedKey = localStorage.getItem("savedKey");
  const redirectURL = "https://www.google.com";

  if (storedSavedKey != null) {
    displayPanicKey.textContent = `Current Panic Key: ${storedSavedKey}`;
  }

  function setPanicKey() {
    setPanicKeyButton.textContent = "Recording... Press a Key";
    document.removeEventListener("keyup", recordPanicKey);
    document.addEventListener("keyup", recordPanicKey);
  }
  function recordPanicKey(event) {
    const key = event.key.toUpperCase();
    panicKey = event.code;
    displayPanicKey.textContent = `Current Panic Key: ${key}`;
    setPanicKeyButton.textContent = "Change Panic Key";
    document.removeEventListener("keyup", recordPanicKey);

    localStorage.setItem("savedKey", key);
  }

  setPanicKeyButton.addEventListener("click", setPanicKey);

  document.addEventListener("keydown", (event) => {
    if (storedSavedKey && event.code === storedSavedKey) {  
        window.location.href = redirectURL;
    }
});
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
