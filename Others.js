// ------- OTHERS -------- 
class Others {
    constructor(game) {
        this.game = game;
        this.grid = game.map.grid.gameGrid;
        this.others = ['mike', 'will', 'dustin', 'lucas'];
        this.namePlaced;
        this.nameId;
        this.foundOtherSound = document.getElementById('found-other');
    }

    positionOthers(reference, iconOther) {
        if (this.namePlaced){
            this.grid[this.namePlaced.y][this.namePlaced.x] = Grid.empty;
        }

        do {
            this.namePlaced = {
                                 y: Math.floor(Math.random() * this.grid.length),
                                 x: Math.floor(Math.random() * this.grid.length)
                              };
        } while (this.grid[this.namePlaced.y][this.namePlaced.x] !== Grid.empty && this.grid[this.namePlaced.y][this.namePlaced.x] !== Grid.waffle);

        switch (reference) {
            case 5:
                this.nameId = 'mike';
                break;
            case 6:
                this.nameId = 'will';
                break;
            case 7:
                this.nameId = 'dustin';
                break;
            case 8:
                this.nameId = 'lucas';
                break;
        }
        this.grid[this.namePlaced.y][this.namePlaced.x] = iconOther;
        this.game.map.repaint();
    }

    chooseName() {
        let legenda = document.getElementById('legenda');
        let name;

        do {
            let randomIndex = Math.floor(Math.random() * this.others.length);
            name = this.others[randomIndex];
        } while (legenda.classList.contains(name));

        return name;
    }

    placeOthers() {
        let name = this.chooseName(this.others);
        let icon;
        let referenceNumber;
      
        switch (name) {
            case 'mike':
                icon = Grid.mikeIcon;
                referenceNumber = 5;
                break;
            case 'will':
                icon = Grid.willIcon;
                referenceNumber = 6;
                break;
            case 'dustin':
                icon = Grid.dustinIcon;
                referenceNumber = 7;
                break;
            case 'lucas':
                icon = Grid.lucasIcon;
                referenceNumber = 8;
                break;
        }
        this.positionOthers(referenceNumber, icon);
    }

    checkOthersCollision() {
        return (this.namePlaced && CollisionUtility.isCollide(this.game.eleven.location, this.namePlaced));
    }

    collectOthers() {
        let legenda = document.getElementById('legenda');
        legenda.classList.add(this.nameId);

        switch (this.nameId) {
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
        }
        this.foundOtherSound.play();

        if (legenda.classList.contains('mike') && legenda.classList.contains('will') && legenda.classList.contains('dustin') && legenda.classList.contains('lucas')) {
            this.game.gameWon();
        }
    }
};
