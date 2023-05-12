import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
   }

   handle = () => this.setState(state=> ({count: state.count+1}))
    render() {
        return <div>
            <p className="counter">{this.state.count}</p>
            <button onClick={()=>this.handle()} className="counter_button"> button </button>
              </div>
    }
}

export default Counter;