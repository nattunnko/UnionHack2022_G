var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/**
 * 障害物
 * @author なつき
 */
function drawObstacle(){
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


    return 
}

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
    drawObstacle();
    drawPlayer();                  //（canvasで制御しようとしたらうまくいかなかったので取り敢えずcanvasのサイズ直接入れています）
}

//描画ループの定義
var interval = setInterval(draw, 10);
