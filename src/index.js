import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
// import reducer from './reducers/counter';
// 改进 5-1
import rootReducer from "./reducers"
import { Provider } from "react-redux";

import reduxLogger from "redux-logger";

// 异步与同步 in lesson 7
// 最常见的异步: 定时器, 网络请求 [counter--->定时器, user--->网络请求]
import reduxThunk from "redux-thunk"

// 添加中间件 in lesson 6  中间件可以有多个
// const logger = store => next => action => {
//   console.log("dispatch->", action);
//   let result = next(action)
//   console.log("next state->", store.getState());
//   return result;
// }
/** 即 ES5语法
 * const logger = function(store){
    return function(next) {
      return function(action) {
        // TBD
      }
    }
  }
*/

// 第二个中间件
// const error = store => next => action => {
//   // 这里手动制造异常/错误. 见: 
//   try{
//     next(action)
//   }catch(e){
//     console.log("error->", e);
//   }
// }

// Learning useState with object
// import UseStateObj from './components/useStateObj';

// 创建Store仓库
// const store = createStore(reducer);
// 改进 5-2, 后添加后两个参数, 第二个参数暂时不用管, 第三个参数是加载中间件
// const store = createStore(rootReducer, {}, applyMiddleware(logger, error));

// Note:
// 一般情况下, 我们是没有必要自己定义中间件, 常用的中间件, 基本都有实现
// 使用第三方中间件 redux-logger
const store = createStore(rootReducer, {}, applyMiddleware(reduxLogger, reduxThunk));
// 监听store数据变化
// store.subscribe(() => {
//   console.log("state: ", store.getState());
// });

// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App 
//         onIncrement={() => {store.dispatch({type: "INCREMENT"})}}
//         onDecrement={() => {store.dispatch({type: "DECREMENT"})}}
//         counter={store.getState()}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// // 第一次加载渲染
// render();

// // 监听数据变化, 重新渲染
// store.subscribe(render);


ReactDOM.render(
  <Provider store={ store }>
    <App />
    {/* <UseStateObj /> */}
  </Provider>,
  document.getElementById('root'));