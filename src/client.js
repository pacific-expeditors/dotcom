/* @flow */
import './assets/components.css'

window.onload = () => {
  animateVideoCta();
  toggleMobileMenu();
  showAgeVerification();
  handleContactFormSubmission();
  fadeInImages();
};

const animateVideoCta = () => {
  const videoCta = document.querySelector('.video-cta');

  if (videoCta) {
    document.querySelector('.video-cta').style.transform = 'translateX(0%)';
    document.querySelector('.video-cta').style.opacity = 1;
  }
}

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

const fadeInImages = () => {
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: '.fade-in-obj'
  })
    .setClassToggle('.fade-in-obj', 'fade-in')
    .addTo(controller);
}

const handleContactFormSubmission = () => {
  if (document.querySelector('#form')) {
    document.querySelector('#form').addEventListener('submit', (e) => {
      e.preventDefault();
      const selectors = {
        name: 'input[name="name"]',
        email: 'input[name="email"]',
        phoneNumber: 'input[name="phoneNumber"]',
        company: 'input[name="company"]',
        location: 'input[name="location"]',
        msg: 'textarea[name="msg"]'
      };

      const checkboxes = {
        segments: 'input[name^="segments"]:checked',
        services: 'input[name^="services"]:checked'
      };

      let request = {};
      Object.keys(selectors).forEach((key) => {
        request[key] = document.querySelector(selectors[key]).value;
      });

      Object.keys(checkboxes).forEach((key) => {
        request[key] = [];

        document.querySelectorAll(checkboxes[key]).forEach((checkbox) => {
          if (checkbox && checkbox.value) {
            request[key].push(checkbox.value);
          }
        });

        request[key] = request[key].join(', ');
      });

      fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
      })
      .then((res) => res.json())
      .then((res) => {
        document.querySelector('#msg').classList.remove('error');
        document.querySelector('#msg').classList.add('success');
        document.querySelector('#msg').innerHTML = 'Thank you for contacting us. We will get back to you shortly.';
      })
      .catch((err) => {
        document.querySelector('#msg').classList.remove('success');
        document.querySelector('#msg').classList.add('error');
        document.querySelector('#msg').innerHTML = 'Something went wrong. Please try again.';
      });
    });
  }
}
