const squares = document.querySelectorAll('.square');
const orc = document.querySelector('.orc');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');

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
        document.getElementById('btnIniciar').style.display = "block";
        alert("GAME OVER! Tu puntuación final fue de: " + result);
    }
}

let countDownTimerId;

function BeginGame() {
    currentTime = 20;
    countDownTimerId = setInterval(countDown, 1000);
    moveMole();
    document.getElementById('btnIniciar').style.display = "none";
}

//test del branchs
