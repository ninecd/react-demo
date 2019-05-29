import React from 'react';
const user = {
  name1: 'user 1',
  name2: 'user 2'
}
function formatName (user) {
  return user.name1 + ' ' + user.name2 + 'jsx的简单使用'
}
const list = [1,2,3,4,5,6,7,8,9]
const items = list.map((item, index) => {
  return <li key={index} onClick={()=> {alert(item)}}>{item}</li>
})
class Ele extends React.Component {
  render () {
    return (
      <div>
        <h1>
          hello {formatName(user)}
        </h1>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
export default Ele