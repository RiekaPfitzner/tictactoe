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
    enable_a = false
    basic.showString("Los!")
    enable_b = true
})
function spiel_stopp () {
	
}
function wuerfeln () {
    basic.showNumber(randint(0, 9))
    basic.pause(1000)
    basic.clearScreen()
}
function durchklicken () {
    led.plot(x_aktuell, y_aktuell)
    if (x_aktuell == 2 || x_aktuell == 4) {
        led.unplot(x_aktuell - 2, y_aktuell)
    } else {
        if (y_aktuell == 2 || y_aktuell == 4) {
            led.unplot(4, y_aktuell - 2)
        } else {
            if (y_aktuell == 0) {
                led.unplot(4, 4)
            }
        }
    }
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
    if (enable_b) {
        let spieler_b = 0
        let spieler_a = 0
        if (spieler_a) {
            led.setBrightness(255)
        }
        if (spieler_b) {
            led.setBrightness(255)
        }
        if (x_aktuell == 0 || x_aktuell == 2) {
            durchklicken()
            x_aktuell = x_aktuell + 2
        } else {
            if (x_aktuell == 4 && (y_aktuell == 0 || y_aktuell == 2)) {
                durchklicken()
                x_aktuell = 0
                y_aktuell = y_aktuell + 2
            } else {
                if (x_aktuell == 4 && y_aktuell == 4) {
                    durchklicken()
                    x_aktuell = 0
                    y_aktuell = 0
                }
            }
        }
    }
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
    y_aktuell = 0
    x_aktuell = 0
}
let y_aktuell = 0
let x_aktuell = 0
let enable_b = false
let wuerfeln_erlaubt = false
let enable_a = false
let state = false
start()
main()
