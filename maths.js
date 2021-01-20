var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
	const n1 = Math.floor((Math.random() * 5));
	const n2 = Math.floor((Math.random() * 6));
	document.getElementById('n1').innerHTML = n1;
	document.getElementById('n2').innerHTML = n2;
	answer = n1 + n2;
}

function checkAnswer() {
	const prediction = predictImage();
	
	if(prediction == answer) {
		score++;
		if(score <= 6) {
			backgroundImages.push(`url('images/background${score}.svg')`);
			document.body.style.backgroundImage = backgroundImages;
		}else {
			alert('Congratulations !!');
			score = 0
			backgroundImages = [];
			document.body.style.backgroundImage = backgroundImages;
		}

	}else {
		// Dont let the score go negative
		if(score > 0) {
			score--;
			alert('Wrong answer');
			setTimeout(
				function() {
					backgroundImages.pop();
					document.body.style.backgroundImage = backgroundImages;
				}, 
				2000
			);			
		}
	}	
	console.log(`Answer ${answer}, Prediction ${prediction}, score ${score}`);
}