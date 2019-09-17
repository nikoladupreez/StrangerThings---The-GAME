//---------------------------------------
// Stranger Things Game 
//---------------------------------------

//Score:
let scoreElement = document.getElementById('score');
let score = parseInt(document.getElementById('score').innerHTML);

//GRID -----------------------------------------------------------------------------
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
const dustinIcon = 7;
const lucasIcon = 8;
const portalIcon = 9;

function createBlocks(grid){
    let blocksArray = [];

    for (i = 0; i < grid.length; i++){
        for (j = 0; j < grid.length; j++){
            let block = document.createElement('DIV');
            block.classList.add('block');

            switch (grid[i][j]){
                case empty:
                    block.classList.add('empty')
                    break;
                case wall:
                    block.classList.add('wall');
                    break;
                case waffle:
                    block.classList.add('waffle');
                    break;
                case elevenIcon:
                    block.id = 'eleven';
                    break;
                case demogorgonIcon: 
                    block.id = 'demogorgon';
                    break;
                case mikeIcon: 
                    block.id = 'mike';
                    break;
                case willIcon:
                    block.id = 'will';
                    break;
                case dustinIcon:
                    block.id = 'dustin';
                    break;
                case lucasIcon:
                    block.id = 'lucas';
                    break;
                case portalIcon:
                    block.classList.add('portal');
                    break;
            };

            blocksArray.push(block);
        };

        let brBlock = document.createElement('BR');
        blocksArray.push(brBlock);
    };

    return blocksArray;
};

//MAP -----------------------------------------------------------------------------

let map;
let worldStatus = 'normal';

function createMap(world){
    map = document.createElement('DIV');
    map.id = 'map';
    map.classList.add(world);
    let blocks = createBlocks(gameGrid);

    for (i = 0; i < blocks.length; i++){
        map.appendChild(blocks[i]);
    };

    let container = document.getElementById('main');
    let referenceNode = document.getElementById('legenda');
    container.insertBefore(map, referenceNode);
};

function switchMap(){
    let particles = document.querySelector('#particles_upsidedown');
    createMap(worldStatus);

    if (map.classList.contains('normal')){
        map.classList.remove('normal');
        map.classList.add('upside-down');
        particles.style.visibility = 'visible';
    } else {
        map.classList.remove('upside-down');
        map.classList.add('normal');
        particles.style.visibility = 'hidden';
    };
};

function eraseMap(){
    if (map.classList.contains('normal')){
        worldStatus = 'normal';
    } else {
        worldStatus = 'upside-down';
    }

    let container = document.getElementById('main');
    container.removeChild(map);
};

function repaintMap() {
    eraseMap();
    createMap(worldStatus);    
}


// ELEVEN ------------------------------------------------------------------------------
//Location of eleven: 
let eleven = {
    x: 0,
    y: 10,
    direction: 'right'
};

//Movement functions:
function moveDown(){
    eleven.direction = 'down';
    if (gameGrid[eleven.y + 1][eleven.x] !== wall){
        if (gameGrid[eleven.y + 1][eleven.x] === waffle){
            score++;
            scoreElement.innerHTML = score;
        };
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.y += 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function moveUp(){
    eleven.direction = 'up';
    if (gameGrid[eleven.y - 1][eleven.x] !== wall){
        if (gameGrid[eleven.y - 1][eleven.x] === waffle){
            score++;
            scoreElement.innerHTML = score;
        };
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.y -= 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function moveLeft(){
    eleven.direction = 'left';
    if (gameGrid[eleven.y][eleven.x - 1] !== wall){
        if (gameGrid[eleven.y][eleven.x - 1] === waffle){
            score++;
            scoreElement.innerHTML = score;
        };
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.x -= 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function moveRight(){
    eleven.direction = 'right';
    if (gameGrid[eleven.y][eleven.x + 1] !== wall){
        if (gameGrid[eleven.y][eleven.x + 1] === waffle){
            score++;
            scoreElement.innerHTML = score;
        };
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.x += 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

// DEMOGORGON ------------------------------------------------------------------------------
let demogorgon;

function placeDemogorgon(){
    if (demogorgon) {
        gameGrid[demogorgon.y][demogorgon.x] = waffle;
    }
    let yRandom = Math.floor(Math.random() * gameGrid.length);
    let xRandom = Math.floor(Math.random() * gameGrid.length);
    if (gameGrid[yRandom][xRandom] === empty || gameGrid[yRandom][xRandom] === waffle){
        demogorgon = {
            y: yRandom,
            x: xRandom
        };
        gameGrid[demogorgon.y][demogorgon.x] = demogorgonIcon;
        repaintMap();        
    } else {
        placeDemogorgon();
    };
};

// COLLISIONS ------------------------------------------------------------------------------
function isCollide(icon1, icon2){
    if (icon1.y === icon2.y && icon1.x === icon2.x){
        return true
    } else {
        return false
    };
};

function checkDemogorgonCollision(){
    if (isCollide(eleven, demogorgon)){
        return true
    } else {
        return false;
    };
};

let portal = {
    x: 21,
    y: 10
};

function checkPortalCollision(){
    if (isCollide(eleven, portal)){
        return true;
    } else {
        return false;
    };
};

// GAME SET UP -----------------------------------------------------------------------------
function hideInstructionCard(){
    let instructions = document.getElementById('start-game');
    let button = document.getElementById('start-button');
    button.addEventListener('click', function(){
        instructions.style.visibility = 'hidden';
    });
};

function showInstructionCard(){
    let instructions = document.getElementById('start-game');
    let button = document.getElementById('instructions-button');
    button.addEventListener('click', function(){
        instructions.style.visibility = 'visible';
    });
};

function start(){
    placeDemogorgon();
    setInterval(placeDemogorgon, 4000);

    hideInstructionCard();
    showInstructionCard();

    document.addEventListener('keydown', function(e){
        if (map.classList.contains('normal')){
            switch (e.key){
                case 'ArrowUp':
                    moveUp();
                    break;
                case 'ArrowDown':
                    moveDown();
                    break;
                case 'ArrowLeft':
                    moveLeft();
                    break;
                case 'ArrowRight':
                    moveRight();
                    break;
            };

        } else {
            switch (e.key){
                case 'ArrowUp':
                    moveDown();
                    break;
                case 'ArrowDown':
                    moveUp();
                    break;
                case 'ArrowLeft':
                    moveRight();
                    break;
                case 'ArrowRight':
                    moveLeft();
                    break;
            };
        };

        if (checkDemogorgonCollision()){
            let gameover = document.getElementById('game-over');
            gameover.style.visibility = 'visible';
        } else if (checkPortalCollision()){
            eraseMap();
            eleven.x = 1;
            eleven.y = 10;
            gameGrid[eleven.y][eleven.x] = elevenIcon;
            gameGrid[portal.y][portal.x] = portalIcon;
            switchMap();
        } else {
            repaintMap();        
        };
    });
};

window.addEventListener('load', function(){
    createMap(worldStatus);  
    start();
});






