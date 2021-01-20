var model;

async function loadModel() {
		// Wait for model to be completed
		model = await tf.loadGraphModel('TFJS/model.json');
		// const dataX0 = [[0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.33, 0.73, 0.62, 0.59, 0.24, 0.14, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.87, 1.00, 1.00, 1.00, 1.00, 0.95, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.67, 0.20, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.26, 0.45, 0.28, 0.45, 0.64, 0.89, 1.00, 0.88, 1.00, 1.00, 1.00, 0.98, 0.90, 1.00, 1.00, 0.55, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.07, 0.26, 0.05, 0.26, 0.26, 0.26, 0.23, 0.08, 0.93, 1.00, 0.42, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.33, 0.99, 0.82, 0.07, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.09, 0.91, 1.00, 0.33, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.51, 1.00, 0.93, 0.17, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.23, 0.98, 1.00, 0.24, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.52, 1.00, 0.73, 0.02, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.04, 0.80, 0.97, 0.23, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.49, 1.00, 0.71, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.29, 0.98, 0.94, 0.22, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.07, 0.87, 1.00, 0.65, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.01, 0.80, 1.00, 0.86, 0.14, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.15, 1.00, 1.00, 0.30, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.12, 0.88, 1.00, 0.45, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.52, 1.00, 1.00, 0.20, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.24, 0.95, 1.00, 1.00, 0.20, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.47, 1.00, 1.00, 0.86, 0.16, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.47, 1.00, 0.81, 0.07, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]];
		// const myTensor = tf.tensor(dataX0);		
		// const result = model.predict(myTensor);
		// result.print();
	}

function predictImage() {
	// console.log('Processing....');
	// let allows us to create a local image variable
	let img = cv.imread(canvas);
	// img is both input and output to this function.
	// update the img to grayscale.
	cv.cvtColor(img, img, cv.COLOR_RGBA2GRAY, 0)
	// Will convert anything above the threshold to a maximum value.
	// Make all pixels above a particular threshold as white, and all others black
	// This is primarily used to calculate the bounding rectangle in the next step; by removing jagged edges.
	cv.threshold(img, img, 175, 255, cv.THRESH_BINARY);
	
	let contours = new cv.MatVector();
	let hierarchy = new cv.Mat();
	cv.findContours(img, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
	
	// Get bounding rectangle
	let cnt = contours.get(0);
	// In case someone click on the button while the canvas is blank.
	if(cnt == null) return;
	let rect = cv.boundingRect(cnt);
	// roi = region of interest
	img = img.roi(rect);
	
	// Resize
	var height = img.rows;
	var width = img.cols;

	if(height > width) {
		height = 20;
		const scaleFactor = img.rows/height;
		width = Math.round(img.cols / scaleFactor);
	}else {
		width = 20;
		const scaleFactor = img.cols/width;
		height = Math.round(img.rows / scaleFactor);
	}
	
	let newSize = new cv.Size(width, height);
	cv.resize(img, img, newSize, 0, 0, cv.INTER_AREA);
	
	// Calculate padding
	const LEFT = Math.ceil(4 + (20-width)/2);
	const RIGHT = Math.floor(4 + (20-width)/2);
	const TOP = Math.ceil(4 + (20-height)/2);
	const BOTTOM = Math.floor(4 + (20-height)/2);
	
	// console.log(`height-width TOP-BOTTOM-LEFT-RIGHT: ${height}-${width} + ${TOP}-${BOTTOM}-${LEFT}-${RIGHT}`);
	
	const BLACK_COLOR = new cv.Scalar(0, 0, 0, 0);
	cv.copyMakeBorder(img, img, TOP, BOTTOM, LEFT, RIGHT, cv.BORDER_CONSTANT, BLACK_COLOR);
	// console.log(`New size height-width ${img.rows}-${img.cols}`);
	
	// Find center of mass.
    cv.findContours(img, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
    cnt = contours.get(0);
    const Moments = cv.moments(cnt, false);
	
	// Moments.m00 is the mass of the image.
	// cx and cy are the center of mass
    const cx = Moments.m10 / Moments.m00;
    const cy = Moments.m01 / Moments.m00;
    // console.log(`M00: ${Moments.m00}, cx: ${cx}, cy: ${cy}`);
	
	// Shift the image
	const X_SHIFT = Math.round(img.cols/2 - cx);
	const Y_SHIFT = Math.round(img.rows/2 - cy);
	
	newSize = new cv.Size(img.cols, img.rows);
	const M = cv.matFromArray(2, 3, cv.CV_64FC1, [1, 0, X_SHIFT, 0, 1, Y_SHIFT]);
	
	cv.warpAffine(img, img, M, newSize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, BLACK_COLOR);
	
	let pixelValues = img.data;
    // console.log(`pixel values: ${pixelValues}`);

    pixelValues = Float32Array.from(pixelValues);

    pixelValues = pixelValues.map(function (item) {
        return item / 255.0;
    });

    // console.log(`scaled array: ${pixelValues}`);


    const X = tf.tensor([pixelValues]);
	// console.log(`Shape of Tensor: ${X.shape}`);
	// console.log(`dType of Tensor: ${X.dtype}`);
	const result = model.predict(X);
	result.print();
	
	// Return the value of the Tensor in an Array.
	const output = result.dataSync()[0];
	
	// console.log(tf.memory());
	
	// preview the image - testing only
	// const outputCanvas = document.createElement('CANVAS');
	// cv.imshow(outputCanvas, img);
	// document.body.appendChild(outputCanvas);
	
	// Cleanup
	img.delete();
	hierarchy.delete();
	cnt.delete();
	contours.delete();
	M.delete();
	X.dispose();
	result.dispose();

	return output;
}
	