var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/**
 * 障害物
 * @author なつき
 */

 ctx.beginPath();
 ctx.rect(0, 0, 20, canvas.height);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(canvas.width-20, 0, 20, canvas.height);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(200, 0, 700, 20);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(0, 150, 700, 20);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(200, 300, 700, 20);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(0, 450, 700, 20);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(200, 600, 700, 20);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();

 ctx.beginPath();
 ctx.rect(0, canvas.height-20, 700, 20);
 ctx.fillStyle = "#0095DD";
 ctx.fill();
 ctx.closePath();