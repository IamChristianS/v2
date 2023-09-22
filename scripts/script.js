// Settings Menu
//function toggleSettings() {
//    document.querySelector('settings').classList.toggle("settings-animate");
//}

function toggleSettings() {
    this.__toggle = !this.__toggle;
    var target = document.getElementById('settings');
    if( this.__toggle) {
        target.style.height = target.scrollHeight+"px";
    }
    else {
        target.style.height = 0;
    }
}

// Theme Changer