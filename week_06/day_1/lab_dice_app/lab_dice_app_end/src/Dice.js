import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Dice extends Component {

  constructor(props) {
    super(props)
    this.state = {
      result: 6
    }

    this.roll = this.roll.bind(this)
  }

  roll() {
    const result = Math.floor(Math.random() * this.props.sides) + 1
    this.setState({result})
  }

  render() {
    return (
      <>
        <h1>{ this.state.result }</h1>
        <button onClick={this.roll}>Roll the dice</button>
      </>
    )
  }

}

Dice.defaultProps = {
  sides: 6
}

Dice.propTypes = {
  sides: PropTypes.number.isRequired
}

export default Dice
