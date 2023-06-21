let images = [];  // Array to store the images
let gridSize = 20;  // Number of images in each row and column (increased by 4)
let imageWidth, imageHeight;  // Width and height of each image

function preload() {
  // Load the images
  for (let i = 0; i < gridSize * gridSize; i++) {
    let imageFilename = `img/image${i % 6}.png`;  // Image filenames and folder
    images.push(loadImage(imageFilename));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);  // Adjust the canvas size as desired
  imageWidth = width / gridSize;
  imageHeight = imageWidth * (images[0].height / images[0].width);  // Calculate height based on aspect ratio
  frameRate(10);  // Adjust the frame rate if needed
}

function draw() {
  scale(0.3);
  translate(windowWidth, windowHeight-windowHeight/10);
  background(255);
  
  for (let i = 0; i < gridSize - 2; i++) {  // Updated loop condition to exclude 2 rows
    for (let j = 0; j < gridSize + 4; j++) {  // Updated loop condition to add 4 columns
      let index = floor(random(images.length));
      let x = j * imageWidth;
      let y = i * imageHeight;
      image(images[index], x, y, imageWidth, imageHeight);
    }
  }
}
