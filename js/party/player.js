import Party from './party.js'

const img = 'img/player.jpg'

class Player extends Party {

    constructor(x, y) {
        super(x, y, 'Player', img)
        this.sprite.position.z = 1

        this.hp = 10
        this.attack = 3
        this.defence = 3
    }
}

export default Player