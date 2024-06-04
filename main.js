noseX=0;
noseY=0;


function preload(){
 lentes = loadImage('https://i.postimg.cc/2j9mRC1b/imageedit-1-5013208975.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet esta inicializando');
}

function draw() {
    image(video, 0, 0, 300, 300);
   image(lentes, noseX-42, noseY-50, 90, 80);

}

function take_snapshot(){
    save('myFilterImage.png');
}


function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            noseX = results [0]. pose.nose.x;
            noseY = results [0]. pose.nose.y;
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
}

