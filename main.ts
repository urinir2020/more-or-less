input.onButtonPressed(Button.A, function () {
    KAMA_KAMA += 1
})
input.onButtonPressed(Button.B, function () {
    KAMA_KAMA += -1
})
let KAMA_KAMA = 0
basic.forever(function () {
    if (KAMA_KAMA == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (KAMA_KAMA > 0) {
        basic.showArrow(ArrowNames.West)
    } else if (KAMA_KAMA < 0) {
        basic.showArrow(ArrowNames.East)
    }
})
