window.addEventListener('load' , init);
    function init() {
      // Stageオブジェクトを作成。表示リストのルートになります。
      var stage = new createjs.Stage("myCanvas");

      createjs.Ticker.addEventListener("tick", handleTick);

      let keyitemNumber = 0;
      const keyitem_color ="#000000"
      var star_html = document.getElementById('star-item'); 

      var timerVariable = setInterval(countUpTimer, 1000);
      var totalSeconds = localStorage.getItem("timer");

    function countUpTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        var minute = Math.floor((totalSeconds - hour * 3600) / 60);
        var seconds = totalSeconds - (hour * 3600 + minute * 60);
        document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        localStorage.setItem("timer",totalSeconds);
    }

      /**
     * ゴール判定
     * by　参木
     */
      const haba = 5;
     const player1_color = "#0067C0"
     const goal_color = "Red"
   
     //自機を作成
     var player1 = new createjs.Shape(); 
     player1.graphics.beginFill(player1_color)
     .drawCircle(0, 0, 10);
     stage.addChild(player1);
     player1.x = 40;
     player1.y = 580;//スタート位置
   
     //ゴールの作成
     var goal = new createjs.Shape();
        goal.graphics.beginFill(goal_color) 
        .drawRect(0, 0,20 , 20); // 長方形を描画
        stage.addChild(goal); // 表示リストに追加
        goal.x = 780 -haba;
        goal.y = 580-haba;

    //空アイテムの実装
    var keyitem1 = new createjs.Shape();
    keyitem1.graphics.beginFill(keyitem_color);
    keyitem1.graphics.drawPolyStar(0, 0, 20, 5, 0.6, -90);
    stage.addChild(keyitem1);
    keyitem1.x = 400;
    keyitem1.y = 40;

    //空アイテムの実装
    var keyitem2 = new createjs.Shape();
    keyitem2.graphics.beginFill(keyitem_color);
    keyitem2.graphics.drawPolyStar(0, 0, 20, 5, 0.6, -90);
    stage.addChild(keyitem2);
    keyitem2.x = 730;
    keyitem2.y = 270;

    //空アイテムの実装
    var keyitem3 = new createjs.Shape();
    keyitem3.graphics.beginFill(keyitem_color);
    keyitem3.graphics.drawPolyStar(0, 0, 20, 5, 0.6, -90);
    stage.addChild(keyitem3);
    keyitem3.x = 250;
    keyitem3.y = 565;

    //配列に保存
    keyitemList = [keyitem1,keyitem2,keyitem3];

     
   

      function handleTick(){
      const stage_color = "Green";
      const c_width = stage.canvas.width;
      const c_height = stage.canvas.height;

      /**
       * 十字架を作る関数
       * @param {int} x  x座標
       * @param {int} y  y座標
       * @param {int} width 
       * @param {int} height
       */
      function plus_shape(x,y,width,height){
        var rect1 = new createjs.Shape();
        rect1.graphics.beginFill(stage_color) 
        .drawRect(0, 0, width, height); // 長方形を描画
        stage.addChild(rect1); // 表示リストに追加
        rect1.x = x;
        rect1.y = y;

        var point_rect1 = rect1.globalToLocal(stage.mouseX, stage.mouseY);
        var isHit_rect1 = rect1.hitTest(point_rect1.x, point_rect1.y);

        var rect2 = new createjs.Shape();
        rect2.graphics.beginFill(stage_color) 
        .drawRect(0, 0, width, height); // 長方形を描画
        stage.addChild(rect2); // 表示リストに追加
        rect2.x = x + (height*5);
        rect2.y = y - (width*2/5);
        rect2.rotation = 90;

        var point_rect2 = rect2.globalToLocal(stage.mouseX, stage.mouseY);
        var isHit_rect2 = rect2.hitTest(point_rect2.x, point_rect2.y);

        if(isHit_rect1||isHit_rect2){
            return true;
        }else{
            return false;
        }
      }
      
      var isHit_1 = plus_shape(-c_width/20,c_height/20,c_width/5,c_height/40);
      var isHit_2 = plus_shape(c_width*3/20,c_height/5,c_width/5,c_height/40);
      var isHit_3 = plus_shape(0,c_height/3,c_width/5,c_height/40);
      var isHit_4 = plus_shape(-c_width/30,c_height* 5/8,c_width/5,c_height/40);
      var isHit_5 = plus_shape(c_width/4,c_height/80,c_width/5,c_height/40);
      var isHit_6 = plus_shape(c_width/6,c_height*7/8,c_width/5,c_height/40);
      var isHit_7 = plus_shape(c_width*4/9,c_height*13/16,c_width/5,c_height/40);
      var isHit_8 = plus_shape(c_width*2/3,c_height*15/16,c_width/5,c_height/40);
      var isHit_9 = plus_shape(c_width*2/3,c_height/8,c_width/5,c_height/40);
      var isHit_10 = plus_shape(c_width/2,c_height*3/16,c_width/5,c_height/40);
      var isHit_11 = plus_shape(c_width/3,c_height/4,c_width/5,c_height/40);
      var isHit_12 = plus_shape(c_width/4,c_height* 9/20,c_width/5,c_height/40);
      var isHit_13 = plus_shape(c_width/5,c_height* 2/3,c_width/5,c_height/40);
      var isHit_14 = plus_shape(c_width* 3/4,c_height/3,c_width/5,c_height/40);
      var isHit_15 = plus_shape(c_width* 4/7,c_height*5/12,c_width/5,c_height/40);
      var isHit_16 = plus_shape(c_width*29/56,c_height*15/24,c_width/5,c_height/40);
      var isHit_17 = plus_shape(c_width*7/8,c_height*2/3,c_width/5,c_height/40);
      var isHit_21 = plus_shape(c_width*23/32,c_height*12/16,c_width/5,c_height/40);

      var rect18 = new createjs.Shape();
        rect18.graphics.beginFill(stage_color) 
        .drawRect(0, 0, c_width/10, c_height/20); // 長方形を描画
        stage.addChild(rect18); // 表示リストに追加
        rect18.x = c_width*3/16;
        rect18.y = c_height*5/12;
        rect18.rotation = 90;

    var rect19 = new createjs.Shape();
        rect19.graphics.beginFill(stage_color) 
        .drawRect(0, 0, c_width/10, c_height/20); // 長方形を描画
        stage.addChild(rect19); // 表示リストに追加
        rect19.x = c_width*13/24;
        rect19.y = c_height/3;
        rect19.rotation = 90;

    var rect20 = new createjs.Shape();
        rect20.graphics.beginFill(stage_color) 
        .drawRect(0, 0, c_width/10, c_height/40); // 長方形を描画
        stage.addChild(rect20); // 表示リストに追加
        rect20.x = c_width*11/24;
        rect20.y = c_height*7/12;
        rect20.rotation = 90;

    var rect22 = new createjs.Shape();
        rect22.graphics.beginFill(stage_color) 
        .drawRect(0, 0, c_width/10, c_height/40); // 長方形を描画
        stage.addChild(rect22); // 表示リストに追加
        rect22.x = c_width * 7/12;
        rect22.y = 0;

    var rect23 = new createjs.Shape();
        rect23.graphics.beginFill(stage_color) 
        .drawRect(0, 0, c_width/10, c_height/40); // 長方形を描画
        stage.addChild(rect23); // 表示リストに追加
        rect23.x = c_width - c_height/40;
        rect23.y = c_height/12;
        rect23.rotation = 90;

    var rect24 = new createjs.Shape();
        rect24.graphics.beginFill(stage_color) 
        .drawRect(0, 0, c_width/10, c_height/40); // 長方形を描画
        stage.addChild(rect24); // 表示リストに追加
        rect24.x = c_width *11/14;
        rect24.y = c_height*13/24;

        //canvasの縁の判定
    var edge1 = new createjs.Shape();
    edge1.graphics.beginFill(stage_color);
    edge1.graphics.drawRect(0, 0, haba, c_height); 
    edge1.y = 0;
    edge1.x = 0;
    stage.addChild(edge1);

    //canvasの縁の判定
    var edge2 = new createjs.Shape();
    edge2.graphics.beginFill(stage_color);
    edge2.graphics.drawRect(0, 0, c_width, haba); 
    edge2.y = 0;
    edge2.x = 0;
    stage.addChild(edge2);

     //canvasの縁の判定
     var edge3 = new createjs.Shape();
     edge3.graphics.beginFill(stage_color);
     edge3.graphics.drawRect(0, 0, haba, c_height); 
     edge3.y = 0;
     edge3.x = c_width-haba;
     stage.addChild(edge3);

     //canvasの縁の判定
     var edge4 = new createjs.Shape();
     edge4.graphics.beginFill(stage_color);
     edge4.graphics.drawRect(0, 0, c_width, haba); 
     edge4.y = c_height-haba;
     edge4.x = 0;
     stage.addChild(edge4);
    
    
    
     //tickイベントの登録
     //createjs.Ticker.addEventListener("tick", handleTick);
   
     //function handleTick(){
       //マウス座標の取得
       var mx = stage.mouseX;
       var my = stage.mouseY;
       //自機をマウスに追従
       player1.x = mx;
       player1.y = my;
   
       //ゴールと自機の相対距離
       var point = goal.globalToLocal(stage.mouseX, stage.mouseY);
       //衝突しているか調べる
       var isHit = goal.hitTest(point.x, point.y);
   
       //当たっていたらゴールを呼びだす
       if(keyitemNumber == 3){
        if(isHit == true){
            //document.location.reload();
            location = 'goal-screen.html';
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
        //ステータス画面に現在とった星の数を表示
            
        star_html.innerHTML = keyitemNumber;
      }
    }

    /**
     * 当たり判定
     */
    var point_rect18 = rect18.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect18 = rect18.hitTest(point_rect18.x, point_rect18.y);

    var point_rect19 = rect19.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect19 = rect19.hitTest(point_rect19.x, point_rect19.y);

    var point_rect20 = rect20.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect20 = rect20.hitTest(point_rect20.x, point_rect20.y);

    var point_rect22 = rect22.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect22 = rect22.hitTest(point_rect22.x, point_rect22.y);

    var point_rect23 = rect23.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect23 = rect23.hitTest(point_rect23.x, point_rect23.y);

    var point_rect24 = rect24.globalToLocal(stage.mouseX, stage.mouseY);
    var isHit_rect24 = rect24.hitTest(point_rect24.x, point_rect24.y);

    

    //var point_edge2 = edge2.globalToLocal(stage.mouseX, stage.mouseY);
    //var isHit_edge2 = edge2.hitTest(point_edge2.x, point_edge2.y);

    //var point_edge4 = edge4.globalToLocal(stage.mouseX, stage.mouseY);
    //var isHit_edge4 = edge4.hitTest(point_edge4.x, point_edge4.y);
    
    // あたっていれば
    if (isHit_1||isHit_2||isHit_3||isHit_4||isHit_5||isHit_6||isHit_7||isHit_8
      ||isHit_9||isHit_10||isHit_11||isHit_12||isHit_13||isHit_14||isHit_15||isHit_16
      ||isHit_17||isHit_rect18||isHit_rect19||isHit_rect20||isHit_21||isHit_rect22||isHit_rect23||isHit_rect24
      ) {
          //player1.graphics.beginFill("red").drawRect(0, 0, 20,10);
          location = "result-screen.html"
    }
    
      /*
      // 点を作成します
      var dot = new createjs.Shape();
      //dot.graphics.beginFill("blue").drawCircle(0, 0, 5);
      dot.graphics.beginFill("blue").drawRect(0, 0, 20,10);
      stage.addChild(dot); // 表示リストに追加

      // 時間経過のイベント
      createjs.Ticker.addEventListener("tick", handleTick);
      function handleTick() {
        // ドットのモーションを指定
        dot.x = stage.mouseX;
        dot.y = stage.mouseY;

        // 星からみた相対座標に変換する
        var point = poly.globalToLocal(stage.mouseX, stage.mouseY);

        // 星とドットがあたっているかを調べる
        var isHit = poly.hitTest(point.x, point.y);

        // 四角形からみた相対座標に変換する
        var point_rect = rect.globalToLocal(stage.mouseX, stage.mouseY);

        // 四角形とドットがあたっているかを調べる
        var isHit_rect = rect.hitTest(point_rect.x, point_rect.y);

        // あたっていれば
        if (isHit == true) {
          // 赤色で塗る
          poly.graphics.clear()
                  .beginFill("DarkRed")
                  .drawPolyStar(0, 0, 75, 5, 0.6, -90);
        } else {
          // 緑色で塗る
          poly.graphics.clear()
                  .beginFill("green")
                  .drawPolyStar(0, 0, 75, 5, 0.6, -90);
        }

         // あたっていれば
         if (isHit_rect == true) {
          // 赤色で塗る
          rect.graphics.clear()
                  .beginFill("DarkRed")
                  .drawRect(0, 0, 200,100);
        } else {
          // 緑色で塗る
          rect.graphics.clear()
                  .beginFill("green")
                  .drawRect(0, 0, 200,100);
        }

        */
        // Stageの描画を更新
        stage.update();
      }
    }
