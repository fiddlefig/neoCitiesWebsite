let play = document.getElementById("play");

play.addEventListener("click", playBtn);
let buttonChange = 0;
// play = 0
// pause = 1

function playBtn() {
    if (buttonChange == 0) {
        play.src = "/images/icons8-pause-button-50.png";
        buttonChange = 1;
    }
    else if (buttonChange == 1) {
        play.src = "/images/icons8-play-button-50.png";
        buttonChange = 0;
    }
}

