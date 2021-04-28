controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumps < 1) {
        mySprite.vy += -300
        jumps += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = -50
    } else {
        mySprite.vy = 50
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile10`)
        game.splash("There's a Note Inside")
        game.showLongText("Be Wary, There's something in this cave with us. If you find this I don't care who you are or why you're in this God-Forsaken but I'm taking my men out of here, no amount of money will bring us back; I advise you do the same.", DialogLayout.Full)
    }
})
function Level1 () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.splash("These Vines are Climbable")
    }
})
let jumps = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ..............eee...
    ...........eeee2ee..
    .......eeeeeeeeeee..
    .....eeeeeeeeee...3.
    .e..eeeeeeeeee......
    ..eeeeeeeeeee.......
    ...eeeee..eee.......
    ..eeeee...eee.......
    ..eeeee..ee.e.......
    ..ee.ee..e..e.......
    ..ee.ee..e..e.......
    ..ee.e...e..e.......
    ..e..e...e..e.......
    .ee.e....e..ee......
    .e..e.....e..e......
    .e..e.....e...e.....
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 1000
jumps = 0
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 16.5))
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumps = 0
    }
})
