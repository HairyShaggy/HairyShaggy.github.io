var counter = 0;
var colors = ["#FF0000", "#FF7F000", "#FFFF00", "#00FF00", "#00FFFF", "#8B00ff"];

function setup() {
	setInterval(changeColor, 1500);	
}
 
function changeColor(){
	var body = document.body;
	body.style.backgroundColor = colors[counter];
	
	if(counter == 6){
		counter = 0;
	} else {
		counter++;
	   }
}