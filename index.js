var wdrum = document.getElementsByClassName("w drum");


for (var i=0; i < wdrum.length; i++) {
    wdrum[i].addEventListener('click', playAudio());
}

function playAudio(sound){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}
