window.addEventListener("load", init);
function init(){
  // Stageオブジェクトを作成
  var stage = new createjs.Stage("myCanvas");

  const player1_color = "#0067C0"
  const goal_color = "#FF0000"
  const height = stage.canvas.height;
  const width = stage.canvas.width;

  //自機を作成
  var player1 = new createjs.Shape(); 
  player1.graphics.beginFill(player1_color);
  player1.graphics.drawCircle(0, 0, 30);
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

    //当たっていたらゴールを呼びだす
    if(isHit == true){
        document.location.reload();
        clearInterval(interval);
    }
    
    //画面の更新
    stage.update();
  }
}