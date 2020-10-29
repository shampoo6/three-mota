import BlockType from './blockType.js'
import Player from './party/player.js'
import Road from './env/road.js'
import Enemy from './party/enemy.js'
import Item from './item/item.js'
import audioPlayer from './audioPlayer.js'

const mapSize = {
    width: 9,
    height: 9
}

class GameController {

    player // 记录玩家角色
    map

    constructor() {
        // 初始化二维数组
        this.map = []
        for (let i = 0; i < mapSize.height; i++) {
            let row = []
            for (let j = 0; j < mapSize.width; j++) {
                row.push(null)
            }
            this.map.push(row)
        }
    }

    setMap(x, y, gameObject) {
        this.map[x][y] = gameObject
    }

    getFromMap(x, y) {
        return this.map[x][y]
    }

    // 初始化场景
    initScene(config, scene) {
        for (let y = 0; y < config.length; y++) {
            let xArr = config[y]
            for (let x = 0; x < xArr.length; x++) {
                let objConfig = xArr[x]
                let gameObject = null
                switch (objConfig.type) {
                    case BlockType.Env:
                        gameObject = new objConfig.clazz(x, y)
                        break
                    case BlockType.Item:
                        gameObject = new Road(x, y)
                        let item = new objConfig.clazz(x, y)
                        gameObject.attach = item
                        break
                    case BlockType.Party:
                        gameObject = new Road(x, y)
                        let party = new objConfig.clazz(x, y)
                        gameObject.attach = party
                        if (objConfig.clazz === Player)
                            this.player = party
                        break
                }
                if (gameObject)
                    this.setMap(x, y, gameObject)
            }
        }

        this.renderScene(scene)

        // 播放音乐
        // audioPlayer.play()
    }

    renderScene(scene) {
        let map = this.map
        for (let x = 0; x < map.length; x++) {
            let yArr = map[x]
            for (let y = 0; y < yArr.length; y++) {
                let obj = yArr[y]
                scene.add(obj.sprite)

                if (obj instanceof Road && obj.attach) {
                    scene.add(obj.attach.sprite)
                }
            }
        }
    }

    // 玩家移动
    playerMove(direct) {
        // todo 拾取物品和战斗逻辑都在这里

        // todo 现在只做移动

        let x = 0
        let y = 0

        switch (direct) {
            case 'ArrowUp':
                x = this.player.x
                y = this.player.y - 1
                break
            case 'ArrowDown':
                x = this.player.x
                y = this.player.y + 1
                break
            case 'ArrowLeft':
                x = this.player.x - 1
                y = this.player.y
                break
            case 'ArrowRight':
                x = this.player.x + 1
                y = this.player.y
                break
        }

        // 数组越界
        if (x < 0 || y < 0 || x >= mapSize.width || y >= mapSize.height) return

        let nextBlock = this.map[x][y]

        // console.log(nextBlock)

        // 碰撞检测
        if (nextBlock instanceof Road) {
            let attach = nextBlock.attach

            // todo 如果路面有物品，暂时就无法移动
            if (attach) {
                if (attach instanceof Enemy) {
                    // todo 触发战斗
                } else if (attach instanceof Item) {
                    // todo 触发道具效果
                    attach.use()
                    console.log(this.player)
                    this.move(x, y)
                } else {
                    return
                }
            } else {
                this.move(x, y)
            }
        }

        console.log(this.map)
    }

    move(x, y) {
        // 将player当前路置空
        let road = this.getFromMap(this.player.x, this.player.y)
        road.attach = null
        // 移动
        this.player.setPosition(x, y)
        this.player.x = x
        this.player.y = y
        // 将当前路上设置为玩家
        road = this.getFromMap(this.player.x, this.player.y)
        road.attach = this.player
    }
}

const gameController = new GameController()

export default gameController