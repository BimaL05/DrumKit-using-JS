//button pressed
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {

            var button = this.innerHTML;
            playSound(button);
            buttonAnimation(button);
        });
}

//key pressed
document.addEventListener("keypress", function(event) {
    var button = event.key;
    playSound(button);
    buttonAnimation(button);
});


//play sound when button/key is pressed
function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        
            
        default:
            console.log(button);
            break;
    }
}

function buttonAnimation(currentKey){
    var activateButton = document.querySelector("." + currentKey)

    activateButton.classList.add("pressed");
    setTimeout(function(){
        activateButton.classList.remove("pressed");
    }, 100);
}