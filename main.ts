function Validar_Coordenada () {
    if (Coordenada_X <= 4 && Coordenada_Y <= 4) {
        basic.clearScreen()
        led.plot(Coordenada_X, Coordenada_Y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    Coordenada_X += 1
    basic.showNumber(Coordenada_X)
    basic.pause(100)
    basic.clearScreen()
    if (!(Validar_Coordenada())) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    Coordenada_X = 0
    Coordenada_Y = 0
    basic.clearScreen()
    led.plot(Coordenada_X, Coordenada_Y)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    Coordenada_Y += 1
    basic.showNumber(Coordenada_Y)
    basic.pause(100)
    basic.clearScreen()
    if (!(Validar_Coordenada())) {
        basic.showIcon(IconNames.No)
    }
})
let Coordenada_Y = 0
let Coordenada_X = 0
Coordenada_X = 0
Coordenada_Y = 0
led.plot(Coordenada_X, Coordenada_Y)
