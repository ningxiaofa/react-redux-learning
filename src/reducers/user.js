import {ADD_USER} from "../constants/index"

const user = (state = {}, action) => {
    switch(action.type) {
        case ADD_USER:
            state.push("user"); // 不能这么操作，这里只是临时使用
            return state;
        default:
            return state;
   }  
}

export default user;