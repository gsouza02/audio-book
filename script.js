let isPlaying = false;
let chapter = 1;
const currentAudio = document.getElementById("currentAudio");
const playPauseButton = document.getElementById("play-pause");
const forwardButton = document.getElementById("proximo");
const backwardButton = document.getElementById("anterior");
const chapterName = document.getElementById("nome");

function allowPlay(){
    if(!isPlaying){
        isPlaying = true;
        currentAudio.play();
        playPauseButton.classList.add("bi-pause-circle-fill");
        playPauseButton.classList.remove("bi-play-circle-fill");
    } else{
        isPlaying = false;
        currentAudio.pause();
        playPauseButton.classList.remove("bi-pause-circle-fill");
        playPauseButton.classList.add("bi-play-circle-fill");
    }
}

function forward(){
    if(chapter === 10){
        chapter = 1;
    }
    else{
        chapter++;
    }
    interections();
}

function interections(){
    isPlaying = true;
    playPauseButton.classList.add("bi-pause-circle-fill");
    playPauseButton.classList.remove("bi-play-circle-fill");
    currentAudio.src = "./books/dom-casmurro/" + chapter + ".mp3"; 
    currentAudio.play();
    chapterName.innerText = "Capítulo " + chapter;
}

function backward(){
    if(chapter === 1){
        chapter = 10;
    }
    else{
        chapter--;
    }
    interections();
}

playPauseButton.addEventListener('click', allowPlay);
forwardButton.addEventListener('click', forward);
backwardButton.addEventListener('click', backward);