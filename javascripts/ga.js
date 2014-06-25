// mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID
var _gaq = [];
_gaq.push(['_setAccount', 'UA-2233558-21']);
_gaq.push(['_setDomainName', 'none']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);
_gaq.push(['b._setAccount', 'UA-2233558-16']);
_gaq.push(['b._trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
