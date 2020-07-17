var numSquares = 6;
var colors = []; // generateRandomColors(numSquares);
var pickedColor; //= pickColor();

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  //mode buttons event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      $(".mode").removeClass("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setUpSquares() {
  //add click listeners to squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;

      //if the user choses the right color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
     
    } else {//wrong color
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      } //if
      blinkMessage();
    });
  } //for
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  $("#message").text("");
  $("#reset").text("New Colors");
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // add num random colors to array
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = randomColor();
  }
  return arr;
}

function randomColor() {
  //pick green, red and blue between 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//button reset event
$("#reset").click(function () {
  reset();
});

function blinkMessage() {
$("#message").animate({fontSize: "1.5em",letterSpacing: "+=10px" },200,function(){
    $("#message").animate({fontSize: "1em" ,letterSpacing: "-=10px" },200)
    });
}
