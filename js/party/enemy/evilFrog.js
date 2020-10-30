import Enemy from './enemy.js'

const img = 'img/enemy1.jpg'

class EvilFrog extends Enemy {
    constructor(x, y) {
        super(x, y, '邪恶蛙', img)

        this.hp = 4
        this.attack = 4
        this.defence = 2
    }
}

export default EvilFrog