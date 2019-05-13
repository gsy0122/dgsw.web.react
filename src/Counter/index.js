import React, {Component} from 'react';

import './counter.scss';
import Delta from './Delta';

// stateful component
class Counter extends Component {
    state = {
        value: 0,
        delta: 1,
    };
    render() {
        let { value, delta } = this.state;
        return (
            <div className='counter-style'>
                <div>{value}</div>
                <Delta delta={delta} handleChange={this.handleChange} />
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        );
    }
    handleChange = event => this.setState({
        delta: parseInt(event.target.value)
    });
    handlePlus = () => this.setState({
        value: this.state.value + this.state.delta
    });
    handleMinus = () => this.setState({
        value: this.state.value - this.state.delta
    });
}

export default Counter;