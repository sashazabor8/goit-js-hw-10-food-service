const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };  

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
}

refs.checkbox.addEventListener('change', onCheckboxChange);

let currentTheme;

try {
  if (localStorage.getItem('currentTheme')=== Theme.DARK) {
    refs.body.classList.toggle(Theme.DARK)
    refs.body.classList.toggle(Theme.LIGHT)

    refs.checkbox.checked = true;
  }
} catch {}




function onCheckboxChange () {
  refs.body.classList.toggle(Theme.DARK)
  refs.body.classList.toggle(Theme.LIGHT)
  
  refs.checkbox.checked ? (currentTheme = Theme.DARK) : (currentTheme = Theme.LIGHT);

  localStorage.setItem('currentTheme', currentTheme);
  
}



