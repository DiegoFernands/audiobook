const btnPlayPause = document.getElementById("play-pause")
const btnBack = document.getElementById("back");
const btnNext = document.getElementById("next");
const audioPlay = document.getElementById("audio-play");
const nameChapter = document.getElementById("chapter");
const numberChapter = 10;

let playing = false;
let currentChapter = 1;

function playTrack() {
    audioPlay.play();
    btnPlayPause.classList.remove('bi-play-circle-fill');
    btnPlayPause.classList.add('bi-pause-circle-fill')
}

function pauseTrack() {
    audioPlay.pause();
    btnPlayPause.classList.remove('bi-pause-circle-fill');
    btnPlayPause.classList.add('bi-play-circle-fill');
}

function playPause() {
    if(playing === false) {
        playTrack();
        playing = true;
    } else {
        pauseTrack();
        playing = false;
    }
}

function changeTrackName() {
    nameChapter.innerHTML = `Capítulo ${currentChapter}`
}

function nextTrack() {
    if(currentChapter === numberChapter) {
        currentChapter = 1;
        playTrack();
    } else {
        currentChapter++
    }
    
    audioPlay.src = `/books/dom-casmurro/${currentChapter}.mp3`
    playTrack();
    changeTrackName()
}

function backTrack() {
    if(currentChapter === 1) {
        currentChapter = numberChapter;
        playTrack();
    } else {
        currentChapter--
    }
    audioPlay.src = `/books/dom-casmurro/${currentChapter}.mp3`
    playTrack();
    changeTrackName()
}

btnPlayPause.addEventListener('click', playPause);
btnNext.addEventListener('click', nextTrack);
btnBack.addEventListener('click', backTrack);
