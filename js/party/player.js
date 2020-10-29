import Party from './party.js'

const img = 'img/player.jpg'

class Player extends Party {

    // todo 角色属性
    hp = 10
    attack = 3
    defence = 3

    constructor(x, y) {
        super(x, y, 'Player', img)
        this.sprite.position.z = 1
    }
}

export default Player