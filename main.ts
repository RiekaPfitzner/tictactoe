function bestaetigen () {
	
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (state == false) {
        spiel_start()
    } else {
        spiel_stopp()
    }
})
function spiel_stopp () {
	
}
function wuerfeln () {
	
}
function durchklicken () {
	
}
input.onGesture(Gesture.Shake, function () {
	
})
function spiel_start () {
	
}
input.onButtonPressed(Button.AB, function () {
    bestaetigen()
})
input.onButtonPressed(Button.B, function () {
    durchklicken()
})
function start () {
    music.play(music.stringPlayable("C5 B A G G A B C5 ", 400), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(50)
    basic.showIcon(IconNames.Square)
    basic.pause(200)
    music.play(music.stringPlayable("C D E F F E D C ", 400), music.PlaybackMode.InBackground)
    basic.pause(200)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
function main () {
    state = false
}
let state = false
start()
main()
