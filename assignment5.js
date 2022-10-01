var butterfly = document.querySelector(".butterfly"),
    interval = 1500,
    timer,
    score = 0,
    resetScore = document.querySelector(".resetScore"),
    resetSpeed = document.querySelector(".resetSpeed");

function randomLocation() {
    butterfly.style.top = (Math.random() * 490) + "px";
    butterfly.style.left = (Math.random() * 930) + "px";
}

function intervalEvent() {
    timer = window.setInterval(randomLocation, interval);
}

function updateStatus() {
    score++;
    document.querySelector(".score").innerHTML = score;
    randomLocation();
    interval = interval - 100;
    clearInterval(timer);
    intervalEvent();
}

resetScore.addEventListener("click", function(){
    score = 0;
    document.querySelector(".score").innerHTML = score;
    alert("Reset Score!");
})

resetSpeed.addEventListener("click", function(){
    interval = 1500;
    clearInterval(timer);
    intervalEvent();
    alert("Reset Speed!");
})


function setUpPage() {
    intervalEvent();
}

butterfly.addEventListener("click", updateStatus, false);
window.addEventListener("load", setUpPage, false);

