
function setup(){
    canvas=createCanvas(360,360);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,360,360);
}
function start(){
    objectDectector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}
function modelLoaded(){
    console.log("Model is Loaded!!!");
}