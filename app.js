const squares = document.querySelectorAll('.square');
const orc = document.querySelector('.orc');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');
var swordSoundOne = new Audio('assets/audio/espada-aire.mp3');

let result = 0;
let hitPosition;
let currentTime = 20;
let timerId = null;

function RandomSquare() {
    squares.forEach(square => {
        square.classList.remove('orc');
    });

    let randomSquare = squares[Math.floor(Math.random()* 16 )];
    randomSquare.classList.add('orc');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
            swordSoundOne.play()
           

        }
    });
})

function moveMole() {
    timerId = setInterval(RandomSquare, 550);
}

// let clicked = false
// document.querySelector(".orc").addEventListener("click", whac)

// function whac() {
//     orc.src="assets/images/golem/golem-no-hit.png"
//     clicked = true
//     setTimeout (() => {
//         if(clicked === true){
        
//             orc.src="assets/images/golem/golem-hit.png"
//         clicked = false
//         }
//     }, 200)
    
//     }



function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0) {
        clearInterval(timerId);
        clearInterval(countDownTimerId);
       
        gameEnd();
        
    }
}
        

let countDownTimerId;

function BeginGame() {
    
    
    countDownTimerId = setInterval(countDown, 1000);
    moveMole();
    document.getElementById('btnIniciar').style.display = "none";
    let gameOver = document.getElementById("game-over");
    gameOver.style.display = "none";
    let instructionsButton = document.getElementById("instructions");
    instructionsButton.style.display = "none";
    
}


function gameEnd() {
    
    let scoreText = document.getElementById("scoreTxt");
    scoreText.textContent = `You hitted ${result} ogres, nice job.`
    let gameOver = document.getElementById("game-over");
    gameOver.style.display = "block";
    currentTime = 20;
    result = 0;
}


/* by NiwatoriDev */