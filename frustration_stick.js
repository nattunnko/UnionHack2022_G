var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//自機の定義
const playerHeight = 30;
const playerWidth = 30;

//自機の初期位置の定義
let playerX = (canvas.width/2);
let playerY = (canvas.height/2);

//ゴールの定義
const goalHeight = 100;
const goalWidth = 100;

//ゴールの位置の定義
let goalX = (canvas.width/3); 
let goalY =(canvas.height/3);

//マウスの動作を監視
document.addEventListener("mousemove", mouseMoveHandler, false);

//自機の動きをマウスの動きと紐づけ
function mouseMoveHandler(e){
    const relativeX = e.clientX - canvas.offsetLeft;
    const relativeY = e.clientY - canvas.offsetTop;
    if(relativeX > 0 && relativeX < canvas.width){
        playerX = relativeX - playerWidth/2;
    }
    if(relativeY > 0 && relativeY < canvas.height){
        playerY = relativeY - playerHeight/2;
    }
}

//自機を実装
function drawPlayer(){
    ctx.beginPath()
    ctx.rect(playerX, playerY, playerWidth, playerHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//ゴールを実装
function drawGoal(){
    ctx.beginPath();
    ctx.rect(goalX, goalY, goalWidth, goalHeight);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

//ゴールしたか検知
function goalJudge(){
    //プレイヤーの右端がゴールの右端以上　かつ　プレイヤーの左端がゴールの右端以内であればY座標の判定に入る
    if( (playerX + playerWidth) >= goalX && playerX <= (goalX + goalWidth) ) {
        // プレイヤーの下端がゴールの上端以上 かつ プレイヤーの上端がゴールの下端以内であればヒットしているとみなす
        if( (playerY + playerHeight) >= goalY && playerY <= (goalY + goalHeight) ) {
          alert("GOAL!");
          document.location.reload();
          clearInterval(interval);
        }
      }
    }

function draw(){
    ctx.clearRect(0, 0, 900, 750); //各フレームの前にキャンパス消去
    drawPlayer();                  //canvasで制御しようとしたらうまくいかなかったので取り敢えず直接代入
    drawGoal();
    goalJudge();
}
//描画ループの定義
var interval = setInterval(draw, 5);
