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

	$('#anim-image').attr('src', "img/"+String.locale+"/window-"+String.locale+".png");
	$('#anim').attr('src', "img/"+String.locale+"/"+String.locale+ l("begin") +".png");
	// anim.firstImage = $('#anim').attr('src');
	// anim.draw(false);
	
	//    imageName - The name of this animation
	//    firstImage - The filename of the first image
	//    imageCount - The number of frames in the animation
	//    delay - The default delay between frames
	// function AnimatedPNG(imageName, firstImage, imageCount, delay)
	
	// console.log(l("end"));
	anim = new AnimatedPNG('anim', $('#anim').attr('src'), l("end"), 25);
	anim.altText = anim.titleText = ' ';
	anim.setRepeat(false);
	anim.draw(false);
	
}


loadLocale();

function play() {
	anim.setRepeat(true);
	anim.startAnimation();
	anim.setRepeat(false);
}