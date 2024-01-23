export default class Sound {
    constructor(game, address) {
        this.game = game;
        this.address = address;
        this.audio = new Audio(address)
    }
    play() {
        this.audio.play()
    }
}