import React from "react"
// import Parent from './components/coms/parent'

export default class App extends React.Component {
  render(){
    console.log(this.props);
    return (
      // 这里使用到 bootstrap 进行页面的布局, 也只是为了测试学习.
      <div className="container">
        {/* <Parent /> */}
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button className="btn btn-primary" onClick={this.props.onIncrement}>Increment</button>
          <button className="btn btn-success" onClick={this.props.onDecrement}>Decrement</button>
        </p>
      </div>
    );
  }
}
