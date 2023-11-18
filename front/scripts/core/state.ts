export type WorldObject = {
    type: "player"
    x: number
    y: number
    username: string
}

export function storeWorldState(objs: WorldObject[]) {
    window.world = objs
}

export function getWorldState(): WorldObject[] {
    return window.world ?? []
}