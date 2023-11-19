import { WorldObject } from "../../../shared/runtime";
import { Player } from "../domain/player";

// We'll have some bot users hardcoded here while we're in the early stages of development
const players = [
    new Player("slayer1000", 100, 100, "bot"),
    new Player("sheld0r", 270, 270, "bot"),
];

export class Runtime {
    #state: {
        serialize?: () => string
    }[]

    constructor() {
        this.#state = players
    }

    attachObject(obj: WorldObject) {
        this.#state.push(obj)
    }

    serialize() {
        let serialized = ""
        this.#state.forEach(obj => {
            if (obj.serialize) {
                serialized += obj.serialize()
            }
        })
        return serialized
    }
}

