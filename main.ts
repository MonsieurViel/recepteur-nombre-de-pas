radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        X = value
        basic.showString("" + (value))
    }
})
let X = 0
radio.setGroup(88)
basic.forever(function () {
    serial.writeValue("X", X)
})
