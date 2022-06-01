// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onChangeInputPhrase = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="text">
                Enter the phrase
              </label>
              <input
                type="text"
                className="letters-input"
                placeholder="Enter the phrase"
                id="text"
                value={inputText}
                onChange={this.onChangeInputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputText.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
