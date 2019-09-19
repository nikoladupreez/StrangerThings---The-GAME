//---------------------------------------
// Stranger Things Game 
//---------------------------------------

//Score:
let scoreElement = document.getElementById('score');
let score = parseInt(document.getElementById('score').innerHTML);

//Sounds:
//let soundtrack = document.getElementById('strangerthings-song');
let buttonSound = document.getElementById('click-button');
let waffleSound = document.getElementById('waffle-sound');
let foundOtherSound = document.getElementById('found-other');
let gameOverSound = document.getElementById('lose');
let winGameSound = document.getElementById('win');


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

const moveInterval = 400;
const jumpInterval = 15;

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
            waffleSound.play();
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
            waffleSound.play();
            scoreElement.innerHTML = score;
        };
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.y -= 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

function moveLeft(){
    eleven.direction = 'left';
    if (eleven.x != 0) {    
        if (gameGrid[eleven.y][eleven.x - 1] !== wall){
            if (gameGrid[eleven.y][eleven.x - 1] === waffle){
                score++;
                waffleSound.play();
                scoreElement.innerHTML = score;
            };
            gameGrid[eleven.y][eleven.x] = empty;
            eleven.x -= 1;
            gameGrid[eleven.y][eleven.x] = elevenIcon;
        };
    }
};

function moveRight(){
    eleven.direction = 'right';
    if (gameGrid[eleven.y][eleven.x + 1] !== wall){
        if (gameGrid[eleven.y][eleven.x + 1] === waffle){
            score++;
            waffleSound.play();
            scoreElement.innerHTML = score;
        };
        gameGrid[eleven.y][eleven.x] = empty;
        eleven.x += 1;
        gameGrid[eleven.y][eleven.x] = elevenIcon;
    };
};

// DEMOGORGON ------------------------------------------------------------------------------
let demogorgon;
let locationState = waffle;
let jumpCounter = 0;

function moveDemogorgon(){
    
    if (isPaused) return;
    
    if (demogorgon) {
        gameGrid[demogorgon.y][demogorgon.x] = locationState;
    }
    
    if (jumpCounter == 0) {

        do {
            demogorgon = {
                y: Math.floor(Math.random() * gameGrid.length),
                x: Math.floor(Math.random() * gameGrid.length)
            };
        } while (!(gameGrid[demogorgon.y][demogorgon.x] === empty || gameGrid[demogorgon.y][demogorgon.x] === waffle));
        
        jumpCounter = jumpInterval;
    
    } else {
        let path = search(createGraphGrid(), [demogorgon.x, demogorgon.y], [eleven.x, eleven.y]);
        if (path && path.length > 0) {
            demogorgon = {
                y: path[0].y,
                x: path[0].x
            }
        };
        locationState = gameGrid[demogorgon.y][demogorgon.x];
    }
        
    jumpCounter--;
    
    gameGrid[demogorgon.y][demogorgon.x] = demogorgonIcon;

    repaintMap();        

    checkDemogorgonCollision();
};


function createGraphGrid() {
    let graphGrid = [];   
    for (x = 0; x < gameGrid.length; x++){
        let graphCol = [];
        for (y = 0; y < gameGrid.length; y++){
            graphCol.push(gameGrid[y][x] == wall ? 0 : 1);
        }
        graphGrid.push(graphCol);
    }       
    return graphGrid;  
}

function search(graphGrid, start, end) {
    let graph = new Graph(graphGrid);
    let path = astar.search(graph, graph.grid[start[0]][start[1]], graph.grid[end[0]][end[1]]);
    return path;
}

// OTHERS ------------------------------------------------------------------------------
let others = ['mike', 'will', 'dustin', 'lucas'];
let namePlaced;
let nameId;

