import EnvObject from './envObject.js'

const img = 'img/wall.jpg'

class Wall extends EnvObject {
    constructor(x, y) {
        super(x, y, 'Wall', img)
    }
}

export default Wall