import gameController from './gameController.js'
import audioPlayer from './audioPlayer.js'

const initInputEvent = () => {
    document.body.addEventListener('keyup', (e) => {
        gameController.playerMove(e.code)
    })

    // 激活窗口 播放音乐
    window.onfocus = () => {
        audioPlayer.play()
    }
}

export default initInputEvent