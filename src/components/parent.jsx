import React from "react"
import Child from "./child"

export default class Parent extends React.Component {
    state = {
        value: ""
    }

    clickHandler = (data) => {
        // console.log(data);
        this.setState({
            value: data
        });
    }
    
    render(){
        return (
            <div>
                Parent: {this.state.value}
                <Child title="子标题" onMyEvent={this.clickHandler}/>
            </div>
        )
    }
}