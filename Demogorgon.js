// ------- DEMOGORGON -------- 
class Demogorgon {
    constructor(game) {
        this.location;
        this.jumpCounter = 0;
        this.loctionState = Grid.waffle;
        this.moveInterval = 400;
        this.jumpInterval = 15;
        this.game = game;
        this.grid = game.map.grid.gameGrid;
        this.eleven = game.eleven;
    }

    moveDemogorgon() {
        if (this.game.isPaused) {
            return;
        }
        
        if (this.location) {
            this.grid[this.location.y][this.location.x] = this.locationState;
        }

        if (this.jumpCounter === 0) {
            do {
                this.location = {
                                    y: Math.floor(Math.random() * this.grid.length),
                                    x: Math.floor(Math.random() * this.grid.length)
                                };
            } while (this.grid[this.location.y][this.location.x] !== Grid.empty && this.grid[this.location.y][this.location.x] !== Grid.waffle);
            this.jumpCounter = this.jumpInterval;
        } else {
            let path = this.search(this.createGraphGrid(), [this.location.x, this.location.y], [this.eleven.location.x, this.eleven.location.y]);
            if (path && path.length > 0) {
                this.location = {
                                    y: path[0].y,
                                    x: path[0].x
                                };
            }
            this.jumpCounter--;
        }
        this.locationState = this.grid[this.location.y][this.location.x];
        this.grid[this.location.y][this.location.x] = Grid.demogorgonIcon;
        this.game.map.repaint();

        if (this.checkDemogorgonCollision()) {
           this.game.gameOver();
        }
    }

    createGraphGrid() {
        let graphGrid = [];
        for (let x = 0; x < this.grid.length; x++) {
            let graphCol = [];
            for (let y = 0; y < this.grid.length; y++) {
                graphCol.push(this.grid[y][x] === Grid.wall ? 0 : 1);
            }
            graphGrid.push(graphCol);
        }
        return graphGrid;
    }

    search(graphGrid, start, end) {
        let graph = new Graph(graphGrid);
        let path = astar.search(graph, graph.grid[start[0]][start[1]], graph.grid[end[0]][end[1]]);
        return path;
    }
    
    checkDemogorgonCollision() {
        return (CollisionUtility.isCollide(this.eleven.location, this.location));
    }
};
