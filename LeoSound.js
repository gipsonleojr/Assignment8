// The Script tags lets the browser know we are in JavaScript and not HTML
var audio = new sound("mixkit-space-shuttle-rocket-ignition.mp3");
function simpleCountdown() {
    var currTime = 10;
    for (var i = 0; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer and add ignition sound at Blastoff.
                document.getElementById("simpleTimer").innerHTML = "Blastoff!!!";
                audio.play();
            }, 1000 * i);
        
        } else {
            setTimeout(function () {
                document.getElementById("simpleTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
function playStation() {
    mySound = new sound("mixkit-space-shuttle-rocket-ignition.mp3");
    mySound.play();
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
   
    this.play = function() {
        this.sound.play();
    }
   
}
