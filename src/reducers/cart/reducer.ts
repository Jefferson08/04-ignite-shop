import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'

export interface Item {
    id: string
    name: string
    price: number
    imageUrl: string
}

export function cartReducer(state: Item[], action: Actions): Item[] {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const exists = draft.find((i) => i.id === action.payload.item.id)
                if (!exists) {
                    draft.push(action.payload.item)
                }
            })

        case ActionTypes.REMOVE_ITEM:
            return produce(state, (draft) => {
                return draft.filter((i) => i.id !== action.payload.itemId)
            })

        default:
            return state
    }
}
