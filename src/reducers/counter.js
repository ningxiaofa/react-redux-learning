import * as acitons from "../constants"

const counter = (state = 0, action) => {
    switch (action.type) {
        case acitons.INCREMENT:
            // 认为制造错误异常
            // throw new Error("error reducer")
            // return state + 1;
            return state + action.num;
        case acitons.DECREMENT:
            // return state - 1;
            return state - action.num;
        default:
            return state;
    }
}

export default counter;