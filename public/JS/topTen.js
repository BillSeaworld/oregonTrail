window.onload = function() {	
}

//change location via keypress
document.onkeypress = function(e) {
	if(e.keyCode === 32) {
	  window.location = "/mainMenu"
	}
}

//change location via click
document.getElementById("myBttn").onclick = function(e){
	window.location.href = "/mainMenu"
}

//create array
var topTenArray = [
	['Matty',  6800, '10/02/17'],
	['Rammy',  5600, '12/12/16'],
	['Richie', 5700, '03/14/15'],
	['Bill S', 6600, '04/05/17'],
	['Dana',   4300, '05/13/15'],
	['Jenna',  1200, '11/12/13'],
	['Lili',   5300, '02/01/13'],
	['Gianna', 2400, '02/17/17'],
	['Dom',    1300, '06/26/16'],
	['Alyssa', 3700, '10/18/17'],
	['Marsh',   800, '08/19/14'],
	['Nixon',  1400, '03/14/15']
]

//sort array
topTenArray.sort(function(a, b){
	var x = a[1];
	var y = b[1]
	return y-x;
});

var myTable = document.getElementById("myTable");
var table = document.createElement("table");
var tBody = document.createElement("tBody");

//nested for loop to print to table
for(i = 0; i < 10; i++){
	var scores = topTenArray[i];
	var row = document.createElement('tr');
	var cell = document.createElement('td');
	cell.textContent = i + 1;
	row.appendChild(cell);
	for(b = 0; b < 10; b++){
		var cell = document.createElement('td');
		cell.textContent = scores[b];
		row.appendChild(cell);
	}
	tBody.appendChild(row);
}
table.appendChild(tBody);
myTable.appendChild(table);