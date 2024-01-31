function changeThemeCssVariables(themeName) {
  const darkTheme = {
    'background-color': 'hsl(230, 17%, 14%)',
    'text-color': 'hsl(228, 34%, 66%)',
    'heading-text': 'hsl(0, 0%, 100%)',
    'card-background': 'hsl(228, 28%, 20%)',
    'card-background-hover': 'hsl(232, 19%, 15%)',
    'toggle-container-background': `linear-gradient(
      to right,
      hsl(210, 78%, 56%),
      hsl(146, 68%, 55%)
    )`,
    'toggle-background': 'hsl(228, 28%, 20%)',
  };

  const lightTheme = {
    'background-color': 'hsl(0, 0%, 100%)',
    'text-color': 'hsl(228, 12%, 44%)',
    'heading-text': 'hsl(230, 17%, 14%)',
    'card-background': 'hsl(225, 100%, 98%)',
    'card-background-hover': 'hsl(227, 47%, 96%)',
    'toggle-container-background': 'hsl(230, 22%, 74%)',
    'toggle-background': 'hsl(0, 0%, 100%)',
  };

  const theme = themeName === 'dark' ? darkTheme : lightTheme;
  for (const property in theme) {
    document.documentElement.style.setProperty(
      `--${property}`,
      theme[property]
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('theme-toggle');
  const span = document.getElementsByClassName('theme-switch-toggle-span')?.[0];

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      changeThemeCssVariables('dark');
      span?.classList.add('dark-theme');
    } else {
      changeThemeCssVariables('light');
      span?.classList.remove('dark-theme');
    }
  });
});
