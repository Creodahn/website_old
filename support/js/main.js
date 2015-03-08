function headerBtnClick (button) {
	var target = document.getElementById (button.id + "Content");
	var parent = target.parentNode;
	
	var trueOffset = target.offsetTop - parent.offsetTop;
	
	$( "#" +parent.id).animate({scrollTop: trueOffset});
}