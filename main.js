canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_images_array = ["th (2).jpg","th (3).jpeg", "th (4).jpg", "mars.jpg"];
random_number = Math.floor(Math.random() * 4);
 console.log(random_number);

rover_width=100;
rover_height=100;
background_image=nasa_mars_images_array[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_image1=new Image();
    background_image1.onload=uploadbackground;
    background_image1.src=background_image;
    background_image2=new Image();
    background_image2.onload=uploadrover;
    background_image2.src=rover_image;

}
function uploadbackground(){
    ctx.drawImage(background_image1,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(background_image2,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",deepakkeydown);
function deepakkeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
       down();
        console.log("down");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
}
function up(){
if (rover_y>=0){
    rover_y=rover_y-10;
    console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
    uploadbackground();
    uploadrover();
}
}
function down(){
    if (rover_y<=350){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
    }
    function right(){
        if (rover_x<=500){
            rover_x=rover_x+10;
            console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
            uploadbackground();
            uploadrover();
        }
        }
        function left(){
            if (rover_x>=0){
                rover_x=rover_x-10;
                console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                uploadbackground();
                uploadrover();
            }
            }
