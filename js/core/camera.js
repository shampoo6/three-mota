import * as THREE from '../three/build/three.module.js'

class Camera {
    camera
    audioListener

    init() {
        // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        // // 调整相机
        // this.camera.position.z = 5
        let width = window.innerWidth
        let height = window.innerHeight
        this.camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 5 );
        this.camera.position.z = 5

        // create an AudioListener and add it to the camera
        this.audioListener = new THREE.AudioListener()
        this.camera.add(this.audioListener)
    }
}

const camera = new Camera()

export default camera