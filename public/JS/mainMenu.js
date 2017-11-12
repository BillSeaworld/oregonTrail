window.onload = function(){
	//console.log('swing');
}

document.onkeypress = function(e){
	
	if(e.keyCode === 49){
		window.location = '/game'
	}
	else if(e.keyCode === 51){
		window.location = "/topTen"
	}
}

document.addEventListener('keypress', function(e){
	var myElement = document.getElementById("soundMenu");	
	
	if(audio.paused){
		myElement.innerHTML = "4\. Turn Sound OFF";
	}
	else if(!audio.paused && e.keyCode === 52){	
		myElement.innerHTML = "4\. Turn Sound ON";
	}

});

document.getElementById("travelOption").onclick = function(e){
	window.location.href = "/game"
}

document.getElementById("topTenOption").onclick = function(e){
	window.location.href = "/topTen"
}

