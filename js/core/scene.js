import * as THREE from '../three/build/three.module.js'
import Camera from './camera.js'
import Renderer from './renderer.js'
import GameController from '../gameController.js'
import audioPlayer from '../audioPlayer.js'

class Scene {
    scene
    camera
    renderer
    gameController

    // 初始场景
    init(config) {
        this.scene = new THREE.Scene()
        // this.scene.background = new THREE.Color( 0xff0000 );

        Camera.init()
        audioPlayer.init()
        Renderer.init()

        this.camera = Camera.camera
        this.scene.add(this.camera)
        this.renderer = Renderer.renderer
        this.gameController = GameController

        // 添加背景对象
        const geometry = new THREE.BoxGeometry(576, 576, 0)
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
        const cube = new THREE.Mesh(geometry, material)
        cube.z = -1
        this.scene.add(cube)

        // player
        // const map = new THREE.TextureLoader().load('img/player.jpg')
        // console.log(map)
        // const _material = new THREE.SpriteMaterial({map: map})
        //
        // const sprite = new THREE.Sprite(_material)
        // sprite.scale.set(64, 64, 1)
        //
        // sprite.position.x = -10 * 64 + 64 * 20
        // sprite.position.y = 5 * 64 - 64 * 10
        //
        // this.scene.add(sprite)

        // let obj = new GameObject(0, 0, 'Player', 'img/player.jpg')
        // this.scene.add(obj.sprite)


        this.gameController.initScene(config, this.scene)
        // this.renderScene(this.gameController.map)
    }

    // renderScene(gameObjectMap) {
    //     let map = gameObjectMap
    //     for (let x = 0; x < map.length; x++) {
    //         let yArr = map[x]
    //         for (let y = 0; y < yArr.length; y++) {
    //             let obj = yArr[y]
    //             this.scene.add(obj.sprite)
    //         }
    //     }
    // }
}

const scene = new Scene()


export default scene