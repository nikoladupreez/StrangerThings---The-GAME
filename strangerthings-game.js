//---------------------------------------
// Stranger Things Game 
//---------------------------------------

//General data --------------------

let gameGrid = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 9],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

//Grid labels: 
const empty = 0;
const wall = 1; 
const waffle = 2; 
const elevenIcon = 3; 
const demogorgonIcon = 4;
const mikeIcon = 5;
const willIcon = 6;
const name3Icon = 7;
const name4Icon = 8;
const portal = 9;

//Location of eleven: 
let eleven = {
    x: 0,
    y: 10,
    direction: 'right'
};

//Location of demogorgon:
let demogorgon;

//Location of others:
let mike;
let will;
let name3;
let name4;

//Map of the game:
let map;

//Map creation functions ---------------

function createBlocks(grid){
    let blocksArray = [];

    for (i = 0; i < grid.length; i++){
        for (j = 0; j < grid.length; j++){
            let block = document.createElement('DIV');
            block.classList.add('block');

            switch (grid[i][j]){
                case wall:
                    block.classList.add('wall');
                    break;
                case waffle:
                    block.classList.add('waffle');
                    break;
                case elevenIcon:
                    block.classList.add('eleven');
                    block.classList.add(eleven.direction);
                    break;
                case demogorgon: 
                    block.classList.add('demogorgon');
                    break;
                case portal:
                    block.classList.add('portal');
                case empty:
                    block.classList.add('empty')
                    break;
            };

            blocksArray.push(block);
        };

        let brBlock = document.createElement('BR');
        blocksArray.push(brBlock);
    };

    return blocksArray;
};

function createMap(){
    map = document.createElement('DIV');
    map.classList.add('map');
    let blocks = createBlocks(gameGrid);

    for (i = 0; i < blocks.length; i++){
        map.appendChild(blocks[i]);
    };

    document.body.appendChild(map);
};

function eraseMap(){
    document.body.removeChild(map);
};

//Movement functions: Eleven ---------------

function moveDown(){
    eleven.direction = 'down';
    if (gameGrid[eleven.y + 1][eleven.x] !== wall){
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.y += 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function moveUp(){
    eleven.direction = 'up';
    if (gameGrid[eleven.y - 1][eleven.x] !== wall){
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.y -= 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function turnLeft(){
    eleven.direction = 'left';
    if (gameGrid[eleven.y][eleven.x - 1] !== wall){
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.x -= 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function turnRight(){
    eleven.direction = 'right';
    if (gameGrid[eleven.y][eleven.x + 1] !== wall){
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.x += 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function keyboardControls(){
    document.addEventListener('keydown', function(e){
        //if (//normal){
            switch (e.key){
                case 'ArrowUp':
                    moveUp();
                    break;
                case 'ArrowDown':
                    moveDown();
                    break;
                case 'ArrowLeft':
                    turnLeft();
                    break;
                case 'ArrowRight':
                    turnRight();
                    break;
            };
        //  } else if (//upside down){
        //     switch (e.key){
        //         case 'ArrowUp':
        //             moveDown();
        //             break;
        //         case 'ArrowDown':
        //             moveUp();
        //             break;
        //         case 'ArrowLeft':
        //             moveRight();
        //             break;
        //         case 'ArrowRight':
        //             moveLeft();
        //             break;
        //     };
       // };

        eraseMap();
        createMap();
    });
};

//Collision other characters ---
function collision(icon1, icon2){
    //instructions!
};

//Demogorgon -------------------
function placeDemogorgon(){
    if (gameGrid[y][x] !== wall || gameGrid[y][x] !== eleven){ //also not others? ) {
        demogorgon = {
            y: Math.floor(Math.random() * gameGrid.length), 
            x: Math.floor(Math.random() * gameGrid.length)
        };
        gameGrid[demogorgon.y][demogorgon.x] = demogorgonIcon;
    };
};

function moveDemogorgon(){
    setInterval(placeDemogorgon(), 5000);
    //follow eleven
    //if collision with eleven--> game over
};

// demogorgon appears and disappears randomly in grid. does not affect waffles!

//Others -----------------------
function positionOthers(name, icon){
    if (gameGrid[y][x] !== wall || gameGrid[y][x] !== eleven) {
        name = {
            y: Math.floor(Math.random() * gameGrid.length), 
            x: Math.floor(Math.random() * gameGrid.length)
        };
        gameGrid[name.y][name.x] = icon;
    };
};

function placeOthers(icon){
    //make array of names --> randomizer to choose index 
    positionOthers(name, icon);
    //look up how to 'collect' things, placement of same icon a second time 
    //if collision with eleven, collect. if collision with all --> win game
};

//Switch between scenes --------

//!!!!!!!
// if you go through door you randomly go to either normal map or upside down map


//Set up game -------------------

function setUpGame(){
    createMap();
    keyboardControls();
};

setUpGame();

// each waffle = score++
// optional: y = 10 x= 0, start eleven, but if she moves away, then that becomes a door also?




