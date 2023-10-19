export default class Sound {
    constructor(game, address) {
        this.game = game;
        this.address = address;
        this.element = document.createElement("audio")
        this.element = document.createElement("source")
    }
}