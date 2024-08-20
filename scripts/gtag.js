// gtag.js

(function() {
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6CE24XZJF6';
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6CE24XZJF6');
    };
  })();
  