window.onload = function(){    
}

//change location via keypress
document.onkeypress = function(e) {
	if(e.keyCode === 32) {
		window.location = '/mainMenu'
	}
}  

//change location via click
document.getElementById("spcBttn").onclick = function(){
	window.location.href = "/mainMenu"
}






