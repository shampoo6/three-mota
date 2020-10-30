import GameObject from '../core/gameObject.js'

class Party extends GameObject {

    // todo 角色属性
    hp = 10
    attack = 3
    defence = 3

    constructor(x, y, name, img) {
        super(x, y, name, img)
    }
}

export default Party