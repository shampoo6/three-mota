import Scene from './core/scene.js'
import initInputEvent from './input.js'
import BlockType from './blockType.js'
import Wall from './env/wall.js'
import Road from './env/road.js'
import Player from './party/player.js'
import Sword from './item/Sword.js'
import Potion from './item/Potion.js'
import Shield from './item/Shield.js'
import EvilFrog from './party/enemy/evilFrog.js'
import CunningDuck from './party/enemy/cunningDuck.js'
import RedDragon from './party/enemy/redDragon.js'

const config = [
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Party, clazz: Player}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Party, clazz: EvilFrog}, {type: BlockType.Item, clazz: Sword}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Party, clazz: CunningDuck}, {type: BlockType.Item, clazz: Potion}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Item, clazz: Potion}, {type: BlockType.Party, clazz: RedDragon}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Party, clazz: EvilFrog}, {type: BlockType.Party, clazz: EvilFrog}, {type: BlockType.Item, clazz: Shield}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Party, clazz: EvilFrog}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Party, clazz: CunningDuck}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Party, clazz: EvilFrog}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Party, clazz: EvilFrog}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Party, clazz: RedDragon}, {type: BlockType.Item, clazz: Sword}, {type: BlockType.Party, clazz: EvilFrog}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Item, clazz: Shield}, {type: BlockType.Party, clazz: CunningDuck}, {type: BlockType.Env, clazz: Road}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Party, clazz: CunningDuck}, {type: BlockType.Item, clazz: Potion}, {type: BlockType.Env, clazz: Wall}],
    [{type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}, {type: BlockType.Env, clazz: Wall}],
]

init()

function init() {
    Scene.init(config)
    initInputEvent()
}