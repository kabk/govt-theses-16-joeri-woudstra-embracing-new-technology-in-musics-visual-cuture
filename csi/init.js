function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function(doc) {
	
	var h1Element = $('#title');
	var textStack = ["dub","indie","lofi","psychedelic", "trip","ghetto","christian", "garage" ,"euro", "internet","art","synth", "psy" ,"wonky" ,"goa","vapor", "cloud","juke", "noise","jazz","punk", "ambient ","","tech"];
	var textStack2 = ["tech", "trap","house","fusion","grime","pop","jungle","trance","drone","rock","noise","bass","foot","techno", "soul" ,""];
	var intro = true;
	var outro = true;
	order = false;



	var wrong = {


			"dub": [" "],
			"ghetto": [" "],
			"christian": [" "],
			"garage" : [" "],
			"euro": [" "],
			"internet": [" "],
			"wonky" : [" "],
			"goa": [" "],
			"vapor": [" "],
			"cloud": [" "],
			"juke": [" "],
			"noise": [" "],
			"jazz": [" "],
			"punk": [" "],
			"ambient ": [" "],
			"hard": [" "],
			"tech": ["tech","techno"],
			"noise": ["noise"]

	} 

	function generateText(){
		var randomIndex = randomInt(0, textStack.length-1)
		var randomIndex2 = randomInt(0, textStack2.length-1);
		var randomText = textStack[randomIndex];
		var randomText2 = " " + textStack2[randomIndex2];
		intro = Math.random() >= 0.03 ? !intro:intro;
		outro = Math.random() >= 0.2 ? !outro:outro;
		
		var pre = ""
		var post = "";

		if(intro){
			pre = ["post-","eclectic ","acid ","progressive ","experimental " , "future ", "leftfield " ,"analogue ","dark ", "modern ","industrial " ,"slow ","big room ","abstract ", "new ", "pre-","meta-", "deep ", "proto-","female ","contemporary ","avant garde ","UK ","UK ","UK ","hard ",]
		}else{pre=[""]}

		if(outro){
			post = ["step","style","wave","gaze","club","rap","work","core",""]
		} else{
			post=[""];
		}

		var randomintro = randomInt(0, pre.length-1)
		var introtext = pre[randomintro];
		// console.log(pre, introtext);

		var randomoutro = randomInt(0, post.length-1)
		var outrotext = post[randomoutro];
		// console.log(post, introtext);

		if(randomText in wrong || randomText2 in wrong){
			if(wrong[randomText].indexOf(randomText2) > -1){

				return generateText();

			} else {

				return introtext + randomText + randomText2 + outrotext;
			
			}
		}


	}

	h1Element.click( function(){
			var text = generateText();
			$(this).text( text );

		var msg = new SpeechSynthesisUtterance(text);

    if(typeof text === 'undefined'){
    
} else{ 

    window.speechSynthesis.speak(msg);
}


	});






});

