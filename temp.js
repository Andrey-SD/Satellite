var rad = 200;
var k=0.3;
var xoff = 240; 
var yoff = 150; 
var pi = Math.PI; 
var inc = pi/300; 
var t=0; 
var alpha=0;
var satellite = document.getElementById("sat");
var ba = document.getElementById("back");
var fr = document.getElementById("front");
function start(){
    var x1_t = (rad * Math.cos(t))
    var y1_t = (rad * k * Math.sin(t))
    var x1 = x1_t * Math.cos(alpha) - y1_t * Math.sin(alpha) + xoff
    var y1 = x1_t * Math.sin(alpha) + y1_t * Math.cos(alpha) + yoff
    t+= inc;
    satellite.style.width =(Math.round(y1/2))+'px';
    satellite.style.height =(Math.round(y1/2))+'px';
    console.log(y1/2);
    satellite.style.top = y1+'px';
    satellite.style.left = x1+'px';
    if (x1==40){fr.style.visibility='visible';}
    if (x1==440){fr.style.visibility='hidden';}
}

setInterval(start,25);