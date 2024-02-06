var footer = `
        <footer>
            <div class="footer">
                <div class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="games.html">Games</a></li>
                    <li><a href="apps.html">Apps</a></li>
                    <li><a href="https://github.com/IamChristianS/v2" target="_blank">GitHub</a></li>
                </div>
                <div class="footer-description">
                    <p>Welcome to Version 2 of Project-Hub; the brand-new and improved version of the first version, which you can visit here: <a href="https://unbl0ck.github.io" target="_blank">https://unbl0ck.github.io</a>! Much effort was put into making this site the best one-stop-shop for any unblocked game content. For example, one notable mention will be the proxy services, which will allow you to fully bypass any wi-fi restriction. Not only that, but we have made cloaking your activity much safer with About:Blank Cloaking, and new presets for masking your tab to make it appear like an appropriate site. There are also many ways where the community can pitch in their own ideas for the site. One of the many ways include clicking the contact button in the bottom-right, but you can also submit an issue on the GitHub repo, or email me at: <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=project.hub.games@gmail.com&tf=1" target="_blank">project.hub.games@gmail.com</a>.</p>
                </div>
            </div> 
            <br><hr><br>
            <div class="footer-policies">
                <a href="tos.html">Terms of Service</a>
                <a href="cookies.html">Cookie Policy</a>
                <a href="https://github.com/IamChristianS/v2/blob/main/LICENSE" target="_blank">Site License</a>
            </div>
            <div class="footer-disclaimer">
                <p>This site should not be used in environments where it is disallowed. By using this site, you agree that you are in a location that allows its usage, and any discretion is up to the user.</p>
                <p>Christian Santangelo ©</p>
            </div>
        </footer>`;
document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML("beforeend", footer);
});