window.onload = function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-107156593-1', 'auto');
  ga('send', 'pageview');

  animateVideoCta();
  toggleMobileMenu();
  showAgeVerification();
  handleContactFormSubmission();
  fadeInImages();
};

function animateVideoCta() {
  var videoCta = document.querySelector('.video-cta');
  if (videoCta) {
    document.querySelector('.video-cta').style.transform = 'translateX(0%)';
    document.querySelector('.video-cta').style.opacity = 1;
  }
}

function toggleMobileMenu() {
  document.querySelector('.mobile-menu-link').addEventListener('click', function(e) {
    document.querySelector('.header-mobile').style.display = 'block';
  });

  document.querySelector('.close-icon-link').addEventListener('click', function(e) {
    document.querySelector('.header-mobile').style.display = 'none';
  });
}

function showAgeVerification() {
  if (localStorage.getItem('isVerified')) {
    document.querySelector('#modal').style.display = 'none';
  } else {
    document.querySelector('#modal').style.display = 'block';
  }

  document.querySelector('#modal a').addEventListener('click', function(e) {
    localStorage.setItem('isVerified', true);
    e.preventDefault();
    document.querySelector('#modal').style.display = 'none';
  });
}

function fadeInImages() {
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: '.fade-in-obj'
  })
    .setClassToggle('.fade-in-obj', 'fade-in')
    .addTo(controller);
}

function handleContactFormSubmission() {
  if (document.querySelector('#form')) {
    document.querySelector('#form').addEventListener('submit', function(e) {
      e.preventDefault();
      var selectors = {
        name: 'input[name="name"]',
        email: 'input[name="email"]',
        phoneNumber: 'input[name="phoneNumber"]',
        company: 'input[name="company"]',
        location: 'input[name="location"]',
        msg: 'textarea[name="msg"]'
      };

      var checkboxes = {
        segments: 'input[name^="segments"]:checked',
        services: 'input[name^="services"]:checked'
      };

      var request = {};
      Object.keys(selectors).forEach(function(key) {
        request[key] = document.querySelector(selectors[key]).value;
      });

      Object.keys(checkboxes).forEach(function(key) {
        request[key] = [];

        document.querySelectorAll(checkboxes[key]).forEach(function(checkbox) {
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
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        document.querySelector('#msg').classList.remove('error');
        document.querySelector('#msg').classList.add('success');
        document.querySelector('#msg').innerHTML = 'Thank you for contacting us. We will get back to you shortly.';
      })
      .catch(function(err) {
        document.querySelector('#msg').classList.remove('success');
        document.querySelector('#msg').classList.add('error');
        document.querySelector('#msg').innerHTML = 'Something went wrong. Please try again.';
      });
    });
  }
}
