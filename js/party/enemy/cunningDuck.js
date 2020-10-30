import Enemy from './enemy.js'

const img = 'img/enemy2.jpg'

class CunningDuck extends Enemy {
    constructor(x, y) {
        super(x, y, '狡诈鸭', img)

        this.hp = 8
        this.attack = 5
        this.defence = 3
    }
}

export default CunningDuck