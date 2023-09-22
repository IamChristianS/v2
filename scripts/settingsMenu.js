var settingsDiv = document.querySelector('settings');

function toggleSettings() {
    if (settingsDiv.classList.contains('settings-animate')) {
        settingsDiv.classList.remove("settings-animate");
    } else {
        settingsDiv.classList.add("settings-animate");
    }
}