var igUpload;

function preload(){
    igUpload = loadImage("745x497-zendaya.jpg");
}

function setup(){
    createCanvas(igUpload.width,igUpload.height);
    background(0);
}

function draw(){
    background(0);
    image(igUpload,0,0);
    loadPixels();
    
    for(var row = 0; row<height; row++){
        for(var col = 0; col<width; col++){
            var index = (row * width + col)* 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            if(keyIsPressed){
                if(key=="r"){
                    rainbow(index, col, row, g, a);
                } 
                if(key=="1"){
                    hotdog(index,g);
                } 
                if(key=="2"){
                    pixels[index] = 0;
                    pixels[index + 1] = g;
                    pixels[index + 2] = 0;
                    pixels[index + 3] = a;
                }
                if(key=="3"){
                    pixels[index] = r;
                    pixels[index + 1] = b;
                    pixels[index + 2] = g;
                    pixels[index + 3] = a;
                }
                if(key=="4"){
                    pixels[index] = r/2;
                    pixels[index + 1] = g/2;
                    pixels[index + 2] = b/2;
                    pixels[index + 3] = a;
                }
                if(key=="5"){
                    pixels[index] = r*2;
                    pixels[index + 1] = g*2;
                    pixels[index + 2] = b*2;
                    pixels[index + 3] = a;
                }
                if(key=="6"){
                    pixels[index] = 255 - r;
                    pixels[index + 1] = 255 - g;
                    pixels[index + 2] = 255 - b;
                    pixels[index + 3] = a;
                }
                if(key=="7"){
                    pixels[index] = r + row - 190;
                    pixels[index + 1] = g + col -190;
                    pixels[index + 2] = b;
                    pixels[index + 3] = a;
                }
                if(key=="8"){
                    pixels[index] = r + 150;
                    pixels[index + 1] = g - 155;
                    pixels[index + 2] = b + 155;
                    pixels[index + 3] = a;
                }
                if(key=="9"){
                    pixels[index] = r;
                    pixels[index + 1] = g + 150;
                    pixels[index + 2] = b - 255;
                    pixels[index + 3] = a;
                }
                if(key=="0"){
                    pixels[index] = r - 180;
                    pixels[index + 1] = g + 150;
                    pixels[index + 2] = b + 25;
                    pixels[index + 3] = a;
                }
                
            }
            
            
        }
    }

    updatePixels();

}

function rainbow(index, col, row, g, a){
    pixels[index] = col;
    pixels[index + 1] = g;
    pixels[index + 2] = row;
    pixels[index + 3] = a;
}

function hotdog(index, g){
                    pixels[index] = g;
                    pixels[index + 1] = g;
                    pixels[index + 2] = g;
                    pixels[index + 3] = a;
}

function hambuger(index,a ){
                    pixels[index] = 0;
                    pixels[index + 1] = g;
                    pixels[index + 2] = 0;
                    pixels[index + 3] = a;
}

function corn(index, g){
                    pixels[index] = 0;
                    pixels[index + 1] = g;
                    pixels[index + 2] = 0;
                    pixels[index + 3] = a;
}
