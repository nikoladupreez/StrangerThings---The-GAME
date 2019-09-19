//Keys

let keyUp = document.getElementById('up');
let keyLeft = document.getElementById('left');
let keyRight = document.getElementById('right');
let keyDown = document.getElementById('down');
let enter = document.getElementById('enter');

document.addEventListener('keydown', function(e){
        switch (e.key){
            case 'ArrowUp':
                keyUp.style.visibility = 'visible';
                break;
            case 'ArrowDown':
                keyDown.style.visibility = 'visible';
                break;
            case 'ArrowLeft':
                keyLeft.style.visibility = 'visible';
                break;
            case 'ArrowRight':
                keyRight.style.visibility = 'visible';
                break;
            case 'Enter':
                enter.click();
        };
});

document.addEventListener('keyup', function(e){
    switch (e.key){
        case 'ArrowUp':
            keyUp.style.visibility = 'hidden';
            break;
        case 'ArrowDown':
            keyDown.style.visibility = 'hidden';
            break;
        case 'ArrowLeft':
            keyLeft.style.visibility = 'hidden';
            break;
        case 'ArrowRight':
            keyRight.style.visibility = 'hidden';
            break;
    };
});

// Sounds 

// function sound(link) {
//     this.sound = document.createElement("audio");
//     this.sound.src = link;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//       this.sound.play();
//     };
//     this.stop = function(){
//       this.sound.pause();
//     };
//   };

// let buttonSound = new sound('./sounds/476178__unadamlar__correct-choice.wav')
// let coinSound = new sound('./sounds/271295__arnaud-coutancier__insert-coin.wav')
// let strangerMusic = new sound('./sounds/Stranger Things Theme [8 Bit Cover Tribute to Stranger Things] - 8 Bit Universe.mp3')