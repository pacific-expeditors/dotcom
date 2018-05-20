/* @flow */
import './assets/components.css'
import './assets/blog.css'
import './assets/contact.css'
import './assets/cards.css'
import './assets/cards-with-bg.css'
import './assets/cards-with-header.css'
import './assets/centered-text-bg.css'
import './assets/grid.css'
import './assets/left-card.css'
import './assets/right-card.css'

window.onload = () => {
  toggleMobileMenu();
  showAgeVerification();
};

const toggleMobileMenu = () => {
  document.querySelector('.mobile-menu-link').addEventListener('click', (e:Event) => {
    document.querySelector('.header-mobile-menu').classList.toggle('visible');
    document.querySelector('.mobile-menu-link').classList.toggle('is-active');
  });
}

const showAgeVerification = () => {
  if (localStorage.getItem('isVerified')) {
    document.querySelector('#modal').style.display = 'none';
  } else {
    document.querySelector('#modal').style.display = 'block';
  }

  document.querySelector('#modal a').addEventListener('click', (e:Event) => {
    localStorage.setItem('isVerified', true);
    e.preventDefault();
    document.querySelector('#modal').style.display = 'none';
  });
}
