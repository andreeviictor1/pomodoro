//Botoes de Controle
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Botoes para descanso 

const shortbreakBtn = document.getElementById("short-break");
const longbreakBtn = document.getElementById("long-break");

// Contador das Sessoes
const sessionAmounts = document.getElementById("timer-counter");

//Contador na Sessao
const sessionCounter = document.getElementById("session-counter"); 




// Preparacoes 
let timerInterval;
let secondsRemaining = 1500; // 25 minutos em segundos
let sessionsCompleted = 0;


// Dando inicio as funcoes


function updateTimerDisplay() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    sessionCounter.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }


function starTimer(){
    timerInterval = setInterval(() =>{
        if(secondsRemaining > 0){
            secondsRemaining -- ;
            updateTimerDisplay();
        } else{
            clearInterval(timerInterval);
            sessionsCompleted++;
            sessionAmounts.innerText = `Completed sessions: ${sessionsCompleted}`; 
        }
    }, 1000);
}

function pauseTimer(){
    clearInterval(timerInterval);
}

function resetTimer(){
    clearInterval(timerInterval);
    secondsRemaining = 1500; 
    sessionsCounter = 0;
    sessionsCompleted = 0;
    updateTimerDisplay();
}


function shortTimer(){
    clearInterval(timerInterval);
    secondsRemaining = 300; // 5 minutos em segundos
    updateTimerDisplay();
}

function longTimer(){
    clearInterval(timerInterval);
    secondsRemaining = 900; // 15 minutos em segundos 
    updateTimerDisplay();
}

// Configurando os botoes

startBtn.addEventListener("click", starTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
shortbreakBtn.addEventListener("click", shortTimer);
longbreakBtn.addEventListener("click", longTimer); 