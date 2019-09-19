// ------- ELEVEN -------- 
class Eleven {
    constructor(game) {
        this.location = {
                            x: 0,
                            y: 10,
                        };
        this.score = parseInt(document.getElementById('score').innerHTML);
        this.scoreElement = document.getElementById('score');
        this.waffleSound = document.getElementById('waffle-sound');
        this.game = game;
        this.map = game.map;
        this.grid = game.map.grid.gameGrid;
        this.initiateControls();
    }

    updateScore() {
        this.score++;
        this.waffleSound.play();
        this.scoreElement.innerHTML = this.score;
    }

    moveDown() {
        if (this.grid[this.location.y + 1][this.location.x] !== Grid.wall) {
            if (this.grid[this.location.y + 1][this.location.x] === Grid.waffle) {
                this.updateScore()
            }
            this.grid[this.location.y][this.location.x] = Grid.empty;
            this.location.y += 1;
            this.grid[this.location.y][this.location.x] = Grid.elevenIcon;
        }
    }

    moveUp() {
        if (this.grid[this.location.y - 1][this.location.x] !== Grid.wall) {
            if (this.grid[this.location.y - 1][this.location.x] === Grid.waffle) {
                this.updateScore()
            }
            this.grid[this.location.y][this.location.x] = Grid.empty;
            this.location.y -= 1;
            this.grid[this.location.y][this.location.x] = Grid.elevenIcon;
        }
    }

    moveLeft() {
        if (this.location.x != 0) {
            if (this.grid[this.location.y][this.location.x - 1] !== Grid.wall) {
                if (this.grid[this.location.y][this.location.x - 1] === Grid.waffle) {
                    this.updateScore()
                }
                this.grid[this.location.y][this.location.x] = Grid.empty;
                this.location.x -= 1;
                this.grid[this.location.y][this.location.x] = Grid.elevenIcon;
            }
        }
    }

    moveRight() {
        if (this.grid[this.location.y][this.location.x + 1] !== Grid.wall) {
            if (this.grid[this.location.y][this.location.x + 1] === Grid.waffle) {
                this.updateScore()
            }
            this.grid[this.location.y][this.location.x] = Grid.empty;
            this.location.x += 1;
            this.grid[this.location.y][this.location.x] = Grid.elevenIcon;
        }
    }

    initiateControls() {
        let fixThis = this;
        document.addEventListener('keydown', function (e) {
            if (fixThis.map.isNormalWorld()) {
                switch (e.key) {
                    case 'ArrowUp':
                        fixThis.moveUp();
                        break;
                    case 'ArrowDown':
                        fixThis.moveDown();
                        break;
                    case 'ArrowLeft':
                        fixThis.moveLeft();
                        break;
                    case 'ArrowRight':
                        fixThis.moveRight();
                        break;
                }
            } else {
                switch (e.key) {
                    case 'ArrowUp':
                        fixThis.moveDown();
                        break;
                    case 'ArrowDown':
                        fixThis.moveUp();
                        break;
                    case 'ArrowLeft':
                        fixThis.moveRight();
                        break;
                    case 'ArrowRight':
                        fixThis.moveLeft();
                        break;
                }
            }
        });
    }
};
