//---------------------------------------
// Stranger Things - The Game 
//---------------------------------------
window.addEventListener('load', function(){
     new Game().setUpGame();
 });

//------------ GAME ---------------
class Game {
    constructor() {
        this.isPaused = true;
        this.map = new Map();
        this.eleven = new Eleven(this);
        this.demogorgon = new Demogorgon(this);
        this.others = new Others(this);
        this.portal = {
                        x: 21,
                        y: 10
                      };
        this.soundtrack = document.getElementById('soundtrack');
        this.buttonSound = document.getElementById('click-button');
        this.portalSound = document.getElementById('portal-sound');
        this.gameOverSound = document.getElementById('lose');
        this.winGameSound = document.getElementById('win');
    }

    setUpGame() {
        this.map.create(this.map.worldStatus);
        this.hideInstructionCard();
        this.showInstructionCard();
        this.goToMenu();
        this.yesSound();
        this.noSound();
        this.start();
    }

    hideInstructionCard() {
        let fixThis = this;
        let instructions = document.getElementById('start-game');
        let button = document.getElementById('start-button');
        button.addEventListener('click', function () {
            fixThis.buttonSound.play();
            instructions.style.visibility = 'hidden';
            fixThis.resumeGame();
        });
    }

    showInstructionCard() {
        let fixThis = this;
        let instructions = document.getElementById('start-game');
        let button = document.getElementById('instructions-button');
        button.addEventListener('click', function () {
            fixThis.buttonSound.play();
            instructions.style.visibility = 'visible';
            fixThis.pauseGame();
        });
    }

    goToMenu() {
        let button = document.getElementById('menu-button');
        let fixThis = this;
        button.addEventListener('click', function () {
            fixThis.buttonSound.play();
            setTimeout(function(){
                window.location = './index.html';
            }, 500);
        });
    }

    yesSound() {
        let button = document.getElementById('yes-button');
        let fixThis = this;
        button.addEventListener('click', function () {
            fixThis.buttonSound.play();
            setTimeout(function(){
                window.location = './game-index.html';
            }, 500);
        });
    }

    noSound() {
        let button = document.getElementById('no-button');
        let fixThis = this;
        button.addEventListener('click', function () {
            fixThis.buttonSound.play();
            setTimeout(function(){
                window.location = './index.html';
            }, 500);
        });
    }

    start() {
        let fixThis = this;
        this.others.placeOthers();
        this.demogorgon.moveDemogorgon();
        setInterval(function(){
            fixThis.demogorgon.moveDemogorgon()
        }, this.demogorgon.moveInterval);
        window.addEventListener('keydown', function () {
            if (fixThis.checkPortalCollision()) {
                fixThis.portalSound.play();
                fixThis.map.erase();
                fixThis.map.switch();
                fixThis.updateLocation();
                fixThis.others.placeOthers();
            } else if (fixThis.others.checkOthersCollision()) {
                fixThis.others.collectOthers();
            } else if (fixThis.demogorgon.checkDemogorgonCollision()) {
                fixThis.gameOver();
            } else {
                fixThis.map.repaint();
            }
        });
    }

    pauseGame() {
        this.isPaused = true;
    }

    resumeGame() {
        this.isPaused = false;
    }

    checkPortalCollision() {
        return (CollisionUtility.isCollide(this.eleven.location, this.portal));
    }

    updateLocation() {
        let eleven = this.eleven.location;
        let grid = this.map.grid;
        eleven.x = 1;
        eleven.y = 10;
        grid.gameGrid[eleven.y][eleven.x] = Grid.elevenIcon;
        grid.gameGrid[this.portal.y][this.portal.x] = Grid.portalIcon;
    }

    gameOver() {
        let gameOver = document.getElementById('game-over');
        let gameOverSound = document.getElementById('lose');
        gameOver.style.visibility = 'visible';
        this.gameOverSound.play();
        this.pauseGame();
    }

    gameWon() {
        let winGame = document.getElementById('win-game');
        winGame.style.visibility = 'visible';
        this.winGameSound.play();
        this.pauseGame();
    }
};
