function toceni_LED_zaporny () {
    for (let index = 0; index < 3; index++) {
        od = 18
        _do = 1
        for (let index = 0; index < 18; index++) {
            range = strip.range(od, _do)
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(20)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            od += -1
        }
    }
}
function toceni_LED_kladny () {
    for (let index = 0; index < 3; index++) {
        od = 0
        _do = 1
        for (let index = 0; index < 18; index++) {
            range = strip.range(od, _do)
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(20)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            od += 1
        }
    }
}
let _do = 0
let od = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
basic.showIcon(IconNames.Sad)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
range = strip.range(1, 1)
basic.pause(200)
toceni_LED_kladny()
toceni_LED_zaporny()
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(200)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    if (kBit.ultra() >= 10) {
        kBit.led(KBitColor.White)
        kBit.run(KBitDir.RunForward, 20)
    } else {
        kBit.carStop()
        kBit.led(KBitColor.Red)
        basic.pause(500)
    }
})
