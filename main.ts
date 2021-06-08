basic.forever(function () {
    basic.showLeds(`
        . # # # #
        # . . . .
        . # # # .
        . . . . #
        # # # # .
        `)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    basic.showLeds(`
        . # # # #
        # . . . .
        . # # # .
        . . . . #
        # # # # .
        `)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
