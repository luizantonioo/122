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
    tint(tintColor);  // Escrever igual na linha 10
    fill(255, 0, 0);   // Colocar a cor do preenchimento
    stroke(255, 0, 0);  // Colocar a cor da linha
    circle(50, 50, 80);   // Comando circle, precisa colocar o x, y, raio
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    fill(0, 128, 0);   // Colocar a cor do preenchimento
    stroke(0, 128, 0);  // Colocar a cor da linha
    rect(90, 40, 460, 20);  // Comando rec, precisa colocar o x, y, largura e altura
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
    }



function filtro() {
tintColor = document.getElementById("cor").value;
    }
function takeSnapshot(){
    save('foto.png');
}