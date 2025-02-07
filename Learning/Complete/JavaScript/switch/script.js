//Rozgrzewka
function myFunction(){
	let text = document.getElementById("box").value;
	document.getElementById("result").innerHTML = text;
}

//czytanie elementu
function function2(){
	document.getElementById("klik").innerHTML = "Jakiś tekst";
	document.getElementById("klik").style.width = "20%";
	document.getElementById("klik").style.color = "blue";
	
}

//switch
function switchFunction(){
	var a = document.getElementById("window").value;
	a = parseInt(a);
	switch (a){
		case 1 : document.getElementById("txtField").innerHTML = "Given: 1";
			break;
		case 2 : document.getElementById("txtField").innerHTML = "Given: 2";
			break;
		case 3 : document.getElementById("txtField").innerHTML = "Given: 3";
			break;
			default : document.getElementById("txtField").innerHTML = "Given value out of range!";
	}	
		console.log(a); // just to test variable
}

