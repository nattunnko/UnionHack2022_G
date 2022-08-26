window.addEventListener("load", init);
    function init() {
      // Stageオブジェクトを作成。表示リストのルートになります。
      var stage = new createjs.Stage("myCanvas");

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
    
