function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(500, 500);
    canvas.position(560, 75);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialised");
}

function gotPoses() {
    if(results.lenght > 0) {
        console.log(results);
    }
}

function draw() {
    background('#82E0AA');
}