import Item from './item.js'
import gameController from '../gameController.js'

const img = 'img/sword.jpg'

class Sword extends Item {
    constructor(x, y) {
        super(x, y, '剑', img)
    }

    use() {
        super.use()
        let player = gameController.player
        player.attack += 1
    }
}

export default Sword