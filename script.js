let playBtn = document.getElementById("play");
const mp3 = document.getElementById("music");

playBtn.addEventListener("click", playBtnChange);
let playButtonStatus = 0;
// play = 1
// pause = 0

function playBtnChange() {
    if (playButtonStatus == 1) {
        play.src = "/images/icons8-pause-button-50.png";
        playButtonStatus = 0;
        mp3.play();
    }
    else if (playButtonStatus == 0) {
        play.src = "/images/icons8-play-button-50.png";
        playButtonStatus = 1;
        mp3.pause();
    }
}

