import Item from './item.js'
import gameController from '../gameController.js'

const img = 'img/potion.jpg'

class Potion extends Item {
    constructor(x, y) {
        super(x, y, '药水', img)
    }

    use() {
        super.use()
        let player = gameController.player
        player.hp += 10
    }
}

export default Potion