import { Item } from './reducer'

export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
}

export type Actions =
    | {
    type: ActionTypes.ADD_ITEM
    payload: { item: Item }
}
    | {
    type: ActionTypes.REMOVE_ITEM
    payload: { itemId: Item['id'] }
}

export function addItemAction(item: Item): Actions {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: { item },
    }
}

export function removeItemAction(itemId: Item['id']): Actions {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: { itemId },
    }
}
