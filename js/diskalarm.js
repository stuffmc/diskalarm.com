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
	// Browse tags
	$('div,p,span,a').each( function() {
	  // console.log( $(this).attr('id') + ' ' + $(this) + ' '  );
		$(this).text(l($(this).attr('id')));
	});
	
	$('#macappstore').first().attr('src', 'img/'+String.locale+'/macappstore-'+String.locale+'.png');
	
	document.documentElement.dir = l("%locale.dir", document.documentElement.dir);
	document.documentElement.lang = String.locale || document.documentElement.lang;

	$('#anim-image').attr('src', "img/"+String.locale+"/window-"+String.locale+".png");
	$('#anim').attr('src', "img/"+String.locale+"/"+String.locale+ l("begin") +".png");

  // anim = new AnimatedPNG('anim', $('#anim').attr('src'), l("end"), 50);
  // anim.altText = anim.titleText = ' ';
  // anim.setRepeat(false);
  // anim.draw(false);
  //   play();
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
/* http://www.sohtanaka.com/web-design/simple-page-peel-effect-with-jquery-css */
$("#pageflip1").hover(function() { //On hover...
	$("#pageflip img , .msg_block").stop()
		.animate({ //Animate and expand the image and the msg_block (Width + height)
			width: '307px',
			height: '319px'
		}, 500);
	} , function() {
	$("#pageflip img").stop() //On hover out, go back to original size 50x52
		.animate({
			width: '50px',
			height: '52px'
		}, 220);
	$(".msg_block").stop() //On hover out, go back to original size 50x50
		.animate({
			width: '50px',
			height: '50px'
		}, 200); //Note this one retracts a bit faster (to prevent glitching in IE)
});
/* ------------------------------------------------------------ */