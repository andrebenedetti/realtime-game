import { WorldObject } from '../shared/runtime'

declare global {
    interface Window {
        world: WorldObject[]
    }
}