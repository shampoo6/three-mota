import Enemy from './enemy.js'

const img = 'img/enemy3.jpg'

class RedDragon extends Enemy {
    constructor(x, y) {
        super(x, y, '红龙', img)

        this.hp = 15
        this.attack = 7
        this.defence = 5
    }
}

export default RedDragon