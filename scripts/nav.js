var navbar = `
        <header class="nav">
            <a href="index.html" class="nav-title">Project-<span>Hub</span></a>

            <div class="nav-links">
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.location.href='index.html'">Home</a>
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.location.href='games.html'">Games</a>
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.location.href='apps.html'">Apps</a>
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.location.href='proxies.html'">Proxies</a>
                <a class="animate__animated animate__fadeInDown"
                    onclick="window.open('https://github.com/IamChristianS/v2')">GitHub</a>
            </div>

            <div class="nav-tools">
                <!--
                <i class="fa-solid fa-globe" onclick="toggleTranslate()"></i>
                -->
                <i class="fa-solid fa-circle-half-stroke" onclick="toggleTheme()"></i>
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
                    onclick="window.location.href='proxies.html'">Proxies</a>
                <a class="animate__animated animate__fadeInDown mobile-nav-link"
                    onclick="window.open('https://github.com/IamChristianS/v2')">GitHub</a>
                <div class="mobile-out-tools">
                    <!--
                    <i class="fa-solid fa-globe" onclick="toggleTranslate()"></i>
                    -->
                    <i class="fa-solid fa-circle-half-stroke" onclick="toggleTheme()"></i>
                    <!--
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
                    <button onclick="updateTitle()">Submit</button>
                </div>
                <div class="favicon-masking">
                    <input type="text" placeholder="Enter Image Link..." id="faviconInput" aria-label="https://example.com/image.png">
                    <button onclick="updateFavicon()">Submit</button>
                </div>

                <button class="settings-btn" id="presetBtn" onclick="addPreset()">Add Custom Preset</button>
                <button class="settings-btn" onclick="resetMasking()">Reset</button>

                <h3>Tab Presets:</h3>
                <div class="settings-presets">
                    <div class="presets-btn" data-name="Dashboard" data-favicon="https://i.ibb.co/c8DTXVm/canvas-Favicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/canvas.png" alt="">
                        <p>Canvas</p>
                    </div>
                    <div class="presets-btn" data-name="Google" data-favicon="https://i.ibb.co/zHRG2fB/google-Favicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/google.png" alt="">
                        <p>Google</p>
                    </div>
                    <div class="presets-btn" data-name="Inbox - Gmail" data-favicon="https://i.ibb.co/g7fpQkC/gmail-Favicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/gmail.png" alt="">
                        <p>Gmail</p>
                    </div>
                    <div class="presets-btn" data-name="Google Drive" data-favicon="https://i.ibb.co/SwLGW4x/google-Drive-Favicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/googleDrive.png" alt="">
                        <p>Drive</p>
                    </div>
                    <div class="presets-btn" data-name="TurnItIn" data-favicon="https://i.ibb.co/T0Lwytc/turnitin-Favicon.png" onclick="applyPreset(this)">
                        <img src="img/presets/turnitin.png" alt="">
                        <p>TurnItIn</p>
                    </div>
                    <div onclick="usePreset()">
                        <img id="presetFavicon" src="img/presets/customPreset.png" alt="">
                        <p id="presetTitle">Custom Preset</p>
                    </div>
                </div><hr>

                <h3>About:Blank Cloaking</h3>
                <button class="settings-btn" style="margin:.25vw auto" onclick="toggleABCloak('https://IamChristianS.github.io')">Enable</button><hr>

                <h3>Panic Button</h3>
                <button id="recordPanic" class="settings-btn" style="display:inline;margin:0;">Press to Record Key...</button>
                <button id="resetPanic" class="settings-btn" style="display:inline;width:15%;margin:0;">Reset</button>
                <p class="panic-key-display">Current Panic Key: Not Set</p><hr>

                <button class="settings-btn" onclick="toggleCredits()"><i class="fa-solid fa-angles-down"></i>Credits<i class="fa-solid fa-angles-down"></i></button>
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
        </div>`;

document.body.insertAdjacentHTML("afterbegin", navbar);