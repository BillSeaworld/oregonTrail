var exports = module.exports = {};

exports.startGameScreens = []

//html for menu options------------------------------------------------------------------------
var startGame1 = "<div class=\"banner\"><img src=\"/images/mainMenu.jpg\" alt=\"Banner\"></div>"
	+ "<p>Many have Braved the Oregon Trail</p>"
	+ "<p>What is Your Choice?</p>"
	+ "<div id=\"menuOptions\">"
	+ "<p id=\"bankerOption\">1. Be a banker from Boston</p>"
	+ "<p id=\"carpenterOption\">2. Be a carpenter from Ohio</p>"
	+ "<p id=\"farmerOption\">3. Be a farmer from Illinois</p>"
	+ "<p id=\"differencesMenu\">4. Discover the differences between the choices</p>"
	+ "</div>"
	+ "<div id=\"spcBttn\">Press Spacebar for Main Menu</div>";

	exports.startGameScreens.push(startGame1);

//html for entering group names----------------------------------------------------------------
var startGame2 = "<div id=\"enterInfoForm\">"
	+ "<label for=\"groupLead\">Enter Leader Name</label>" 
	+ "<input type=\"text\" name=\"leaderName\" id=\"groupLead\"><br>"
	+ "<p>Enter Group Member Names</p>"
	+ "<label for=\"membOne\">Member 1:</form>"
	+ "<input type=\"text\" name=\"memberOneName\" id=\"membOne\"><br>"
	+ "<label for=\"membTwo\">Member 2:</form>"
	+ "<input type=\"text\" name=\"memberTwoName\" id=\"membTwo\"><br>"
	+ "<label for=\"membThree\">Member 3:</label>"
	+ "<input type=\"text\" name=\"memberThreeName\" id=\"membThree\"><br>"
	+ "<label for=\"membFour\">Member 4:</label>"
	+ "<input type=\"text\" name=\"memberFourName\" id=\"membFour\"><br>"
	+ "<input id=\"submitBttn\" type=\"submit\" value=\"Next\">"
	+ "</div>"

	exports.startGameScreens.push(startGame2);

//html for choosing a start month---------------------------------------------------------------
var startGame3 = "<p>The year is 1848.  You start your journey on the Oregon Trail in Independence Missouri.  You must choose a month to leave Independence</p><br>"
	+ "<ol id'\"monthOptions\">"
	+ "<li id=\"monthMarch\">March</li>"
	+ "<li id=\"monthApril\">April</li>"
	+ "<li id=\"monthMay\">May</li>"
	+ "<li id=\"monthJune\"June</li>"
	+ "<li id=\"monthJuly\">July</li>"
	+ "</ol>"
	+ "<div id=\"choice\">What is Your Choice</div>";

	exports.startGameScreens.push(startGame3);