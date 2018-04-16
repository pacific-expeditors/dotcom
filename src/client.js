/* @flow */
import './assets/components.css'

window.onload = () => {
  toggleMobileMenu();
  showAgeVerification();
};

const toggleMobileMenu = () => {
  document.querySelector('.mobile-menu-link').addEventListener('click', (e) => {
    document.querySelector('.header-mobile').style.display = 'block';
  });

  document.querySelector('.close-icon-link').addEventListener('click', (e) => {
    document.querySelector('.header-mobile').style.display = 'none';
  });
}

const showAgeVerification = () => {
  if (localStorage.getItem('isVerified')) {
    document.querySelector('#modal').style.display = 'none';
  } else {
    document.querySelector('#modal').style.display = 'block';
  }

  document.querySelector('#modal a').addEventListener('click', (e) => {
    localStorage.setItem('isVerified', true);
    e.preventDefault();
    document.querySelector('#modal').style.display = 'none';
  });
}
