function header_button_click(button) {
	var id = '#' + $(button).prop('id') + 'Content',
	    parentId = '#' + $(id).parent().prop('id'),
	    trueOffset = $(id).prop ('offsetTop') - $(parentId).prop('offsetTop');

	$($(button).parent()).children().each(function(i, e) {
		if($(e).prop('tagName').toLowerCase() === 'button') {
			$(e).removeClass('active');
		}
	});

	$(button).addClass('active');

	$($(id).parent()).animate({scrollTop: trueOffset});
}
