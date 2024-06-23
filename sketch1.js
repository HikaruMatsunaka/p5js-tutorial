//引数pを使うことで、各スケッチ関数が独立したスコープを持つ
//これにより、複数のスケッチが同じページに存在しても、互いに干渉しない

let sketch1 = function (p) {
  let mic;
  let volume = 0;
  let threshold = 0.01; // 一定の音量のしきい値

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth / 2, p.windowHeight);
    canvas.parent("canvas1");
    p.background(255);

    mic = new p5.AudioIn();
    mic.start();
  };

  p.draw = function () {
    p.background(255); // 背景を白色で塗りつぶす
    volume = mic.getLevel() * 1.6; // マイクからの音量レベルを取得し、誇張するために5倍する
    let diameter = p.map(volume, 0, 1, 400, p.width * 2.4); // 音量レベルを使って円の直径を計算する

    // 一定の音量を超えた場合に色を変える
    if (volume > threshold) {
      p.fill(20); // 赤に設定
    } else {
      p.fill(0); // 黒に設定
    }

    p.ellipse(p.width / 2, p.height / 2, diameter, diameter); // 中心が画面中央にくるように円を描画する

    // デバッグ用に音量を表示
    p.fill(57, 255, 20);
    p.textSize(16);
    p.textAlign(p.RIGHT, p.TOP); // テキストの配置を右上に設定
    p.text("Volume: " + volume.toFixed(2), p.width - 10, 10); // 右上に表示
  };
};

//インスタンスを生成
//new p5(スケッチ関数, 要素ID)
//p5はp5.jsライブラリで提供されているクラス。このクラスからインスタンスを生成するために、sketch関数と要素IDを引数に渡している。
//javascriptでは、定義したclassからインスタンスを生成する際に、new演算子を使う。
new p5(sketch1, "canvas1");
