import * as acitons from "../constants"

// export function increment(num) {
//     return {
//         type: acitons.INCREMENT,
//         num
//     }
// }

// 异步操作 action 优化
// 需要配合 redux-thunk一起work, 否则会出现报错: Actions must be plain objects. Use custom middleware for async actions. [action必须是普通对象。使用自定义中间件进行异步操作。], 解决办法: 安装 redux-thunk -- yarn add redux-thunk
export function increment(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch(
                {
                    type: acitons.INCREMENT,
                    num
                }
            )
        }, 1000)
    }
}

export function decrement(num) {
    return {
        type: acitons.DECREMENT,
        num
    }
}