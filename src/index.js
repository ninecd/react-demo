import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './view/hello';
// import Ele from './view/jsx.jsx';
// import App from './view/component.jsx'
// import Toggle from './view/event.jsx'
// import Status from './view/status.jsx'
// import Excom from './view/children.jsx'
import FilterableProductTable from './view/search/search.jsx'
import './view/search/search.css'
// import Todo from './view/todo/index.jsx';
// import './view/todo/index.css';
import * as serviceWorker from './serviceWorker';
const jsonA = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]
ReactDOM.render(
  // <Hello />
  // <Ele />
  // <App />
  // <Status />
  // <Excom />
  <FilterableProductTable json={jsonA}/>
, document.getElementById('root'));

// 更新视图
// class Clock extends React.Component{
//   // state 和 props类似 但是state是私有的 受控于当前组件
//   constructor (props) {
//     super(props)
//     this.state = {date: new Date()}
//   }
//   // 组件的生命周期
//   // 挂载
//   componentDidMount () {
//     this.time = setInterval(() => {
//       this.setState({date: new Date()})
//     }, 1000)
//   }
//   // 卸载
//   componentWillUnmount () {
//     clearInterval(this.time)
//   }
//   render () {
//     return (
//       <div>
//         <h3>
//           it is {this.state.date.toLocaleTimeString()}
//         </h3>
//       </div>
//     )
//   }
// }
// function tick () {
//   ReactDOM.render(
//     <Clock />
//   , document.getElementById('root'));
// }
// setInterval(tick, 1000)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
