function setup() {
  let canvasParent = document.getElementById("sketch-container");
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent(canvasParent);
}

function draw() {
  background(200);

  // 回転する3Dボックスを描画
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
}
