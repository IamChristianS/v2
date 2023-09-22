// Settings Menu
//function toggleSettings() {
//    document.querySelector('settings').classList.toggle("settings-animate");
//}

function toggleSettings() {
    this.__toggle = !this.__toggle;
    var target = document.getElementById('settings');
    if( this.__toggle) {
        target.style.width = target.scrollWidth+"px";
    }
    else {
        target.style.width = 0;
    }
}

// Theme Changer