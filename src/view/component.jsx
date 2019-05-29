import React from 'react'
// 组件和props
class Welcome extends React.Component {
  render () {
    return (
      <h3>hello 组件名为{this.props.name}</h3>
    )
  }
}
class App extends React.Component {
  render () {
    return (
      <div>
        <Welcome name='firstName'/>
        <Welcome name='secondName'/>
        <Welcome name='thirdName'/>
      </div>
    )
  }
}
export default App