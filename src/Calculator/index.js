import React, {Component} from 'react';

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
                <div>
                    <input value={num1} onChange={this.handleChange1}/>
                    <input value={num2} onChange={this.handleChange2}/>
                </div>
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