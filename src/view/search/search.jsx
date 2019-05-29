import React from 'react'
// [category: '' list: [{name: '', price: ''}]]
// const isChrome = !!window.chrome && !!window.chrome.webstore
// 总的
class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {product: props.json}
    this.FilterChange = this.FilterChange.bind(this)
  }
  FilterChange (filterData) {
    this.setState({product: filterData})
  }
  render () {
    return (
      <div className='box'>
        <SearchBar json={this.props.json} callback={this.FilterChange}/>
        <ProductTable json={this.state.product}/>
      </div>
    )
  }
}
// 头
class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.Composition = this.Composition.bind(this)
    this.state = {flag: true}
  }
  Composition (e) {
    console.log(e.target.value)
    if (e.type === 'compositionstart') {
      // 不一定同步的数据操作
      this.setState({flag: false})
      console.log('start', this.state.flag)
    }
    if (e.type === 'compositionend') {
      console.log('end')
      this.setState({flag: true}, () => {
        console.log(this.state.flag)
        this.handleChange()
      })
    }
  }
  handleChange () {
    console.log('change', this.state.flag)
    if (this.state.flag) {
      console.log(this.refs.text.value)
      let value = this.refs.text.value
      let arr = []
      this.props.json.forEach(item => {
        if (item.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          arr.push(item)
        }
      })
      this.props.callback(arr)
    }
  }
  // 谷歌下 change早于compositionend  其他浏览器都是end 早于change
  render () {
    return (
      <div className='search'>
        <input type="text" placeholder='请搜索' ref='text' onCompositionStart={this.Composition} onCompositionEnd={this.Composition} onChange={this.handleChange}/>
        <div className="ra">
          <input type="checkbox" id='sear'/>
          <label htmlFor="sear">only show ...</label>
        </div>
      </div>
    )
  }
}
// 表格
class ProductTable extends React.Component {
  render () {
    // 行头
    let arr = []
    // 行内容
    let rows = []
    this.props.json.forEach(item => {
      if (arr.indexOf(item.category) < 0) {
        arr.push(item.category)
      }
    })
    arr.forEach(item => {
      rows.push(
        <Tableth key={item} category={item}/>
      )
      this.props.json.forEach(items => {
        if (items.category === item) {
          rows.push(
            <Tabletd key={items.name} product={items}/>
          )
        }
      })
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            rows
          }
        </tbody>
      </table>
    )
  }
}
// th
class Tableth extends React.Component {
  render () {
    return (
      <tr>
        <th colSpan='2'>{this.props.category}</th>
      </tr>
    )
  }
}
class Tabletd extends React.Component {
  render () {
    const color = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{color}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}
export default FilterableProductTable