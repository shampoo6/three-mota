import GameObject from '../core/gameObject.js'
import gameController from '../gameController.js'
import scene from '../core/scene.js'
import audioPlayer from '../audioPlayer.js'

const effectAudioPath = 'audio/itemused.wav'

class Item extends GameObject {
    constructor(x, y, name, img) {
        super(x, y, name, img)
        this.sprite.position.z = 1
    }

    // 使用物品
    use() {
        console.log(`使用了物品：${this.name}`)
        // 清空路面
        let obj = gameController.getFromMap(this.x, this.y)
        if (obj.attach) obj.attach = null
        // 从场景中移除
        scene.scene.remove(this.sprite)
        // 播放使用音效
        audioPlayer.playEffect(effectAudioPath)
    }
}

export default Item