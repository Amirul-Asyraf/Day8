var vid = document.getElementById("vid");
var vol = 1;
var isPlaying = false;

function updateVol(volUpdate) {
    vol += volUpdate;
    
    if (vol >= 1) {
        vol = 1;
    } else if (vol <= 0){
        vol = 0;
    } 

    vid.volume = vol;  
}

function switchClick() {
    //check isPlaying true/false

    if(isPlaying == false) {
        vid.play();
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause'></i>";
    } else if(isPlaying == true) {
        vid.pause();
        isPlaying = false;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-play'></i>";
    }
}

function switchVid(fileName) {
    vid.src = fileName;
}