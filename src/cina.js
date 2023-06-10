let capture
let detector

function preload() {
	img0 = loadImage('assets/img/detection/num_0.png');
	img1 = loadImage('assets/img/detection/num_1.png');
	img2 = loadImage('assets/img/detection/num_2.png');
	img3 = loadImage('assets/img/detection/num_3.png');
	img4 = loadImage('assets/img/detection/num_4.png');
	img5 = loadImage('assets/img/detection/num_5.png');
	scritta= loadImage("assets/img/detection/call_to_action.png");
  }

async function setup() {

	createCanvas(windowWidth, windowHeight)

	capture = createCapture(VIDEO)
	capture.size(640, 480)
	capture.hide()

	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")
}

async function draw() {
//translate (windowWidth/2, windowHeight/2)
	background(255)

	// noStroke()
	// fill(255, 10)
	// rect(0, 0, width, height)

	// Disegna la webcam sullo stage, a specchio
	// push()
	// scale(-1, 1)
	// image(capture, -640, 0)
	// pop()

	if (detector && capture.loadedmetadata) {
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })
			
		if (hands.length == 1) {

			const manoA = hands[0]

			const indiceA  = manoA.keypoints[8]
			const polliceA = manoA.keypoints[4]
			const medioA = manoA.keypoints[12]
			const anulareA = manoA.keypoints[16]
			const mignoloA = manoA.keypoints[20]

			const palmoA = manoA.keypoints[0]
			const centroA = manoA.keypoints[5]
			const centroB = manoA.keypoints[13]
			
			
			const indicepalmo = dist(indiceA.x, indiceA.y, palmoA.x, palmoA.y)
			const pollicecentro = dist(polliceA.x, polliceA.y, centroA.x, centroA.y)
			const mediopalmo = dist(medioA.x, medioA.y, palmoA.x, palmoA.y)
			const anularepalmo = dist(anulareA.x, anulareA.y, palmoA.x, palmoA.y)
			const mignolopalmo = dist(mignoloA.x, mignoloA.y, palmoA.x, palmoA.y)
			const pollicecentroB = dist(polliceA.x, polliceA.y, centroB.x, centroB.y)

			if (pollicecentro<100 && indicepalmo>100 && mediopalmo<100 && anularepalmo<100 && mignolopalmo<100){
				background(255)
				image(img1, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
		
			else if (pollicecentro<100 && indicepalmo>100 && mediopalmo>50 && anularepalmo<100 && mignolopalmo<100){
				background(255)
				image(img2, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			
			else if (pollicecentro<100 && indicepalmo<100 && mediopalmo<100 && anularepalmo<100 && mignolopalmo<100){
				background(255)
				image(img0, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentro<100 && indicepalmo>100 && mediopalmo>50 && anularepalmo>100 && mignolopalmo<100){
				background(255)
				image(img3, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentro<75 && indicepalmo>100 && mediopalmo>50 && anularepalmo>100 && mignolopalmo>100){
				background(255)
				image(img4, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentroB>50 && indicepalmo>50 && mediopalmo>50 && anularepalmo>50 && mignolopalmo>50){
				background(255)
				image(img5, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			
			// else if (mediopalmo<100){
			// 	background(255)
			// }
			// else if (anularepalmo<100){
			// 	background(255)
			// }
			// else if (mignolopalmo<100){
			// 	background(255)
			// }
		

			else{
				background (255)
				
			}


			// if (((indiceA.y - palmoA.y) < -100)&&((medioA.y - palmoA.y) > -100)&&((anulareA.y - palmoA.y) > -100)&&((mignoloA.y - palmoA.y) > -100)&&((polliceA.x - palmoA.x) > -100))
			// {
			// 	background (255)
			// 	image(img1, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2);
			// }
			// else if (((indiceA.y - palmoA.y) < -100)&&((medioA.y - palmoA.y) < -100)&&((anulareA.y - palmoA.y) > -100)&&((mignoloA.y - palmoA.y) > -100)&&((polliceA.x - palmoA.x) > -100)){
			// 	background (255)
			// 	image(img2, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2);
			// }
			// else if (((indiceA.y - palmoA.y) < -100)&&((medioA.y - palmoA.y) < -100)&&((anulareA.y - palmoA.y) < -100)&&((mignoloA.y - palmoA.y) > -100)&&((polliceA.x - palmoA.x) > -100)){
			// 	background (255)
			// 	image(img3, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2);
			// }
			// else if (((indiceA.y - palmoA.y) < -100)&&((medioA.y - palmoA.y) < -100)&&((anulareA.y - palmoA.y) < -100)&&((mignoloA.y - palmoA.y) < -100)&&((polliceA.x - palmoA.x) > -100)){
			// 	background (255)
			// 	image(img4, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2);
			// }
			// else if (((indiceA.y - palmoA.y) < -100)&&((medioA.y - palmoA.y) < -100)&&((anulareA.y - palmoA.y) < -100)&&((mignoloA.y - palmoA.y) < -100)&&((polliceA.x - palmoA.x) < -100)){
			// 	background (255)
			// 	image(img5, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2);
			// }
			// else if (((indiceA.y - palmoA.y) > -100)&&((medioA.y - palmoA.y) > -100)&&((anulareA.y - palmoA.y) > -100)&&((mignoloA.y - palmoA.y) > -100)&&((polliceA.x - palmoA.x) > -100))
			// {
			// 	background (255)
			// 	image(img0, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2);
			// }
			// }
			// else{
			// 	background (255)
			// 	image(scritta, width/2-306/2, height/2-14/2);
			// }
		}
		else{
			background (255)
				image(scritta, width/2-306/2, height/2-14/2);
		}
	}
}

async function createDetector() {
	// Configurazione Media Pipe
	// https://google.github.io/mediapipe/solutions/hands
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 1,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}
