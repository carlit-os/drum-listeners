document.getElementByClassName("w drum").addEventListener("click", playAudio());


function playAudio(sound){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}
