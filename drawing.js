const BACKGROUND = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0, currentY = 0, previousX = 0, previousY = 0;
var isPainting = false;

var canvas;
var context;


function prepareCanvas() {

	// console.log('Preparing canvas');
	canvas = document.getElementById('my-canvas');
	context = canvas.getContext('2d');
	
	context.fillStyle = BACKGROUND;
	
	
	// Draw a rectangle on the canvas
	context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	
	// White colored line.
	context.strokeStyle = LINE_COLOR;
	context.lineWidth = LINE_WIDTH;
	context.lineJoin = 'round' // This is to get a smooth line.
	
	document.addEventListener('mousedown', 
		function(event) {
			isPainting = true;
			currentX = event.clientX - canvas.offsetLeft;
			currentY = event.clientY - canvas.offsetTop;
		}
	);
	
	document.addEventListener('mouseup', 
		function(event){
			isPainting = false;
		}
	);
	
	document.addEventListener('mousemove', 
		function(event) {			
			if(isPainting) {
				previousX = currentX;
				currentX = event.clientX - canvas.offsetLeft;
				previousY = currentY;
				currentY = event.clientY - canvas.offsetTop;
					
				// console.log(`Current values:(${currentX}, ${currentY})`)
				draw()

			}
		}
	);
	
	// Touch events for mobile devices.
	canvas.addEventListener('touchstart-1', 
		function(event) {
			// console.log('start painting - touchstart');
			isPainting = true;
			// Multiple touches - i.e. fingers. Use the first finger's coordinates.
			currentX = event.touches[0].clientX - canvas.offsetLeft;
			currentY = event.touches[0].clientY - canvas.offsetTop;
		}
	);
	
	canvas.addEventListener('mouseleave', 
		function(event){
			isPainting = false;
		}
	);
	
	canvas.addEventListener('touchend-1', 
		function(event){
			isPainting = false;
		}
	);
	
	canvas.addEventListener('touchcancel-1', 
		function(event){
			isPainting = false;
		}
	);
	
	
	canvas.addEventListener('touchmove-1', 
		function(event) {			
			if(isPainting) {
				previousX = currentX;
				currentX = event.touches[0].clientX - canvas.offsetLeft;
				previousY = currentY;
				currentY = event.touches[0].clientY - canvas.offsetTop;
				
				// console.log(`Current values:(${currentX}, ${currentY})`)			
				draw();
			}
		}
	);
}

function draw() {
	// Draw the line
	context.beginPath();
	context.moveTo(previousX, previousY);
	context.lineTo(currentX, currentY);
	context.closePath();
	context.stroke();
}

function clearCanvas() {
	currentX = 0;
	currentY = 0;
	previousX = 0;
	previousY = 0;
	context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}


/*
Draw
Load the image
onvert to B&W
Find the contours
Calculate bounding rectangle
Add padding
Resize image
Calculate New size
Crop the image
Find the center of mass
Shift the image
Normalize the pixel value
Create a Tensor
Predict!
*/