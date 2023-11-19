import { WorldObject } from "../../../shared/runtime";
import { Player } from "../domain/player";

// We'll have some bot users hardcoded here while we're in the early stages of development
const players = [
    new Player("slayer1000", 100, 100, "player"),
    new Player("sheld0r", 480, 480, "bot"),
];

export class Runtime {
    #state: {
        serialize?: () => string
        tick?: () => void
    }[]

    constructor() {
        this.#state = players
    }

    attachObject(obj: WorldObject) {
        this.#state.push(obj)
    }

    tick() {
        this.#state.forEach(obj => {
            if (obj.tick) {
                obj.tick()
            }
        })
    }

    serialize() {
        let serialized = ""
        this.#state.forEach(obj => {
            if (obj.serialize) {
                serialized += obj.serialize() + ","
            }
        })
        return serialized
    }
}

