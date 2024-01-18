const Frame = document.querySelector(".Projects-Frame");

async function addGames() {
    try {
        const cdn = await (await fetch("./Hosting/CDN.json")).json();
        const games = await (await fetch(cdn + "list.json")).json();
        games.sort((a, b) => a.game.localeCompare(b.game));

        for (const game of games) {
        const project = document.createElement("div");
        project.className = "Projects-Project";
        project.innerHTML = `<img src="${cdn}Icons/${game.game.replace(/[.\s]/g, "")}.png" loading="lazy" onerror="this.src='./Assests/Imgs/NoIcon.png'"><h1>${game.game}</h1>`;
        document.querySelector(".Projects-Container").appendChild(project);

        project.addEventListener("click", () => {
            HAF.forEach((element) => element.classList.add("hidden"));
            Frame.classList.remove("hidden");
            IFrame.src = `${cdn}${game.gameroot}`;
        });
        }
    } catch (error) {
        console.error(error);
    }
}