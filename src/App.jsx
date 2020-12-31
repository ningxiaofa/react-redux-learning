import React from "react"
// import Parent from './components/coms/parent'
import { connect } from "react-redux";
// import { increment, decrement } from "./actions/counter";
// 优化写法-4-1
import * as counterActions from "./actions/counter";
import { bindActionCreators } from "redux";

import User from './components/user'

class App extends React.Component {
  render(){
    // console.log(this.state); // null
    // console.log("this.props: ", this.props); // 不知道怎么使用，就打印出来
    return (
      // 这里使用到 bootstrap 进行页面的布局, 也只是为了测试学习.
      <div className="container">
        {/* <Parent /> */}
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          {/* <button className="btn btn-primary" onClick={this.props.onIncrement}>Increment</button>
          <button className="btn btn-success" onClick={this.props.onDecrement}>Decrement</button> */}
          {/* <button className="btn btn-primary" onClick={() => {this.props.increment()}}>Increment</button>
          <button className="btn btn-success" onClick={() => {this.props.decrement()}}>Decrement</button> */}
          {/* 优化写法-4-2 */}
          <button className="btn btn-primary" onClick={() => {
            this.props.counterActions.increment(10)
            // 延迟执行, [异步操作]
            // setTimeout(() => {
            //   this.props.counterActions.increment(10)
            // }, 1000)
          }}>Increment</button>
          <button className="btn btn-success" onClick={() => {this.props.counterActions.decrement(5)}}>Decrement</button>
        </p>
        <User />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state); // out: {counter: 0, user: {}}
  return {
    // counter: state
    // 改进： 5-3
    counter: state.counter
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {dispatch(increment())},
//     decrement: () => {dispatch(decrement())}
//   }
// }
// 优化写法-4-3
const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

// 参数先后顺序不能颠倒
export default connect(mapStateToProps, mapDispatchToProps)(App);