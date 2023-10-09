
const redirectURL = "https://www.google.com";
const storedSavedKey = localStorage.getItem("savedKey");

document.addEventListener("keydown", (event) => {
    if (storedSavedKey && event.code === storedSavedKey) {  
        window.location.href = redirectURL;
    }
});