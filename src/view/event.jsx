import React from 'react'
class Login extends React.Component {
  render () {
    return (
      <h1>Welcome back!</h1>
    )
  }
}
class Out extends React.Component {
  render () {
    return (
      <h1>Please log in or register!</h1>
    )
  }
}
class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggle: true}
    // 绑定this
    // this.handleClick = this.handleClick.bind(this)
    // 第二种  functionName = () => {}
  }
  handleClick () {
    console.log(this.state.isToggle)
    this.setState({
      isToggle: !this.state.isToggle
    })
  }
  render () {
    let current
    if (this.state.isToggle) {
      current = <Out />
    } else {
      current = <Login />
    }
    return (
      // 方法后加（） 会立即执行
      // 第三种bind(this)  (e) => this.handleClick(e)
      <div>
        <button onClick={(e) => this.handleClick(e)}>{this.state.isToggle ? 'ON' : 'OFF'}</button>
        {
          current
        }
      </div>
    )
  }
}
export default Toggle