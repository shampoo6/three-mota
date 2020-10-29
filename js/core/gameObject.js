import * as THREE from '../three/build/three.module.js'

const origin = {
    x: -4 * 64,
    y: 4 * 64
}

class GameObject {
    x
    y
    name
    sprite

    constructor(x, y, name, imgPath) {
        this.x = x
        this.y = y
        this.name = name

        const map = new THREE.TextureLoader().load(imgPath)
        const material = new THREE.SpriteMaterial({map: map})
        this.sprite = new THREE.Sprite(material)
        this.sprite.scale.set(64, 64, 1)
        this.setPosition(this.x, this.y)
    }

    // 设置位置
    setPosition(x, y) {
        this.sprite.position.x = origin.x + 64 * x
        this.sprite.position.y = origin.y - 64 * y
    }
}

export default GameObject