function headerBtnClick (button) {
	var target = $('#' + button.id + "Content").get (0);
	var parent = $(target.parentNode).get (0);
	
	var trueOffset = $(target).prop ('offsetTop') - $(parent).prop('offsetTop');
	
	$( "#" +parent.id).animate({scrollTop: trueOffset});
}