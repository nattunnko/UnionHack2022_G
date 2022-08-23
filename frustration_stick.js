var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//自機の定義
const playerHeight = 20;
const playerWidth = 20;

//自機の初期位置の定義
let playerX = (canvas.width/2);
let playerY = (canvas.height/2);

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
    ctx.fillstyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0, 0, 900, 750); //各フレームの前にキャンパス消去
    drawPlayer();                  //（canvasで制御しようとしたらうまくいかなかったので取り敢えずcanvasのサイズ直接入れています）
}

//描画ループの定義
var interval = setInterval(draw, 10);
