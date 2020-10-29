import * as THREE from '../js/three/build/three.module.js'
import camera from './core/camera.js'

class AudioPlayer {

    sound
    effect // 效果音
    audioLoader

    audioList = [
        'audio/Beginning.mp3',
        'audio/Bloddy_Tears.mp3',
        'audio/Vampire_killer.mp3'
    ]

    init() {
        // create a global audio source
        this.sound = new THREE.Audio(camera.audioListener)

        this.effect = new THREE.Audio(camera.audioListener)

        // load a sound and set it as the Audio object's buffer
        this.audioLoader = new THREE.AudioLoader()
    }

    play() {
        if (!this.sound.isPlaying) {
            let audioPath = this.randAudioPath()
            this.audioLoader.load(audioPath, (buffer) => {
                this.sound.setBuffer(buffer)
                this.sound.setLoop(true)
                this.sound.setVolume(0.5)
                this.sound.play()
            })
        }
    }

    playEffect(audioPath) {
        if(this.effect.isPlaying) this.effect.stop()

        this.audioLoader.load(audioPath, (buffer) => {
            this.effect.setBuffer(buffer)
            this.effect.setLoop(false)
            this.effect.setVolume(1)
            this.effect.play()
        })
    }

    // 随机音乐
    randAudioPath() {
        let index = Math.round(Math.random() * 3000) % 3
        return this.audioList[index]
    }
}

const audioPlayer = new AudioPlayer()

export default audioPlayer