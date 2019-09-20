//Keys
let keyUp = document.getElementById('up');
let keyLeft = document.getElementById('left');
let keyRight = document.getElementById('right');
let keyDown = document.getElementById('down');
let enterButton = document.getElementById('enter');

//Sounds 
let ambienceChrome = document.getElementById('ambience-1');
let ambienceRest = document.getElementById('ambience-2');
let coinSound = document.getElementById('insert-coin');


//Events
let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if(!isChrome){
  ambienceChrome.remove()
}
else{
 ambienceRest.remove() //just to make sure that it will not have 2x audio in the background 
};

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