window.onload = function() {
  objectFitImages('img.card-image');

  document.addEventListener('scroll', function(e) {
    var header = document.querySelector(".header");
    var logo = document.querySelector(".logo");

    if (window.pageYOffset >= 400) {
      TweenLite.to(header, .5, {backgroundColor:"rgba(0, 0, 0, .5)"});
      TweenLite.to(logo, .5, {opacity:1});
    } else {
      TweenLite.to(header, .5, {backgroundColor:"transparent"});
      TweenLite.to(logo, .5, {opacity:0});
    }
  });

  document.querySelector('.mobile-menu-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.header-mobile').style.display = 'block';
  });

  document.querySelector('.close-icon-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.header-mobile').style.display = 'none';
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102592274-1', 'auto');
  ga('send', 'pageview');

  if (document.querySelector('#form')) {
    document.querySelector('#form').addEventListener('submit', function(e) {
      e.preventDefault();
      var selectors = {
        name: 'input[name="name"]',
        email: 'input[name="email"]',
        phoneNumber: 'input[name="phoneNumber"]',
        company: 'input[name="company"]',
        contactMethod: 'select[name="contactMethod"]',
        msg: 'textarea[name="msg"]'
      };

      var request = {};
      Object.keys(selectors).forEach(function(key) {
        request[key] = document.querySelector(selectors[key]).value;
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
};
