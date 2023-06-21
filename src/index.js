let images = [];  // Array to store the images
let gridSize = 40;  // Number of images in each row and column
let imageWidth, imageHeight;  // Width and height of each image

function preload() {
  // Load the images
  for (let i = 0; i < gridSize * gridSize; i++) {
    let imageFilename = `img/image${i % 6}.png`;  // Image filenames and folder
    images.push(loadImage(imageFilename));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageWidth = windowWidth / gridSize;
  imageHeight = imageWidth; // Set imageHeight equal to imageWidth to maintain aspect ratio
  frameRate(10);  // Adjust the frame rate if needed
}

function draw() {
  background(255);

  let rowY = (windowHeight - imageHeight) / 2; // Calculate the y position for the row

  for (let i = 0; i < gridSize; i++) {
    let index = floor(random(images.length));
    let x = i * imageWidth;
    let y = rowY;
    let img = images[index];
    let aspectRatio = img.width / img.height;
    let scaledWidth = imageHeight * aspectRatio;
    image(img, x, y, scaledWidth, imageHeight);
  }
}
