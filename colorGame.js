var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

for(var i=0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        document.querySelector("h1").style.backgroundColor = clickedColor;
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
});
}//for 

function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;        
    }
    //squares.style.backgroundColor = "red";
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // add num random colors to array
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor(){
    //pick green, red and blue between 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}