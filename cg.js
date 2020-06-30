var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor ;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messege");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButton();
    setupSquare();
    reset();
}


function setupModeButton(){
    for(var i = 0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }else{
                numSquares = 6;
            }
            reset();
        })
    }
}

function setupSquare(){
    for(var i =0; i < squares.length; i++){
        //add initial color
       // squares[i].style.backgroundColor = colors[i];
        //add click listener
        squares[i].addEventListener("click",function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedcolor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}

function reset(){
     //generate new colors
     colors = generateRandomColor(numSquares);
     //pick a new picked color
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     messageDisplay.textContent = "";
     resetButton.textContent = "New Colors"
     //change color of square
     for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
     h1.style.backgroundColor = "steelblue";
}


/*easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6 ;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})    */

resetButton.addEventListener("click",function(){
    reset();
})

//colorDisplay.textContent = pickedColor;



function changeColor(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++){
         //change color to picked color
         squares[i].style.backgroundColor = color;
    }
   
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randonColor());
    }
    return arr;
}

function randonColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}