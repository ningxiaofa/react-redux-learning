import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from "../constants/index"

// 初始化
const initialState = {
    data: {},
    isFetching: false,
    error: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            // state.push("user"); // 不能这么操作，这里只是临时使用
            // return state;
            // 三大原则之一: State是只读的, 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
            // 详情: https://www.redux.org.cn/docs/introduction/ThreePrinciples.html
            return {
                data: action.user,
                isFetching: false,
                error: null
            }
        case FETCH_USER_REQUEST:
            return {
                data: {},
                isFetching: true,
                error: null
            }
        case FETCH_USER_FAILURE:
            return {
                data: {},
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default user;
