function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function(doc) {
	
	var h1Element = $('#title');
	var textStack = ["dub","indie","lofi","psychedelic","ghetto","christian", "garage" ,"euro", "internet","art","synth", "psy" ,"wonky" ,"goa","vapor", "cloud","jazz","punk", "ambient ","","tech","fusion"];
	var textStack2 = ["trap","house","grime","pop","jungle","trance","drone","rock","noise","bass","foot","techno", "soul" ,"juke",""];
	var intro = true;
	var outro = true;
	order = false;

	function changemytext(){
		var randomIndex = randomInt(0, textStack.length-1)
		var randomIndex2 = randomInt(0, textStack2.length-1) 
		var randomText = textStack[randomIndex];
		var randomText2 = " " + textStack2[randomIndex2];
		intro = Math.random() >= 0.01 ? !intro:intro;
		outro = Math.random() >= 0.2 ? !outro:outro;
		
		var pre = ""
		var post = "";

		if(intro){
			pre = ["post-","eclectic ","acid ","progressive ","experimental " , "future ", "leftfield " ,"analogue ","dark ", "modern ","industrial " ,"slow ","big room ","abstract ", "new ", "pre-","meta-", "deep ", "proto-","female ","contemporary ","avant garde ","UK ","UK ","UK ","hard ",]
		}else{pre=[""]}

		if(outro){
			post = ["step","style","wave","club","rap","work","core",""] //"gaze"
		} else{
			post=[""];
		}

		var randomintro = randomInt(0, pre.length-1)
		var introtext = pre[randomintro];
		//console.log(pre, introtext);

		var randomoutro = randomInt(0, post.length-1)
		var outrotext = post[randomoutro];
		//console.log(post, introtext);

		
		return introtext + randomText + randomText2 + outrotext

	}

	h1Element.click( function(){
			var text = changemytext();
			$(this).text( text );

	var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
});
});

