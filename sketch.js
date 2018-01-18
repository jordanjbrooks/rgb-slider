var rusheaSlider;
var georgeSlider;
var bakerSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    // createSlider (min,max,default)
    rusheaSlider = createSlider(0, 255,0);
    rusheaSlider.position(20,20);
    
    georgeSlider = createSlider(0,255,0);
    georgeSlider.position(20,40);
    
    bakerSlider = createSlider(0,255,0);
    bakerSlider.position(20,60);
}




function draw(){
    redValue = rusheaSlider.value();
     greenValue = georgeSlider.value();
     blueValue = bakerSlider.value();
     background(redValue,greenValue,blueValue);
    
}