window.addEventListener("load", init);
function init(){
  // Stageオブジェクトを作成
  var stage = new createjs.Stage("myCanvas");

  const player1_color = "#0067C0"
  const goal_color = "#FF0000"
  const keyitem_color ="#000000"
  const height = 900;
  const width = 900;
  let keyitemNumber = 0;

  //自機を作成
  var player1 = new createjs.Shape(); 
  player1.graphics.beginFill(player1_color);
  player1.graphics.drawCircle(0, 0, 20);
  stage.addChild(player1);

  //ゴールの作成
  var goal = new createjs.Shape();
  goal.graphics.beginFill(goal_color);
  goal.graphics.moveTo(400, 400);
  goal.graphics.lineTo(500, 400);
  goal.graphics.lineTo(500, 500);
  goal.graphics.lineTo(400, 500);
  goal.graphics.lineTo(400, 400);
  stage.addChild(goal);

  

  //複数の星との当たり判定のために配列を作成
  var keyitemList = [];

  //空アイテムをランダムに配置
  for (var i = 0; i < 3; i++){
    //空アイテムの実装
    var keyitem = new createjs.Shape();
    keyitem.graphics.beginFill(keyitem_color);
    keyitem.graphics.drawPolyStar(0, 0, 40, 5, 0.6, -90);
    stage.addChild(keyitem);
    keyitem.x = 900 * Math.random();
    keyitem.y = 900 * Math.random();

    //配列に保存
    keyitemList[i] = keyitem;
  }

  //tickイベントの登録
  createjs.Ticker.addEventListener("tick", handleTick);

  function handleTick(){
    //マウス座標の取得
    var mx = stage.mouseX;
    var my = stage.mouseY;
    //自機をマウスに追従
    player1.x = mx;
    player1.y = my;

    //ゴールと自機の相対距離
    var point = player1.localToLocal(0, 0, goal);
    //衝突しているか調べる
    var isHit = goal.hitTest(point.x, point.y);

    //当たっている　かつ　アイテムを３つ取得しているならゴールを呼びだす
    if(keyitemNumber == 3){
      if(isHit == true){
        document.location.reload();
        clearInterval(interval);
      }
    }

    // 複数のアイテムとのアタリ判定をfor文でチェックする
    for (var i = 0; i < keyitemList.length; i++) {
      // 配列の要素を参照する (i番目の星)
      var keyitem = keyitemList[i]; // i 番目の poly を取得

      // 自機とi番目のアイテムの相対座標を求める
      var point = player1.localToLocal(0, 0, keyitem);
      // i番目の星と自機があたっているかを調べる
      var isHit = keyitem.hitTest(point.x, point.y);

      //当たっていればアイテムを消し、取得する
      if(isHit == true){
        keyitem.graphics.clear();
        keyitemNumber++;
      }
    }
    
    //画面の更新
    stage.update();
  }
}