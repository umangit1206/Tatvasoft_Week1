import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
            number:0
        };
    }
    click(e){
        this.setState({
            number:this.state.number+1
        });

    }
    render() {
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.click}>Increment</button>
            </div>
        );
    }
    }


export default Counter
