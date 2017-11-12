window.onload = function(){
}

gameScreen(0);

document.onkeypress = function(e){
	//console.log('keypressed: ' + e.keyCode); gets keyCode
	
	//changes location
	if(e.keyCode === 32) {
		window.location = '/mainMenu'
	}
}

//return to mainMenu via click
document.getElementById("spcBttn").onclick = function(e){
	window.location.href = "/mainMenu"
}

//call next page via click bankerOption
document.getElementById("bankerOption").onclick = function(){

}

//call next page via click carpenterOption
document.getElementById("carpenterOption").onclick = function(){

}

//call next page via click farmerOption
document.getElementById("farmerOption").onclick = function(){

}

//call next page via click differencesMenu
document.getElementById("differencesMenu").onclick = function(){
	
}

//calls backend 
function gameScreen(screenNumber){
	var gameContainer = document.getElementById("gameContainer");

	//make async call to server to get requested screen html
	fetch('/game/getNewGameScreen/' + screenNumber).then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			//send the html returned back 
			//console.log("recieved back: " + data);
			gameContainer.innerHTML = data;
		})
	});
}