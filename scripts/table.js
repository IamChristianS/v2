// ty to a random github user for some of the code on this one
// in case yall cant tell, my ass is NOT fluent in JS
const cdn = 'https://iamchristians.github.io/assets/';
async function addRandomGames() {
	try {
		const games = await (await fetch(cdn + 'list_games.json')).json();
		games.sort((a, b) => a.gameName.localeCompare(b.gameName));

		for (let i = games.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[games[i], games[j]] = [games[j], games[i]];
		}
		const randomGames = games.splice(0, 3);

		for (const game of randomGames) {
			const tab = document.createElement('div');
			tab.className = 'random-game';
			tab.innerHTML = `
                <img src="${cdn}img/games/${game.gameName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.png" loading="lazy" onerror="this.src='img/placeholder.png'">
                <h2>${game.gameName}</h2>
            `;

			tab.addEventListener('click', () => {
				localStorage.setItem('srcGame', `${cdn}${game.gameIndex}`);
				window.location.href = 'player.html';
			});

			document.getElementById('random').appendChild(tab);
		}
	} catch (error) {
		console.error('RANDOM GAMES ERROR:' + error);
	}
}

async function addGames() {
	try {
		const games = await (await fetch(cdn + 'list_games.json')).json();
		games.sort((a, b) => a.gameName.localeCompare(b.gameName));

		for (const game of games) {
			const tab = document.createElement('div');

			tab.className = 'table-tab';
			tab.innerHTML = `
                <img src="${cdn}img/games/${game.gameName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.png" loading="lazy" onerror="this.src='img/placeholder.png'">
                <h2>${game.gameName}</h2>
            `;
			/*
			let popular = '${game.popular}';
			if (popular == 'true') {
				tab.innerHTML = `
                    <span>HOT</span>
                    <img src="${cdn}img/games/${game.gameName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.png" loading="lazy" onerror="this.src='img/placeholder.png'">
                    <h2>${game.gameName}</h2>
                `;
			} else {
				tab.innerHTML = `
                    <img src="${cdn}img/games/${game.gameName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.png" loading="lazy" onerror="this.src='img/placeholder.png'">
                    <h2>${game.gameName}</h2>
                `;
			}
            */

			tab.addEventListener('click', () => {
				localStorage.setItem('srcGame', `${cdn}${game.gameIndex}`);
				window.open('player.html', '_blank');
			});

			document.getElementById('table').appendChild(tab);
		}
	} catch (error) {
		console.error('GAMES ERROR:' + error);
	}
}

async function addApps() {
	try {
		const apps = await (await fetch(cdn + 'list_apps.json')).json();
		apps.sort((a, b) => a.appName.localeCompare(b.appName));

		for (const app of apps) {
			const tab = document.createElement('div');
			tab.className = 'table-tab';
			tab.innerHTML = `
                <img src="${cdn}img/apps/${app.appName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.png" loading="lazy" onerror="this.src='img/placeholder.png'">
                <h2>${app.appName}</h2>
            `;

			tab.addEventListener('click', () => {
				localStorage.setItem('srcApp', `${cdn}${app.appIndex}`);
				window.open('player.html', '_blank');
			});

			document.getElementById('table').appendChild(tab);
		}
	} catch (error) {
		console.error('APPS ERROR:' + error);
	}
}
