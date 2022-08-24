var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/**
 * 障害物
 * @author なつき
 */

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