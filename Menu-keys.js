//Keys
let keyUp = document.getElementById('up');
let keyLeft = document.getElementById('left');
let keyRight = document.getElementById('right');
let keyDown = document.getElementById('down');
let enterButton = document.getElementById('enter');

//Sounds 
let ambienceChrome = document.getElementById('ambience-1');
ambienceChrome.volume = 1.5;
let coinSound = document.getElementById('insert-coin');


//Events
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
                coinSound.play();
                setTimeout(function(){
                    enterButton.click();
                }, 1800);
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