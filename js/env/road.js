import EnvObject from './envObject.js'

const img = 'img/road.jpg'

class Road extends EnvObject {

    attach = null // 在路上的对象

    constructor(x, y) {
        super(x, y, 'Road', img)
    }
}

export default Road