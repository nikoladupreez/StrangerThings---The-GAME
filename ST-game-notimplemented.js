function moveDemogorgon(){
    //follow eleven
};

//---------------

// OTHERS ------------------------------------------------------------------------------
//Location of others:
let mike = document.getElementById('mike');
let will = document.getElementById('will');
let dustin = document.getElementById('dustin');
let lucas = document.getElementById('mike');

let others = [
    {name: mike, x: 0, y: 0}, 
    {name: will, x: 0, y: 0}, 
    {name: dustin, x: 0, y: 0}, 
    {name: lucas, x: 0, y: 0}, 
];

function positionOthers(name, icon){
    if (gameGrid[y][x] !== wall && gameGrid[y][x] !== eleven) {
        name = {
            y: Math.floor(Math.random() * gameGrid.length), 
            x: Math.floor(Math.random() * gameGrid.length)
        };
        gameGrid[name.y][name.x] = icon;
    };
};

function placeOthers(icon){

    let randomIndex = Math.floor(Math.random() * others.length)

    if (othersNames[randomIndex].classList.contains('lost')){
    }
};

