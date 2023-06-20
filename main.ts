function bestaetigen () {
	
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (state == false) {
        spiel_start()
    } else {
        spiel_stopp()
    }
})
input.onButtonPressed(Button.A, function () {
    if (enable_a) {
        enable_a = true
        basic.showString("2: Wuerfle!")
    }
    basic.pause(5000)
    wuerfeln_erlaubt = false
    basic.showString("Los!")
})
function spiel_stopp () {
	
}
function wuerfeln () {
    basic.showNumber(randint(0, 9))
    basic.pause(1000)
    basic.clearScreen()
}
function durchklicken () {
	
}
input.onGesture(Gesture.Shake, function () {
    if (wuerfeln_erlaubt) {
        wuerfeln()
    }
})
function spiel_start () {
    basic.showString("1: Wuerfle!")
    wuerfeln_erlaubt = true
    enable_a = true
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
    enable_a = false
}
let wuerfeln_erlaubt = false
let enable_a = false
let state = false
start()
main()
