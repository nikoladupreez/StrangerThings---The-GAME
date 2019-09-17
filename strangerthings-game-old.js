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
    createMap(worldStatus);

    if (map.classList.contains('normal')){
        map.classList.remove('normal');
        map.classList.add('upside-down');
    } else {
        map.classList.remove('upside-down');
        map.classList.add('normal');
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
    let yRandom = Math.floor(Math.random() * gameGrid.length);
    let xRandom = Math.floor(Math.random() * gameGrid.length);
    if (gameGrid[yRandom][xRandom] === empty || gameGrid[yRandom][xRandom] === waffle){
        demogorgon = {
            y: yRandom,
            x: xRandom
        };
        gameGrid[demogorgon.y][demogorgon.x] = demogorgonIcon;
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
window.addEventListener('load', function(){
    createMap(worldStatus);  
    start();
});

function start(){
    setInterval(new function(){ placeDemogorgon()}, 5000);
    document.addEventListener('keydown', function(e){
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

        if (checkDemogorgonCollision()){
            alert('Sad, he got ya.');
        } else if (checkPortalCollision()){
            eraseMap();
            eleven.x = 0;
            eleven.y = 10;
            switchMap();
        } else {
            eraseMap();
            createMap(worldStatus);
        };
    });
};






