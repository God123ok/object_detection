
img = "";
status = "";
objects = [];
function preload(){
img = loadImage('dog_cat.jpg');
}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}
function draw() {
    image(video, 0,0, 380, 380)

    if(status != "")
    {
        objectsDetector.detect(video, gotResult);
        for (1 = 0; 1 <objects.leangth; 1++)
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number : object detected are : "+ objects.leangth;

        fill(r,g,b) ;
        percent = floor(objects[1].confidence * 100);
        text(objects[1].label +" "+ percent + "%", objects[i].x, objects[i].y );
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[1].width, objects[i].height);
     
    }
    }
    fill("FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("FF000");
    rect(30, 60, 450, 350);

    fil("FF000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF000");
    rect(300, 90, 270,320);
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    ObjectDetector.destector.detect(video, gotResut);
}
function gotResult(error, resuts) {
    if (error) {
        console.log(error);
    
    }
    console.log(results);
    objects = rresults;
}
