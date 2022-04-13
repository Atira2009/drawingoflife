function setup(){
    x = createCapture(VIDEO);
    x.size(550, 500);
    c = createCanvas(550, 500);
    c.position(570, 100);
    poseNet = ml5.poseNet(x,modelloaded);
    poseNet.on('pose', gotposes)
    ans = "";
}

function draw(){
    background("#ADD8E6");
    textSize(ans);
    fill(0, 102, 153);
    text("PoGLiFe",40,200);
}
function modelloaded(){
    console.log("Initialized PoseNet");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        ans = floor(leftWrist - rightWrist);
    }
}
