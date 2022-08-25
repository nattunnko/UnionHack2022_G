window.addEventListener("load", init);
function init() {
  // Stageオブジェクトを作成。表示リストのルートになります。
  var stage = new createjs.Stage("myCanvas");

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
    var tri3 = new createjs.Shape();
    tri3.graphics.beginFill(stage_color);
    tri3.graphics.moveTo(width,height*4/5);
    tri3.graphics.lineTo(width *5/6,height*4/5 - height/12);
    tri3.graphics.lineTo(width,height*4/5 - height*2/12);
    tri3.graphics.lineTo(width,height*4/5);
    stage.addChild(tri3);

    
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

    // Stageの描画を更新
    stage.update();
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