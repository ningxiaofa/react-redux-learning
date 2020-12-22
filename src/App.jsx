import React from "react"
// import Parent from './components/coms/parent'
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counter";

class App extends React.Component {
  render(){
    // console.log(this.state); // null
    console.log(this.props);
    return (
      // 这里使用到 bootstrap 进行页面的布局, 也只是为了测试学习.
      <div className="container">
        {/* <Parent /> */}
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          {/* <button className="btn btn-primary" onClick={this.props.onIncrement}>Increment</button>
          <button className="btn btn-success" onClick={this.props.onDecrement}>Decrement</button> */}
          <button className="btn btn-primary" onClick={() => {this.props.increment()}}>Increment</button>
          <button className="btn btn-success" onClick={() => {this.props.decrement()}}>Decrement</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {dispatch(increment())},
    decrement: () => {dispatch(decrement())}
  }
}

// 参数先后顺序不能颠倒
export default connect(mapStateToProps, mapDispatchToProps)(App);