// ------- MAP ---------
class Map {
    constructor() {
        this.worldStatus = 'normal';
        this.grid = new Grid();
        this.mapElement;
    }

    create(world) {
        this.mapElement = document.createElement('DIV');
        this.mapElement.id = 'map';
        this.mapElement.classList.add(world);
        let blocks = this.grid.createBlocks();
        for (let i = 0; i < blocks.length; i++) {
            this.mapElement.appendChild(blocks[i]);
        }
        let container = document.getElementById('main');
        let referenceNode = document.getElementById('legenda');
        container.insertBefore(this.mapElement, referenceNode);
    }

    isNormalWorld() {
        return this.mapElement.classList.contains('normal');
    }

    switch() {
        let particles = document.querySelector('#particles_upsidedown');
        this.create(this.worldStatus);
        if (this.mapElement.classList.contains('normal')) {
            this.mapElement.classList.remove('normal');
            this.mapElement.classList.add('upside-down');
            particles.style.visibility = 'visible';
        } else {
            this.mapElement.classList.remove('upside-down');
            this.mapElement.classList.add('normal');
            particles.style.visibility = 'hidden';
        }
    }

    erase() {
        if (this.mapElement){
            if (this.mapElement.classList.contains('normal')) {
                this.worldStatus = 'normal';
            } else {
                this.worldStatus = 'upside-down';
            }
            let container = document.getElementById('main');
            container.removeChild(this.mapElement);
        }
    }

    repaint() {
        this.erase();
        this.create(this.worldStatus);
    }
};
