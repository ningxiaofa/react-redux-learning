import React from "react"

export default class Child extends React.Component {

    clickHandler = (e) => {
        this.props.onMyEvent('父标题');
       
    }

    render(){
        return (
            <div>
                Child: {this.props.title}
                <button onClick={this.clickHandler}>传递数据</button>
            </div>
        )
    }
}