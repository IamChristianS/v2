var navbar = `
        <header class="nav">
            <a href="index.html" class="nav-title">Project-<span>Hub</span></a>
            <p id="nav-alpha">ALPHA</p>

            <div class="nav-links">
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.location.href='index.html'">Home</a>
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.location.href='games.html'">Games</a>
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.location.href='apps.html'">Apps</a>
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.open('https://github.com/IamChristianS/v2')">GitHub</a>
            </div>

            <div class="nav-tools">
                <!--
                <i class="fa-solid fa-globe" onclick="toggleTranslate()"></i>
                <i class="fa-solid fa-circle-half-stroke" onclick="toggleTheme()"></i>
                -->
                <i class="fa-solid fa-gear" onclick="toggleSettings()"></i>
            </div>
        </header>
        <!--Translate-->
        <div class="translate" id="translate">
            <button href="index.html"><span class="fi fi-gb"></span>English</button><hr>
            <button href="es/index.html"><span class="fi fi-es"></span>Español</button>
        </div>

        <!--Mobile Nav-->
        <header class="mobile-nav">
            <div class="mobile-nav-top">
                <a href="index.html" class="mobile-nav-title">Project-<span>Hub</span></a>
                <i class="fa-solid fa-bars mobile-open-nav" id="mobile-open-nav" onclick="toggleMobileNav()"></i>
            </div>
            <div class="mobile-nav-out" id="mobile-nav-out">
                <a class="animate__animated animate__fadeInDown mobile-nav-link"
                    onclick="window.location.href='index.html'">Home</a>
                <a class="animate__animated animate__fadeInDown mobile-nav-link"
                    onclick="window.location.href='games.html'">Games</a>
                <a class="animate__animated animate__fadeInDown mobile-nav-link"
                    onclick="window.location.href='apps.html'">Apps</a>
                <a class="animate__animated animate__fadeInDown mobile-nav-link"
                    onclick="window.open('https://github.com/IamChristianS/v2')">GitHub</a>
                <div class="mobile-out-tools">
                    <!--
                    <i class="fa-solid fa-globe" onclick="toggleTranslate()"></i>
                    <i class="fa-solid fa-circle-half-stroke" onclick="toggleTheme()"></i>
                    <i class="fa-solid fa-gear" onclick="toggleSettings()"></i>
                    -->
                </div>
            </div>
        </header>

        <!--Settings-->
        <div class="settings-modal" id="settings-modal">
            <div class="settings" id="settings">
                <span class="settings-close" onclick="toggleSettings()">X</span>
                <h2>Settings</h2><hr>

                <h3>Tab Masking</h3>
                <div class="name-masking">
                    <input type="text" placeholder="Enter Tab Name..." id="tabNameInput">
                </div>
                <div class="favicon-masking">
                    <input type="text" placeholder="Enter Image Link..." id="faviconInput" aria-label="https://example.com/image.png">
                </div>
                <div style="width=40%">
                    <button class="white-btn" style="width:20%" onclick="updateFavicon()">Submit</button>
                    <button class="white-btn" style="width:30%" id="presetBtn" onclick="addPreset()">Add Custom Preset</button>
                </div>
                <button class="white-btn" style="width:50%" onclick="resetMasking()">Reset</button>

                <h3>Tab Presets:</h3>
                <div class="settings-presets">
                    <div class="presets-btn" data-name="Dashboard" data-favicon="https://iamchristians.github.io/assets/favicons/canvasFavicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/canvas.png" alt="">
                        <p>Canvas</p>
                    </div>
                    <div class="presets-btn" data-name="Google" data-favicon="https://iamchristians.github.io/assets/favicons/googleFavicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/google.png" alt="">
                        <p>Google</p>
                    </div>
                    <div class="presets-btn" data-name="Inbox - Gmail" data-favicon="https://iamchristians.github.io/assets/favicons/gmailFavicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/gmail.png" alt="">
                        <p>Gmail</p>
                    </div>
                    <div class="presets-btn" data-name="Google Drive" data-favicon="https://iamchristians.github.io/assets/favicons/googleDriveFavicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/googleDrive.png" alt="">
                        <p>Drive</p>
                    </div>
                    <div class="presets-btn" data-name="TurnItIn" data-favicon="https://iamchristians.github.io/assets/favicons/turnitinFavicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/turnitin.png" alt="">
                        <p>TurnItIn</p>
                    </div>
                    <div onclick="usePreset()">
                        <img id="presetFavicon" src="img/presets/customPreset.png" alt="">
                        <p id="presetTitle">Custom Preset</p>
                    </div>
                </div><hr>

                <h3>About:Blank Cloaking</h3>
                <button class="white-btn" style="margin:.5vh auto;width:30%;" onclick="toggleABCloak('https://IamChristianS.github.io/v1')">Enable</button><hr>

                <!--This is being temporarily removed until I can re-fix this.
                <h3>Panic Button</h3>
                <button id="recordPanic" class="white-btn" style="width:30%;display:block;margin:1.5vh auto;">Press to Record Key...</button>
                <button id="resetPanic" class="white-btn" style="width:30%;display:block;margin:1.5vh auto;">Reset</button>
                <p class="panic-key-display">Current Panic Key: Not Set</p><hr>
                -->

                <button class="white-btn" style="width:30%;" onclick="toggleCredits()"><i class="fa-solid fa-angles-down"></i>Credits<i class="fa-solid fa-angles-down"></i></button>
                <div class="credits-expand" id="credits-expand">
                    <p>Ruffle Flash Player - <a href="https://www.ruffle.rs" target="_blank">Ruffle Team</a></p>
                    <p>WAFlash - <a href="https://github.com/vidkidz/waflash" target="_blank">Vidkidz</a></p>
                    <p>IodineGBA - <a href="https://github.com/taisel/IodineGBA" target="_blank">Grant Galitz</a></p>
                    <p>Desmond - NDS Emulator - <a href="https://github.com/js-emulators/desmond" target="_blank">Unknown</a></p>
                    <p>Hover.CSS - <a href="https://github.com/IanLunn/Hover" target="_blank">Ian Lunn</a></p>
                    <p>Animate.CSS - <a href="https://github.com/animate-css/animate.css" target="_blank">Animate.CSS Team</a></p>
                </div>
                <h3>Translations</h3>
                <p>Want to help translate the site? <a href="https://forms.gle/JMiLp9CpqYZWgcDF7" target="_blank">Fill out our form!</a></p>
                <h3>License</h3>
                <p>This site uses the GPL-3.0 License. <a href="https://github.com/IamChristianS/v2/blob/main/LICENSE" target="_blank">Read more on our GitHub page.</a></p>
            </div>
        </div>
        
        <!--Contact-->
        <button id="contact-btn" style="aspect-ratio:1/1;" onclick="toggleContact()"><i class="fa-solid fa-paper-plane"></i></button>
        <div id="contact-expand" style="display:none;">
            <button onclick="window.open('https://forms.gle/aZzEgBhKXLdkXdyx6')" style="transform: translateY(-19.5vh);color: var(--blue-color-dark);">Game Request<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            <button onclick="window.open('https://forms.gle/CMrSGnxrJWjvyBKc9')" style="transform: translateY(-11.5vh);">Contact Form<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>`;
