function preload(){

}

function setup(){
        canvas = createCanvas(800,700);
        video = createCapture(VIDEO);
        canvas.position(1000,150);
        video.position(150 , 60 );
        video.size(800,900);
        poseNet = ml5.poseNet(video , modelLoaded);
        poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('Posenet is initiated');
}

function draw(){
background('#d3d3d3')
}

function gotPoses(){
    if(results.length > 0){
            console.log(results);
    }
}