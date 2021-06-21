noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
  function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    difference=floor(leftWristX-rightWristX);

   
  }
}

function draw() {
    textSize(noseX, noseY,difference);
    text('Ahana', 100, 280);
    fill(0, 102, 153);
 
  document.getElementById("font_size").innerHTML="Size Of The Font Is:"+difference+"px";
}

