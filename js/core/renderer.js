import * as THREE from '../three/build/three.module.js'
import Scene from './scene.js'
import Camera from './camera.js'

class Renderer {
    renderer

    init() {
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)
        let _renderer = this.renderer

        function animate() {
            requestAnimationFrame(animate)
            _renderer.render(Scene.scene, Camera.camera)
        }

        animate()
    }
}

const renderer = new Renderer()

export default renderer