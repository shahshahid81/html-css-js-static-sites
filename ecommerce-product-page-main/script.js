window.onload = main;

function main() {
  const openMobileNavigation = document.getElementById(
    'open-mobile-navigation'
  );

  openMobileNavigation.addEventListener(
    'click',
    openMobileNavigationClickHandler
  );

  const closeMobileNavigation = document.getElementById(
    'close-mobile-navigation'
  );

  closeMobileNavigation.addEventListener(
    'click',
    closeMobileNavigationClickHandler
  );
}

function openMobileNavigationClickHandler(event) {
  event.preventDefault();
  const { body, header, navigation } = getMobileNavigationElements();
  body?.classList?.add('body');
  header?.classList?.add('header-active');
  navigation?.classList?.add('navigation-active');
}

function closeMobileNavigationClickHandler(event) {
  event.preventDefault();
  const { body, header, navigation } = getMobileNavigationElements();
  body?.classList?.remove('body');
  header?.classList?.remove('header-active');
  navigation?.classList?.remove('navigation-active');
}

function getMobileNavigationElements() {
  return {
    body: document.getElementById('body'),
    header: document.getElementById('header'),
    navigation: document.getElementById('navigation'),
  };
}
