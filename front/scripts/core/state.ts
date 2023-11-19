import type { WorldObject } from '../../../shared/runtime'

export function storeWorldState(objs: WorldObject[]) {
    window.world = objs
}

export function getWorldState(): WorldObject[] {
    return window.world ?? []
}