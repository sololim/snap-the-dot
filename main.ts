input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let Sprite: game.LedSprite = null
Sprite.move(1)
Sprite.ifOnEdgeBounce()
basic.pause(100)
basic.forever(function () {
    Sprite = game.createSprite(2, 2)
})
