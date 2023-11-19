export type WorldObject = {
    type: "player"
    x: number
    y: number
    username: string
    serialize?: () => string
}