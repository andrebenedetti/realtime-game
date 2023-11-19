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
        if (this.#type === "bot") {
            const xRand = [Math.random(), Math.random()]
            const yRand = [Math.random(), Math.random()]
            const deltaX = xRand[0] > 0.5 ? 1 : 0
            const deltaY = yRand[0] > 0.5 ? 1 : 0
            this.#x += xRand[1] > 0.5 ? -1 * deltaX : deltaX
            this.#y += yRand[1] > 0.5 ? -1 * deltaY : deltaY
        }
    }

    move(x: number, y: number) {
        this.#x = x;
        this.#y = y;
    }
}