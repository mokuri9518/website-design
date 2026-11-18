const canvas = document.getElementById("main");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");
function draw_half() {
    
    ctx.fillStyle = '#fdea94';
    ctx.fillRect(0,0,400,400);
    ctx.beginPath();
    ctx.arc(200,200,100,Math.PI,0);
            ctx.lineTo(100,200);
            ctx.strokeStyle = '#e07072';
            ctx.fillStyle='#e07072';
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.fillRect(100,205,200,3);
            ctx.font = "20px Arial";
            ctx.fillText("HALF CIRCLE", 10, 380);
}
function draw_90(){
            ctx.fillStyle = '#266b39';
            ctx.fillRect(0,0,400,400);
            ctx.beginPath();
            ctx.arc(50,50,250,0,Math.PI/2);
            ctx.lineTo(50,50);
            ctx.strokeStyle = '#f6ec93';
            ctx.fillStyle='#f6ec93';
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(350,350,175,Math.PI,-Math.PI/2);
            ctx.lineTo(350,350);
            ctx.strokeStyle = '#ffba93';
            ctx.fillStyle='#ffba93';
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.font = "20px Arial";
            ctx.fillText("QUADRANT 90°", 10, 380);
}
function draw_270(){
            ctx.fillStyle = '#fd9069';
            ctx.fillRect(0,0,400,400);
            ctx.beginPath();
            ctx.arc(200,200,125,0,-Math.PI/2);
            ctx.lineTo(200,200);
            ctx.strokeStyle = '#efd879';
            ctx.fillStyle='#efd879';
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(220,180,90,-Math.PI/2,0);
            ctx.lineTo(220,180);
            ctx.strokeStyle = '#af6170';
            ctx.fillStyle='#af6170';
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.font = "20px Arial";
            ctx.fillText("THREE QUARTERS 270°", 10, 380);
}
function draw_arc(){
            ctx.fillStyle = '#fcc5b0';
            ctx.fillRect(0,0,400,400);
            ctx.beginPath();
            ctx.arc(200,275,100,-(Math.PI)*(1-1/6),-Math.PI/6);
            ctx.arc(200,275,85,-Math.PI/6,-(Math.PI)*(1-1/6),true);
            ctx.strokeStyle = '#d5693e';
            ctx.fillStyle='#d5693e';
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(200,275,130,-(Math.PI)*(1-1/6),-Math.PI/6);
            ctx.arc(200,275,155,-Math.PI/6,-(Math.PI)*(1-1/6),true);
            ctx.strokeStyle = '#1b4d0e';
            ctx.fillStyle='#1b4d0e';
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.font = "20px Arial";
            ctx.fillText("OPEN ARC 120°", 10, 380);
}