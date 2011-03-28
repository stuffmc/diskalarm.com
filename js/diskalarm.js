// TODO:
// - Export NSAlert.mov in images (QuickTime 7)
// - Play when clicked on button
// - make screenshots/screencasts for all languages
// - when website updated, write to the Mac BU (and #nsconf twitter)

var l = function (string, fallback) {
	var localized = string.toLocaleString();
	if (localized !== string) {
		return localized;
	} else {
		return fallback;
	}
};

function loadLocale(locale) {
	String.locale = 'en';
	if (locale) {
		 String.locale = locale;
		 location.hash = locale;
	}
	if (location.hash) {
		String.locale = location.hash.substr(2);	
	}
	// console.log(String.locale)
	document.title = l('%title', document.title);
	// Browse tags
	$('div,p,span,a').each( function() {
	  // console.log( $(this).attr('id') + ' ' + $(this) + ' '  );
		$(this).text(l($(this).attr('id')));
	});
	
	$('#macappstore').first().attr('src', 'img/macappstore-'+String.locale+'.png');
	// $('#screenshot').first().attr('src', 'img/en001.png');
	
	document.documentElement.dir = l("%locale.dir", document.documentElement.dir);
	document.documentElement.lang = String.locale || document.documentElement.lang;
}

loadLocale();

anim = new AnimatedPNG('anim', $('#anim').attr('src'), 94, 25);
anim.setRepeat(false);
anim.draw(false);


function play() {
	anim.setRepeat(true);
	anim.startAnimation();
	anim.setRepeat(false);
}