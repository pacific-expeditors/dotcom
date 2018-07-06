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
  hideLoading();
};

const hideLoading = () => {
  let intervalId = window.setInterval(() => {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      document.querySelector('.loading-overlay').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('.loading-overlay').style.display = 'none';
      }, 500);
    }
  }, 1000);
};

const toggleMobileMenu = () => {
  document.querySelector('.mobile-close-link').addEventListener('click', (e:Event) => {
    document.querySelector('.header-mobile-menu').classList.toggle('visible');
    document.querySelector('.mobile-close-link').classList.toggle('is-active');
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
