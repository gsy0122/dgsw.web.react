import React, {Component} from 'react';

import Num1 from './Num1';
import Num2 from './Num2';

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        result: 0,
    };
    render() {
        let { num1, num2, result } = this.state;
        return (
            <div>
                <Num1 num1={num1} handleChange1={this.handleChange1} />
                <Num2 num2={num2} handleChange2={this.handleChange2} />
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleMin}>-</button>
                <button onClick={this.handleMul}>*</button>
                <button onClick={this.handleSub}>/</button>
                <div>{result}</div>
            </div>
        );
    }
    handleChange1 = e => this.setState({
        num1: parseInt(e.target.value)
    });
    handleChange2 = e => this.setState({
        num2: parseInt(e.target.value)
    });
    handleAdd = () => this.setState({
       result: this.state.num1 + this.state.num2
    });
    handleMin = () => this.setState({
        result: this.state.num1 - this.state.num2
    });
    handleMul = () => this.setState({
        result: this.state.num1 * this.state.num2
    });
    handleSub = () => this.setState({
        result: this.state.num1 / this.state.num2
    });
}

export default Calculator;