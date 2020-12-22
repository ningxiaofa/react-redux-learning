import * as acitons from "../constants"

export function increment(num) {
    return {
        type: acitons.INCREMENT,
        num
    }
}

export function decrement(num) {
    return {
        type: acitons.DECREMENT,
        num
    }
}