document.getElementsByClassName("w drum").addEventListener("click", playAudio(tom-1))


function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}
