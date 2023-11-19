type PlayerType = "player" | "bot"

export class Player {
    #name: string;
    #type: PlayerType;
    #x: number;
    #y: number;

    constructor(name: string, x: number, y: number, type: PlayerType) {
        this.#name = name;
        this.#type = type;
        this.#x = x;
        this.#y = y;
    }

    // This will be moved to a binary format in the future, but for our first proof
    // of concept we'll keep it like this.
    serialize() {
        return `player;${this.#x};${this.#y};${this.#name}`;
    }

    tick() {
        this.#x
    }

    move(x: number, y: number) {
        this.#x = x;
        this.#y = y;
    }
}