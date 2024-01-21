// ty to a random github user for most of the code on this one
// in case yall cant tell, my ass is NOT fluent in JS
async function addGames() {
    try {
        const cdn = "https://unbl0ck.github.io/assets/";
        const games = await (await fetch(cdn + "list_games.json")).json();
        games.sort((a, b) => a.gameName.localeCompare(b.gameName));

        for (const game of games) {
            const tab = document.createElement("div");
            tab.className = "games-tab";
            tab.innerHTML = `
                <img src="${cdn}img/games/${game.gameName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.png" loading="lazy" onerror="this.src='../img/games/placeholder.png'">
                <h2>${game.gameName}</h2>
            `;

            tab.addEventListener('click', () => {
                localStorage.setItem('srcGame', `${cdn}${game.gameIndex}`);
                window.location.href = 'player.html';
            });

            document.getElementById("games").appendChild(tab);
        }
    } catch (error) {
        console.error(error);
    }
}

addGames();