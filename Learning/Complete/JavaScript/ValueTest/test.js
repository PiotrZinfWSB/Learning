function check(){
	var num = document.getElementById("num").value;
	
	var positTest = (num<0)? "Your number is negative." : "Your number is positive";
	var intTest = (num%1==0)? "is an integer." : "is a float number";
	
	document.getElementById('summary').innerHTML = positTest + " and " + intTest;
}