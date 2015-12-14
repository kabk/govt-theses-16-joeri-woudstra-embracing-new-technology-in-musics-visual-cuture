function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function(doc) {
	
	var h1Element = $('#title');
	var textStack = ["dub", "house", "rock", "noise","jazz","punk"];
	var textStack2 = ["tech", "footwork", "trap", "rap","juke", "trance", " ambient ","drone",""];
	var intro = true;
	var outro = true;
	order = false;

	function changemytext(){
		var randomIndex = randomInt(0, textStack.length-1)
		var randomIndex2 = randomInt(0, textStack2.length-1) 
		var randomText = textStack[randomIndex];
		var randomText2 = textStack2[randomIndex2];
		intro = Math.random() >= 0.01 ? !intro:intro;
		outro = Math.random() >= 0.2 ? !outro:outro;
		
		var pre = ""
		var post = "";

		if(intro){
			pre = ["post-","abstract ", "new ", "pre-","meta-", "deep ", "proto-","female ","contemporary ","avant garde ","UK ","wave"]
		}else{pre=[""]}

		if(outro){
			post = ["step","style"]
		}else{post=[""]}

		var randomintro = randomInt(0, pre.length-1)
		var introtext = pre[randomintro];
		console.log(pre, introtext);

		var randomoutro = randomInt(0, post.length-1)
		var outrotext = post[randomoutro];
		console.log(post, introtext);

		if(order){
			$(this).text( introtext + randomText + randomText2 + outrotext );
		}else{
			$(this).text(  introtext + randomText2 + randomText + outrotext);
		}
		$(this).text();

		order = !order

	}
	h1Element.click( changemytext );
});

