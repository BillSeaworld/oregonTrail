const express = require('express')
const app = express()

app.use(express.static('public')); //adds content of public folder

app.get('/', function (req, res){ //points to root folder 
	res.sendFile('/views/index.html', {root: __dirname})
})

app.get('/mainMenu',function (req, res){ //mainMenu.html
    res.sendFile('/views/mainMenu.html', {root: __dirname})
})

app.get('/topTen', function (req, res){ //points to topTen.html
    res.sendFile('/views/topTen.html', {root: __dirname})
})

app.get('/game', function (req, res){ //points to game.html
    res.sendFile('/views/game.html', {root: __dirname})
})

//require gameController to view data ---------------------------------------------------
var game = require('./controllers/gameController');

//gets the html for the game screen the player is requesting
app.get('/game/getNewGameScreen/:screenId', function(req, res){
	
	//get the screen
	var gameScreen = game.startGameScreens[req.params.screenId];
	//console.log("\n this is the main node file! \n" + gameScreen)

	//return the html
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})

//saves profession in settings -----------------------------------------------------------
app.get('/game/saveProfession/:profession', function(req, res){

	//get the screen
	var gameScreen = game.startGameScreens[req.params.profession];

	//return the html
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})

//saves player ---------------------------------------------------------------------------
app.get('/game/savePlayerName/:playerId/:playerName', function(req, res){

	//get the screen
	var gameScreen = game.startGameScreens[req.params.playerId] = req.params.playerName;

	//return the html
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})

//saves startMonth in settings -----------------------------------------------------------
app.get('/game/saveStartMonth/:startMonth', function(req, res){

	//get the screen
	var gameScreen = game.startGameScreens[req.params.startMonth];

	//return the html
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})

//gets all currently saved settings and returns them -------------------------------------
app.get('/game/getSettings', function(req, res){

	//get the screen
	var gameScreen = game.startGameScreens[req.params.getSettings];

	//return the html
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})

app.listen(1337, function(){ //opens port 1337
    console.log('Listening on 1337')
})