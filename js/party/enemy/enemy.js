import Party from '../party.js'

class Enemy extends Party {
    constructor(x, y, name, img) {
        super(x, y, name, img)
        this.sprite.position.z = 1
    }
}

export default Enemy