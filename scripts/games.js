// ty to a random github user for this one
// in case yall cant tell, my ass is NOT fluent in JS
const Frame = document.querySelector(".games");

async function addGames() {
    try {
        const cdn = await (await fetch("CDN.json")).json();
        const games = await (await fetch(cdn + "list_games.json")).json();
        games.sort((a, b) => a.game.localeCompare(b.game));

        for (const game of games) {
            const tab = document.createElement("div");
            tab.className = "games-tab";
            tab.onclick = "window.location.href='${cdn}${game.gameroot}','_blank'"; // Only for Testing
            tab.innerHTML = `<img src="${cdn}Icons/${game.game.replace(/[.\s]/g, "")}.png"><h2>${game.game}</h2>`;
            document.querySelector(".games").appendChild(tab);
        }
    } catch (error) {
        console.error(error);
    }
}