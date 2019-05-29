import React from 'react'
function Temperature(props) {
  if (props.num >= 100) {
    return <h1>沸腾</h1>
  } else {
    return <h1>还没</h1>
  }
}
class Calculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {num: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({num: e.target.value})
  }
  render () {
    return (
      <fieldset>
        <legend>测试水温</legend>
        <input type="text" onChange={this.handleChange}/>
        <Temperature num={this.state.num}/>
      </fieldset>
    )
  }
}
export default Calculator