document.addEventListener('DOMContentLoaded', function () {
	document.body.insertAdjacentHTML('afterbegin', navbar);
});

//////////////////////////////////////////////////
// Settings Menu
function toggleSettings() {
	const settingsModal = document.getElementById('settings-modal');
	if (settingsModal.style.display == 'block') {
		settingsModal.style.display = 'none';
		document.body.style.overflowY = 'auto';
	} else {
		settingsModal.style.display = 'block';
		document.body.style.overflowY = 'hidden';
		window.scrollTo(0, 0);
	}
}

document.addEventListener('click', function (event) {
	const settingsModal = document.getElementById('settings-modal');
	const settingsMenu = document.getElementById('settings');
	if (settingsModal.contains(event.target) && !settingsMenu.contains(event.target)) {
		toggleSettings();
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
	const presetTxt = document.getElementById('presetTitle');
	const presetImg = document.getElementById('presetFavicon');
	const presetBtn = document.getElementById('presetBtn');

	if (title != '' && favicon != '' && presetBtn.innerText != 'Remove Custom Preset') {
		localStorage.setItem('presetTabTitle', title);
		localStorage.setItem('presetFaviconUrl', favicon);
		presetTxt.innerText = title;
		presetImg.src = favicon;
		presetImg.width = 200;
		presetImg.style.padding = '.5vw';
		presetBtn.innerText = 'Remove Custom Preset';
	} else {
		localStorage.removeItem('presetTabTitle');
		localStorage.removeItem('presetFaviconUrl');

		presetTxt.innerText = 'Custom Preset';
		presetImg.src = 'https://i.ibb.co/VjNwzxv/custom-Preset.png';
		presetBtn.innerText = 'Add Custom Preset';
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
		const presetTxt = document.getElementById('presetTitle');
		const presetImg = document.getElementById('presetFavicon');
		const presetBtn = document.getElementById('presetBtn');

		presetTxt.innerText = savedPresetTitle;
		presetImg.src = savedPresetFavicon;
		presetImg.width = 200;
		presetImg.style.padding = '.5vw';
		presetBtn.innerText = 'Remove Custom Preset';
	}
});

// About:Blank Cloak
function toggleABCloak(url) {
	var win = window.open('', '_blank', 'menubar=no,toolbar=no,location=no,status=no');
	var iframe = win.document.createElement('iframe');
	iframe.style.width = '100%';
	iframe.style.height = '100%';
	iframe.style.border = 'none';
	iframe.src = url;
	win.document.body.appendChild(iframe);
}

// Credits (ty stackoverflow user <3)
function toggleCredits() {
	const creditsDropdown = document.getElementById('credits-expand');
	var creditsArrows = document.querySelectorAll('.white-btn i');
	if (creditsDropdown.style.display == 'block') {
		creditsDropdown.style.display = 'none';
		for (var i = 0; i < creditsArrows.length; i++) {
			creditsArrows[i].classList.remove('fa-angles-up');
			creditsArrows[i].classList.add('fa-angles-down');
		}
	} else {
		creditsDropdown.style.display = 'block';
		for (var i = 0; i < creditsArrows.length; i++) {
			creditsArrows[i].classList.remove('fa-angles-down');
			creditsArrows[i].classList.add('fa-angles-up');
		}
	}
}
//////////////////////////////////////////////////
// Theme Changer
function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', newTheme);

	localStorage.setItem('theme', newTheme);
}
//////////////////////////////////////////////////
// Language Selector
function toggleTranslate() {
	const translateMenu = document.getElementById('translate');
	if (translateMenu.style.display == 'block') {
		translateMenu.style.display = 'none';
	} else {
		translateMenu.style.display = 'block';
	}
}
//////////////////////////////////////////////////
// Mobile
function toggleMobileNav() {
	const contactBtn = document.getElementById('contact-btn');
	const navOut = document.getElementById('mobile-nav-out');
	const navBtn = document.getElementById('mobile-open-nav');
	var navLink = document.querySelectorAll('.mobile-nav-link');
	if (navOut.style.display == 'block') {
		navOut.style.display = 'none';
		contactBtn.style.display = 'block';
		document.body.style.overflowY = 'auto';
		navBtn.style.scale = '100%';
		for (var i = 0; i < navLink.length; i++) {
			navLink[i].style.display = 'none';
		}
	} else {
		navOut.style.display = 'block';
		contactBtn.style.display = 'none';
		window.scrollTo(0, 0);
		document.body.style.overflowY = 'hidden';
		navBtn.style.scale = '115%';
		for (var i = 0; i < navLink.length; i++) {
			navLink[i].style.display = 'block';
		}
	}
}
//////////////////////////////////////////////////
// Contact
function toggleContact() {
	const contactExpand = document.getElementById('contact-expand');
	if (contactExpand.style.display == 'none') {
		contactExpand.style.display = 'block';
	} else {
		contactExpand.style.display = 'none';
	}
}
