import React from 'react'
// 组合和继承
class ComChildren extends React.Component {
  constructor (props) {
    super(props)
    this.state = {children: props.children}
  }
  render () {
    return (
      <div> Welcome
        {this.state.children}
      </div>
    )
  }
}
class Excom extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <ComChildren>
        <h1>
          我是嵌套进去的内容
        </h1>
      </ComChildren>
    )
  }
}
export default Excom