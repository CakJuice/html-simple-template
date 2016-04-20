/*!
 * juice.js
 * Copyright CakJuice - 2016 (https://www.facebook.com/hendra.s.juice).
 * Licensed sakkarepmu
 */
 
$(function() {
	setFooterToBottom();
});

$(window).resize(function() {
	setFooterToBottom();
});

function setFooterToBottom() {
	var body = $('body');
	var footer = $('footer');

	if(body.height() + footer.height() < $(window).height()) {
		var padTop = footer.css('padding-top').replace('px', '');
		var padBottom = footer.css('padding-bottom').replace('px', '');
		footer.css({
			top: $(window).height() - footer.height() - padTop - padBottom,
			left: 0,
			position: 'absolute',
		});
	}
}