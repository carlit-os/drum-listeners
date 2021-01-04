document.getElementById("myBtn").addEventListener("click", playAudio(soundname))



function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}
