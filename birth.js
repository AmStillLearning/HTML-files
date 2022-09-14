function ageFromYOB(){


	
	let yob = document.getElementById("name").value;
	

	if (yob=="" || yob ==null){

		alert("Year is empty");

		

	}

	else{

		let age = 2022-yob;

		document.getElementById("age").innerHTML = age;
	}
}