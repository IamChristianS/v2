const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
	document.documentElement.setAttribute('data-theme', savedTheme);
} else {
	document.documentElement.setAttribute('data-theme', 'light');
}
