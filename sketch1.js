//引数pを使うことで、各スケッチ関数が独立したスコープを持つ
//これにより、複数のスケッチが同じページに存在しても、互いに干渉しない

let sketch1 = function (p) {
  let mic;
  let volume = 0;

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth / 2, p.windowHeight);
    canvas.parent("canvas1");
    p.background(255);

    mic = new p5.AudioIn();
    mic.start();
  };

  p.draw = function () {
    p.background(255);
    volume = mic.getLevel() * 5;
    let diameter = p.map(volume, 0, 1, 200, p.width * 2);
    p.fill(0);
    p.ellipse(p.width / 2, p.height / 2, diameter, diameter);
  };
};

//インスタンスを生成
//new p5(スケッチ関数, 要素ID)
//p5はp5.jsライブラリで提供されているクラス。このクラスからインスタンスを生成するために、sketch関数と要素IDを引数に渡している。
//javascriptでは、定義したclassからインスタンスを生成する際に、new演算子を使う。
new p5(sketch1, "canvas1");
