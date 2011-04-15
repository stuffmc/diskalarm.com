var l = function (string, fallback) {
	var localized = string.toLocaleString();
	if (localized !== string) {
		return localized;
	} else {
		return fallback;
	}
};

function loadLocale(locale) {
	if (locale) {
		 String.locale = locale;
		 location.hash = locale;
	} else {
		String.locale = (navigator.language) ? navigator.language : navigator.userLanguage; 
		String.locale = String.locale.substring(0,2);
	}
	if (location.hash) {
		String.locale = location.hash.substr(2);	
	}
	// console.log(String.locale)
	document.title = l('%title', document.title);
	// $(".twitter-share-button").first().attr("data-text", document.title);
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
	anim = new AnimatedPNG('anim', $('#anim').attr('src'), l("end"), 50);
	anim.altText = anim.titleText = ' ';
	anim.setRepeat(false);
	anim.draw(false);
	$("#button").hide();
	
	
	// $("#alert:first").css("display", "block");
	// $("#alert:first").fadeIn();
}


loadLocale();

function play() {
	$("#button").hide();
	$("#anim2").hide();
	$("#anim").show();
	$("#alert").show();
	anim.setRepeat(true);
	anim.startAnimation();
	anim.setRepeat(false);
}

function dismissAlert() {
	$("#alert").hide();
	$("#anim").hide();
	$("#anim2").show();
	$("#button").show();
	// console.log("called");
	$('#anim2').attr('src', "img/"+String.locale+"/"+String.locale+"f1.png");
	anim2 = new AnimatedPNG('anim2', $('#anim2').attr('src'), 5, 50);
	anim2.altText = anim2.titleText = ' ';
	// anim2.setRepeat(true);
	anim2.setRepeat(false);
	anim2.draw(false);
	// anim2.startAnimation();
	// anim2.setRepeat(false);
}