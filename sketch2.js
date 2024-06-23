//引数pを使うことで、各スケッチ関数が独立したスコープを持つ
//これにより、複数のスケッチが同じページに存在しても、互いに干渉しない
// sketch2.js
let sketch2 = function (p) {
  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth / 2, p.windowHeight, p.WEBGL);
    canvas.parent("canvas2");
    p.background(200);
  };

  p.draw = function () {
    p.background(200);

    // 本を置くシグニファイア
    p.push();
    p.fill(150);
    p.translate(-p.width / 4, 0, 0);
    p.rotateY(p.frameCount * 0.01);
    p.box(100, 20, 60);
    p.pop();

    p.push();
    p.fill(150);
    p.translate(p.width / 4, 0, 0);
    p.rotateY(p.frameCount * 0.01);
    p.box(100, 20, 60);
    p.pop();
  };
};

//インスタンスを生成
//new p5(スケッチ関数, 要素ID)
//p5はp5.jsライブラリで提供されているクラス。このクラスからインスタンスを生成するために、sketch関数と要素IDを引数に渡している。
//javascriptでは、定義したclassからインスタンスを生成する際に、new演算子を使う。
new p5(sketch2, "canvas2");
