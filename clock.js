function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
    setInterval(drawClock, 1000);
}

function drawFace(ctx, radius) {
    var grad;
    var rad=radius;

    ctx.beginPath();
    ctx.arc(0, 0, rad+9, 0, 3*Math.PI);
    ctx.strokeStyle = "#1E90FF";
    ctx.lineWidth = 4;
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, rad+7, 0, 5*Math.PI);
    ctx.strokeStyle = "#abcdef";
    ctx.fillStyle = '#1E90FF';
    ctx.lineWidth = 4;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, rad, 0, 3*Math.PI);
    ctx.strokeStyle = "#abcdef";
    ctx.fillStyle = 'white';
    ctx.lineWidth = 3;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw the edge circle with gradient
    // TODO: (Optional) add a gradient circle
    ctx.beginPath();
    ctx.arc(0, 0, rad/12, 0, 2*Math.PI);
    ctx.strokeStyle = "#1E90FF";
    ctx.fillStyle = 'Black';
    ctx.lineWidth = 5;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Center circle
    // TODO: make the central black circle
}

function drawNumbers(ctx, radius) {
    //TODO: Make sure you show all the numbers :)
    var ang;
    var num =1, rad =radius;
    for(num; num<=12;num++){
        ctx.font = rad*0.15 + "px arial";
        ctx.textBaseline="middle";
        ctx.fillStyle = '#349';
        ctx.textAlign="center";
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -rad*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, rad*0.85);
        ctx.rotate(-ang);
    }
    
}

function drawTime(ctx, radius){
    // TODO: Calculate the angles of every hand depending on the time :)
    var now = new Date(), rad = radius;
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour= (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
    hoR1 = rad*0.5;
    hoR2 = rad*0.07;
    drawHand(ctx, hour, hoR1, hoR2);
    // second
    second=(second*Math.PI/30);
    scR1 = rad*0.9;
    scR2 = rad*0.02;
    drawHand(ctx, second, scR1, scR2);
    //minute
    minute=(minute*Math.PI/30) + (second*Math.PI/(30*60));
    miR1 = rad*0.8;
    miR2 = rad*0.07;
    drawHand(ctx, minute, miR1, miR2);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}