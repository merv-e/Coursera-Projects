(function(){
    "use strict";
        let convertType = "miles";
		const heading = document.querySelector("h1");
		const intro = document.querySelector("p");
		const answerDiv = document.getElementById("answer");
		const form = document.getElementById("convert");

		document.addEventListener("keydown", function (event){
			let key = event.code;
			 if (key === 'KeyK') {
				heading.innerHTML = "Kilometers to Miles Converter";
				intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
				convertType = "kilometres";
			 }
			 else if (key === 'KeyM') {
				heading.innerHTML = "Miles to Kilometers Converter";
				intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
				convertType = "miles";
			 } 
		});

		form.addEventListener("submit", function(e){
			e.preventDefault();
			const distance = parseFloat(document.getElementById("distance").value);

			if (distance) {
				if (convertType === "kilometres"){
					const conversion = distance * 0.62137119.toFixed(1);
					answerDiv.innerHTML = `<h2>${distance} kilometres converts to ${conversion} miles.</h2>`;	
				}
			
				else {
					const conversion = distance * 1.609344.toFixed(1);
					answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometres.</h2>`;
				}}
			else {
			 answerDiv.innerHTML = "<h2>Please provide a number.</h2>"
		}});
}());