const button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
  // Update Theme Attribute on HTML
  document.querySelector("html").setAttribute("data-theme", newTheme);

  // Update Local Storage (Cookies)
  localStorage.setItem("theme", newTheme);

  // Update Theme Settings in Memory
  currentThemeSetting = newTheme;
});