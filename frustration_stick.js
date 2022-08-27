window.addEventListener("load", init);
function init() {
  // Stageオブジェクトを作成。表示リストのルートになります。
  var stage = new createjs.Stage("myCanvas");

  const keyitem_color ="#000000"

  //複数の星との当たり判定のために配列を作成
  var keyitemList = [];
  let keyitemNumber = 0;

  //空アイテムを配置
  
    //空アイテムの実装
    var keyitem1 = new createjs.Shape();
    keyitem1.graphics.beginFill(keyitem_color);
    keyitem1.graphics.drawPolyStar(0, 0, 20, 5, 0.6, -90);
    stage.addChild(keyitem1);
    keyitem1.x = 80;
    keyitem1.y = 200;

    //空アイテムの実装
    var keyitem2 = new createjs.Shape();
    keyitem2.graphics.beginFill(keyitem_color);
    keyitem2.graphics.drawPolyStar(0, 0, 20, 5, 0.6, -90);
    stage.addChild(keyitem2);
    keyitem2.x = 750;
    keyitem2.y = 40;

    //空アイテムの実装
    var keyitem3 = new createjs.Shape();
    keyitem3.graphics.beginFill(keyitem_color);
    keyitem3.graphics.drawPolyStar(0, 0, 20, 5, 0.6, -90);
    stage.addChild(keyitem3);
    keyitem3.x = 430;
    keyitem3.y = 270;

    //配列に保存
    keyitemList = [keyitem1,keyitem2,keyitem3];

    //ステータス画面に現在とった星の数を表示
    
    document.getElementById("star").insertAdjacentHTML('beforeend',String(keyitemNumber));
  

  const stage_color = "Green"//障害物の色 
  const height = stage.canvas.height;
  const width = stage.canvas.width;

    // 四角形を作成します
    var rect1 = new createjs.Shape();
    rect1.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect1.graphics.drawRect(0, 0, width/3, height*0.03); // 長方形を描画
    rect1.y = height *11/12
    rect1.rotation = 350;
    stage.addChild(rect1); // 表示リストに追加

    //三角形
    var tri1 = new createjs.Shape();
    tri1.graphics.beginFill(stage_color);
    tri1.graphics.moveTo(0,height/2);
    tri1.graphics.lineTo(width/5,height/2 + height/9);
    tri1.graphics.lineTo(0,height/2 + height*2/9);
    tri1.graphics.lineTo(0,height/2);
    stage.addChild(tri1);

    //三角形
    var tri2 = new createjs.Shape();
    tri2.graphics.beginFill(stage_color);
    tri2.graphics.moveTo(0,height/2-height/9);
    tri2.graphics.lineTo(width/5,height/2);
    tri2.graphics.lineTo(0,height/2 + height/9);
    tri2.graphics.lineTo(0,height/2);
    stage.addChild(tri2);

    //四角形
    var rect2 = new createjs.Shape();
    rect2.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect2.graphics.drawRect(0, 0, width/3, height*0.05); // 長方形を描画
    rect2.y = height *10/12;
    rect2.x = width/12;
    rect2.rotation = 320;
    stage.addChild(rect2); // 表示リストに追加

    //四角形
    var rect3 = new createjs.Shape();
    rect3.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect3.graphics.drawRect(0, 0, width/3, width/3/2); // 長方形を描画
    rect3.y = height*2/3 - height/6;
    rect3.x = width/3;
    stage.addChild(rect3); // 表示リストに追加

    //三角形
    var tri3 = new createjs.Shape();
    tri3.graphics.beginFill(stage_color);
    tri3.graphics.moveTo(width *2/3,height*10/12);
    tri3.graphics.lineTo(width *2/3 + width /10,height*8/12);
    tri3.graphics.lineTo(width *2/3 + width *2/10,height*10/12);
    tri3.graphics.lineTo(width *2/3,height*10/12);
    stage.addChild(tri3);

    //三角形
    var tri4 = new createjs.Shape();
    tri4.graphics.beginFill(stage_color);
    tri4.graphics.moveTo(width,height*4/5);
    tri4.graphics.lineTo(width *5/6,height*4/5 - height/12);
    tri4.graphics.lineTo(width,height*4/5 - height*2/12);
    tri4.graphics.lineTo(width,height*4/5);
    stage.addChild(tri4);

    
    //円
    var circle1 = new createjs.Shape();
    circle1.graphics.beginFill(stage_color);
    circle1.graphics.drawCircle(0, 0, width/10);
    circle1.y = height*2/3 - height/6;
    circle1.x = width*2/3;
    stage.addChild(circle1);
    
    //四角形
    var rect4 = new createjs.Shape();
    rect4.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect4.graphics.drawRect(0, 0, width/3, height *0.03); // 長方形を描画
    rect4.y = height/3 - height * 0.1;
    rect4.x = width/3;
    stage.addChild(rect4); // 表示リストに追加

    //四角形
    var rect5 = new createjs.Shape();
    rect5.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect5.graphics.drawRect(0, 0, width/6, height *0.03); // 長方形を描画
    rect5.y = height/3 - height * 0.1 - height/12;
    rect5.x = width/3 + width/6;
    rect5.rotation = 90;
    rect5.scaleX = 2.0;
    stage.addChild(rect5); // 表示リストに追加

    //四角形
    var rect6 = new createjs.Shape();
    rect6.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect6.graphics.drawRect(0, 0, width/3, height *0.06); // 長方形を描画
    rect6.y = height/8;
    rect6.x = width/30;
    rect6.rotation = 30;
    stage.addChild(rect6); // 表示リストに追加

    //四角形
    var rect7 = new createjs.Shape();
    rect7.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect7.graphics.drawRect(0, 0, width/5, height /12); // 長方形を描画
    rect7.y = height/8;
    rect7.x = width*4/5;
    stage.addChild(rect7); // 表示リストに追加

    //円
    var circle2 = new createjs.Shape();
    circle2.graphics.beginFill(stage_color);
    circle2.graphics.drawCircle(0, 0, width);
    circle2.y = height/2;
    circle2.x = width*2 - width *0.15;
    circle2.scaleY =0.5;
    stage.addChild(circle2);

    //四角形
    var rect8 = new createjs.Shape();
    rect8.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect8.graphics.drawRect(0, 0, width/5, height /12); // 長方形を描画
    rect8.y = height/12;
    rect8.x = width*2/3;
    stage.addChild(rect8); // 表示リストに追加

    //四角形
    var rect9 = new createjs.Shape();
    rect9.graphics.beginFill(stage_color); // 赤色で描画するように設定
    rect9.graphics.drawRect(0, 0, 40, 200); // 長方形を描画
    rect9.y = 400;
    rect9.x = 400;
    stage.addChild(rect9); // 表示リストに追加


    /**
     * ゴール判定
     * by　参木
     */

     const player1_color = "#0067C0"
     const goal_color = "#FF0000"
   
     //自機を作成
     var player1 = new createjs.Shape(); 
     player1.graphics.beginFill(player1_color);
     player1.graphics.drawCircle(0, 0, 5);
     stage.addChild(player1);
   
     //ゴールの作成
     var goal = new createjs.Shape();
     goal.graphics.beginFill(goal_color);
     goal.graphics.drawRect(0,0,20,20);
     goal.x = 0;
     goal.y = 580;
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
       if(keyitemNumber == 3){
            if(isHit == true){
                //document.location.reload();
                location = 'index2.html';
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

    /**
     * 当たり判定
     * by　なつき
     */
    
    // 四角形からみた相対座標に変換する
    var point_rect1 = rect1.globalToLocal(stage.mouseX, stage.mouseY);
    // 四角形とドットがあたっているかを調べる
    var isHit_rect1 = rect1.hitTest(point_rect1.x, point_rect1.y);

    var point_rect2 = rect2.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect2 = rect2.hitTest(point_rect2.x, point_rect2.y);

    var point_rect3 = rect3.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect3 = rect3.hitTest(point_rect3.x, point_rect3.y);

    var point_rect4 = rect4.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect4 = rect4.hitTest(point_rect4.x, point_rect4.y);

    var point_rect5 = rect5.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect5 = rect5.hitTest(point_rect5.x, point_rect5.y);

    var point_rect6 = rect6.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect6 = rect6.hitTest(point_rect6.x, point_rect6.y);

    var point_rect7 = rect7.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect7 = rect7.hitTest(point_rect7.x, point_rect7.y);

    var point_rect8 = rect8.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect8 = rect8.hitTest(point_rect8.x, point_rect8.y);

    var point_rect9 = rect9.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect9 = rect9.hitTest(point_rect9.x, point_rect9.y);

    var point_tri1 = tri1.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_tri1 = tri1.hitTest(point_tri1.x, point_tri1.y);

    var point_tri2 = tri2.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_tri2 = tri2.hitTest(point_tri2.x, point_tri2.y);

    var point_tri3 = tri3.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_tri3 = tri3.hitTest(point_tri3.x, point_tri3.y);

    var point_tri4 = tri4.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_tri4 = tri4.hitTest(point_tri4.x, point_tri4.y);

    var point_circle1 = circle1.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_circle1 = circle1.hitTest(point_circle1.x, point_circle1.y);

    var point_circle2 = circle2.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_circle2 = circle2.hitTest(point_circle2.x, point_circle2.y);

    // あたっていれば
    if (isHit_rect1||isHit_rect2||isHit_rect3||isHit_rect4||isHit_rect5||isHit_rect6||isHit_rect7||isHit_rect8||isHit_rect9
        ||isHit_tri1||isHit_tri2||isHit_tri3||isHit_tri4||isHit_circle1||isHit_circle2) {
            //player1.graphics.beginFill("red").drawRect(0, 0, 20,10);
            location = "result-screen.html";
    }

    
   /* 
    var allObj = new Array({},rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,tri1,tri2,tri3,circle1,circle2);

    for(var obj in allObj){
        var point = obj.globalToLocal(stage.mouseX, stage.mouseY);
        var isHit = obj.hitTest(point.x, point.y);
        if(isHit){
            alert("GOAL!");
        }
    }
    */
    
    // Stageの描画を更新
    stage.update();
    }
}


/**
 * 障害物
 * @author なつき
 */
/*
const haba =20;
const kankaku = canvas.height/5;//150
const nagasa = 700;
const sukima = 200;

 ctx.beginPath();
 ctx.rect(0, 0, haba, canvas.height);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(canvas.width-haba, 0, haba, canvas.height);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(sukima, 0, nagasa, haba);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(0, kankaku, nagasa, haba);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(sukima, kankaku*2, nagasa, haba);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(0, kankaku*3, nagasa, haba);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(sukima, kankaku*4, nagasa, haba);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(0, canvas.height-haba, nagasa, haba);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();
*/