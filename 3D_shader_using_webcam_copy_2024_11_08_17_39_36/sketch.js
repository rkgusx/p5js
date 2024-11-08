/*
 * @name Shader Using Webcam
 * @arialabel Neon texture added to the scene displayed by the user’s built-in webcam
 * @description The webcam can be passed to shaders as a texture.
 * <br> To learn more about using shaders in p5.js: <a href="https://itp-xstory.github.io/p5js-shaders/">p5.js Shaders</a>
 */

// this variable will hold our shader object
let theShader;
// this variable will hold our webcam video
let cam;

function preload() {
  // load the shader
  theShader = loadShader('assets/webcam.vert', 'assets/webcam.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);

  cam.hide();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  // passing cam as a texture
  theShader.setUniform('tex0', cam);

  // circle gives us a circular geometry on the screen
  ellipse(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cam.size(windowWidth, windowHeight);
}