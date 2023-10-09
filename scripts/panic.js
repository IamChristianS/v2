const redirectURL = "https://www.google.com";

document.addEventListener("keydown", (event) => {
    if (event.code === localStorage.getItem("savedKey")) {  
        window.location.href = redirectURL;
    }
});