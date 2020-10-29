import Item from './item.js'
import gameController from '../gameController.js'

const img = 'img/shield.jpg'

class Shield extends Item {
    constructor(x, y) {
        super(x, y, '盾', img)
    }

    use() {
        super.use()
        let player = gameController.player
        player.defence += 1
    }
}

export default Shield