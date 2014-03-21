// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47727668-3', 'jacobs-university.de');
  ga('send', 'pageview');

  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
