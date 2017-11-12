window.onload = function(){

}

//music
var audio = new Audio('/music/oregonMusic.mp3')
audio.play();

document.addEventListener('keypress', function(e){	
	
	if(audio.paused){
		audio.play();
	}
	else if(!audio.paused && e.keyCode === 52){
		audio.pause();		
	}

});
