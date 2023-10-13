function preload(){

}

function setup(){
canvas = createCanvas(640,480);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();
tintColor = "";
}

function draw(){
image(video, 0, 0, 640, 480)
tint(tintcolor);
circle(10,10);
circle(10,480);
circle(480,480);
circle(10,480);
rect(10,10);
rect(480,480);
rect(10,480);
rect(480,10);
ellipse(56, 46, 55, 55);

}

function filtro() {
tintColor = document.getElementById("cor").value;
    }
function takeSnapshot(){
    save('foto.png');
}