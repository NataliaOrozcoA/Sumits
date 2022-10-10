var numDrums = ((document.querySelectorAll(".drum").length) + 3);

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
});

for( var i = 0 ; i < numDrums ; i++){
    //console.log(i)
    if(i<=3){
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            var buttonInnerHTML = this.innerHTML;
            sound(buttonInnerHTML);
            animation(buttonInnerHTML);
        });
    }else if(i==4){
        document.querySelectorAll(".midDRUM")[0].addEventListener("click", function() {
            var buttonInnerHTML = this.innerHTML;
            sound(buttonInnerHTML);
            animation(buttonInnerHTML);
        });
    }else if(i==5){
        document.querySelectorAll(".largeDRUM")[0].addEventListener("click", function() {
            var buttonInnerHTML = this.innerHTML;
            sound(buttonInnerHTML);
            animation(buttonInnerHTML);
        });
    }else{
        document.querySelectorAll(".bigDRUM")[0].addEventListener("click", function() {
            var buttonInnerHTML = this.innerHTML;
            sound(buttonInnerHTML);
            animation(buttonInnerHTML);
        });
    }
}

function sound(key){
    var t1 = new Audio("sounds/tom-1.mp3");
    var t2 = new Audio("sounds/tom-2.mp3");
    var t3 = new Audio("sounds/tom-3.mp3");
    var t4 = new Audio("sounds/tom-4.mp3");
    var sn = new Audio("sounds/snare.mp3");
    var cr = new Audio("sounds/crash.mp3");
    var ki = new Audio("sounds/kick-bass.mp3");
    switch(key){
        case "w":
            t1.play();
            break;
        case "a":
            t2.play();
            break;
        case "s":
            t3.play();
            break;
        case "d":
            t4.play();
            break;
        case "j":
            sn.play();
            break;
        case "k":
            cr.play();
            break;
        case "l":
            ki.play();
            break;
        default: 
            console.log(key);
            break;
    }
}

function animation(currentKey) {
    var onclick = document.querySelector("." + currentKey);
    onclick.classList.add("pressed");
    setTimeout(function() {
        onclick.classList.remove("pressed");
    }, 100);
}