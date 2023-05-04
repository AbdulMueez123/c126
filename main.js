var song = "";
function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}
var song1 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet( video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("poseNet Initialized");
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        RightWristX = result[0].pose.RightWrist.x; 
        RightWristY = result[0].pose.RightWrist.y; 
        console.log("right wrist x = " + RightWristX + "right wrist y = " + RightWristY);
        LeftWristX = result[0].pose.LeftWrist.x; 
        LeftWristY = result[0].pose.LeftWrist.y; 
        console.log("Left wrist x = " + LeftWristX + "Left wrist y = " + LeftWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
    song1.play();
    song1.rate(1);
    song1.setVolume(1);
}