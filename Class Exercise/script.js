var score = 0;

function count(num) {
    score += num;
    // console.log("is clicked", score);

    if (score < 0) {
        score = 0;
    }

    document.querySelector('h1').innerHTML = score;

    if (score > 10 && score < 21) {

        document.querySelector("#container").style.backgroundColor = 'silver';

    } else if (score > 20 && score < 31) {

        document.querySelector("#container").style.backgroundColor = 'gold';
        
    } else {
        document.querySelector("#container").style.backgroundColor = 'white';
    }
}

function changeBg(bgColor) {
    document.querySelector("#container").style.backgroundColor = bgColor;
}

//add a mouse event to the id
document.getElementById('green-btn').addEventListener('mouseover', overBtn);
document.getElementById('red-btn').addEventListener('mouseover', overBtn);
document.getElementById('blue-btn').addEventListener('mouseover', overBtn);

function overBtn () {
    this.style.backgroundColor = 'gray';
}

document.getElementById('green-btn').addEventListener('mouseout', outBtn);
document.getElementById('red-btn').addEventListener('mouseout', outBtn);
document.getElementById('blue-btn').addEventListener('mouseout', outBtn);

function outBtn() {
    this.style.backgroundColor = 'white';
}

document.getElementById('green-btn').addEventListener('mousedown', downBtn);
document.getElementById('red-btn').addEventListener('mousedown', downBtn);
document.getElementById('blue-btn').addEventListener('mousedown', downBtn);

function downBtn() {
    this.style.backgroundColor = 'black';
}

document.getElementById('green-btn').addEventListener('mouseup', upBtn);
document.getElementById('red-btn').addEventListener('mouseup', upBtn);
document.getElementById('blue-btn').addEventListener('mouseup', upBtn);

function upBtn() {
    this.style.backgroundColor = 'white';
}

