let navOpen = false

function toggleMobileNav() {
    const navOut = document.getElementById("mobile-nav-out");
    const navBtn = document.getElementById("mobile-open-nav");
    if (navOpen) {
        navOut.style.display = "none";
        navOpen = false;
        document.body.style.overflowY = "auto";
        navBtn.style.scale = "100%";
    } else {
        navOut.style.display = "block";
        navOpen = true;
        window.scrollTo(0,0);
        document.body.style.overflowY = "hidden";
        navBtn.style.scale = "115%";
    }
}