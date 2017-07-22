window.onload = function() {
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
    document.querySelector('.header-mobile').style.display = 'block';
  });

  document.querySelector('.close-icon-link').addEventListener('click', function(e) {
    document.querySelector('.header-mobile').style.display = 'none';
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102592274-1', 'auto');
  ga('send', 'pageview');
};
