// target the button using the data attribute we added earlier
const button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  // Update Alt Text
  const newCta = newTheme === "dark" ? "Enable Light Theme" : "Enable Dark Theme";
  button.innerText = newCta;

  button.setAttribute("aria-label", newCta);

  // Update Theme Attribute on HTML
  document.querySelector("html").setAttribute("data-theme", newTheme);

  // Update Local Storage (Cookies)
  localStorage.setItem("theme", newTheme);

  // Update Theme Settings in Memory
  currentThemeSetting = newTheme;
});