function positionOthers(reference, iconOther){
    
    do {
        namePlaced = {
            y: Math.floor(Math.random() * gameGrid.length),
            x: Math.floor(Math.random() * gameGrid.length)
        };        
    } while (!(gameGrid[namePlaced.y][namePlaced.x] !== wall && gameGrid[namePlaced.y][namePlaced.x] !== eleven));
    
    switch (reference){
        case 5:
            nameId = 'mike'
            break;
        case 6:
            nameId = 'will'
            break;
        case 7:
            nameId = 'dustin'                  
            break;
        case 8:
            nameId = 'lucas'
            break;
    };

    gameGrid[namePlaced.y][namePlaced.x] = iconOther;
    repaintMap();
};

function chooseName(others){
    let randomIndex = Math.floor(Math.random() * others.length);  
    let name = others[randomIndex];
    let legenda = document.getElementById('legenda');

    if (legenda.classList.contains(name)){
        chooseName(others);
    } else {
        return name;
    };
};

function placeOthers(){
    let name = chooseName(others);
    let icon;
    let referenceNumber;

    switch (name){
        case 'mike':
            icon = mikeIcon;
            referenceNumber = 5;
            break;
        case 'will':
            icon = willIcon;
            referenceNumber = 6;
            break;
        case 'dustin':
            icon = dustinIcon;
            referenceNumber = 7;
            break;
        case 'lucas':
            icon = lucasIcon;
            referenceNumber = 8;
            break;
    };

    positionOthers(referenceNumber, icon);
};

function collectOthers(){
    let legenda = document.getElementById('legenda');
    legenda.classList.add(nameId);

    switch (nameId){
        case 'mike':
            document.getElementById('mike-name').style.opacity = '1';
            break;
        case 'will':
            document.getElementById('will-name').style.opacity = '1';
            break;
        case 'dustin':
            document.getElementById('dustin-name').style.opacity = '1';
            break;
        case 'lucas':
            document.getElementById('lucas-name').style.opacity = '1';
            break;
    };

    foundOtherSound.play();

    if (legenda.classList.contains('mike') && legenda.classList.contains('will') && legenda.classList.contains('dustin') && legenda.classList.contains('lucas')){
        let winGame = document.getElementById('win-game');
        winGame.style.visibility = 'visible';
        winGameSound.play();
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
        gameOver();
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

function checkOthersCollision(){
    if (namePlaced && isCollide(eleven, namePlaced)){
        return true;
    } else {
        return false;
    }
}

// GAME SET UP -----------------------------------------------------------------------------
let isPaused = true;

function hideInstructionCard(){
    let instructions = document.getElementById('start-game');
    let button = document.getElementById('start-button');
    button.addEventListener('click', function(){
        buttonSound.play();
        instructions.style.visibility = 'hidden';
        resumeGame();
    });
};

function showInstructionCard(){
    let instructions = document.getElementById('start-game');
    let button = document.getElementById('instructions-button');
    button.addEventListener('click', function(){
        buttonSound.play();
        instructions.style.visibility = 'visible';
        pauseGame();
    });
};

function gameOver() {
    let gameover = document.getElementById('game-over');
    gameover.style.visibility = 'visible';
    gameOverSound.play();
}


function pauseGame() {
    isPaused = true;
}

function resumeGame() {
    isPaused = false;
}

function start(){
    
    createMap(worldStatus);  
    
    hideInstructionCard();
    showInstructionCard();

    placeOthers();
    moveDemogorgon();
    setInterval(moveDemogorgon, moveInterval);
    
    document.addEventListener('keydown', function(e){
        if (isPaused) return;
            
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

        if (checkDemogorgonCollision()) {
            
        } else if (checkPortalCollision()){
            eraseMap();
            eleven.x = 1;
            eleven.y = 10;
            gameGrid[eleven.y][eleven.x] = elevenIcon;
            gameGrid[portal.y][portal.x] = portalIcon;
            switchMap();
            placeOthers();
        } else if (checkOthersCollision()){
            collectOthers();
        } else {
            repaintMap();        
        };
    });
};

window.addEventListener('load', function(){
   // soundtrack.play();
    start();
});




