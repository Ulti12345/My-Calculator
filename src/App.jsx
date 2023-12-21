import { Component } from 'react';
import './index.css';

class Calculator extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentVal: '',
          operator: '',
          prevVal: '',
          nextVal: '',
      };
  }

  handleClear = () => {
      this.setState({
          currentVal: '',
          operator: '',
          prevVal: '',
          nextVal: '',
      });
  }

  handleInput = (value) => {
      if (value === '.' && this.state.currentVal.includes('.')) {
          return;
      }
      if (value === '+' || value === '-' || value === '*' || value === '/') {
          this.setState({
              prevVal: this.state.currentVal,
              operator: value,
              currentVal: '',
          });
      } else {
          this.setState({
              currentVal: this.state.currentVal + value,
          });
      }
  }

  handleEquals = () => {
      if (this.state.operator === '+') {
          this.setState({
              nextVal: parseFloat(this.state.prevVal) + parseFloat(this.state.currentVal),
          });
      } else if (this.state.operator === '-') {
          this.setState({
              nextVal: parseFloat(this.state.prevVal) - parseFloat(this.state.currentVal),
          });
      } else if (this.state.operator === '*') {
          this.setState({
              nextVal: parseFloat(this.state.prevVal) * parseFloat(this.state.currentVal),
          });
      } else if (this.state.operator === '/') {
          this.setState({
              nextVal: parseFloat(this.state.prevVal) / parseFloat(this.state.currentVal),
          });
      }
  }

  render() {
      return (
          <div className="calculator">
              <input
                  type="text"
                  value={this.state.nextVal || this.state.currentVal}
                  disabled
              />
              <div onClick={this.handleClear}>AC</div>
              <div onClick={() => this.handleInput('7')}>7</div>
              <div onClick={() => this.handleInput('8')}>8</div>
              <div onClick={() => this.handleInput('9')}>9</div>
              <div onClick={() => this.handleInput('+')}>+</div>
              <div onClick={() => this.handleInput('4')}>4</div>
              <div onClick={() => this.handleInput('5')}>5</div>
              <div onClick={() => this.handleInput('6')}>6</div>
              <div onClick={() => this.handleInput('-')}>-</div>
              <div onClick={() => this.handleInput('1')}>1</div>
              <div onClick={() => this.handleInput('2')}>2</div>
              <div onClick={() => this.handleInput('3')}>3</div>
              <div onClick={() => this.handleInput('*')}>*</div>
              <div onClick={() => this.handleInput('0')}>0</div>
              <div onClick={() => this.handleInput('.')}>.</div>
              <div onClick={() => this.handleInput('/')}>/</div>
              <div onClick={this.handleEquals}>=</div>
          </div>
      );
  }
}

export default Calculator;