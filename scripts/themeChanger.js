const storageKey = 'theme-preference'

const onClick = () => {
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light'

  setPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
}

const theme = {
  value: getColorPreference(),
}

window.onload = () => {
  document.querySelector('#theme-toggle').addEventListener('click', onClick)
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
})