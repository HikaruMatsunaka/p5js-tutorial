//引数pを使うことで、各スケッチ関数が独立したスコープを持つ
//これにより、複数のスケッチが同じページに存在しても、互いに干渉しない
// sketch2.js
let sketch2 = function (p) {
  let textOpacity = 255; // テキストの初期透明度
  let deltaOpacity = -4; // 透明度の変化量

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth / 2, p.windowHeight);
    canvas.parent("canvas2");
    p.background(255);
    p.textSize(20); // テキストのサイズを24に固定
    p.textAlign(p.CENTER, p.CENTER); // テキストの配置を中央揃えに設定
  };

  p.draw = function () {
    p.background(255);

    // テキストの描画
    p.fill(10, 10, 10, textOpacity); // 黒色のテキスト、透明度を反映
    p.text(
      "本を撮影して、ここに立てかけてください。",
      p.width / 2,
      p.height / 2
    ); // 中央に配置

    // 透明度の更新
    textOpacity += deltaOpacity;
    if (textOpacity >= 255 || textOpacity <= 50) {
      deltaOpacity *= -1; // 透明度が255または50を超えたら反転する
    }
  };
};

//インスタンスを生成
//new p5(スケッチ関数, 要素ID)
//p5はp5.jsライブラリで提供されているクラス。このクラスからインスタンスを生成するために、sketch関数と要素IDを引数に渡している。
//javascriptでは、定義したclassからインスタンスを生成する際に、new演算子を使う。
new p5(sketch2, "canvas2");
