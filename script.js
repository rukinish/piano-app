function playsound(note) {
    
    var audio = new Audio("sounds/" + note + ".mp3");
    audio.play();
    
}