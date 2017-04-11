import React, { Component } from 'react'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      listItem: []
    }
  }

  handleClick() {
    let groceryItem = {item: this.state.input}
    this.state.listItem.push(groceryItem)
    this.setState({
      input: '',
      listItem: this.state.listItem
    })
  }

  render() {
    return (
      <div>
        <input type='text'
               value= {this.state.input}
               placeholder='add some yung items'
               onChange = { (event) => { this.setState({ input: event.target.value }); }}
             />
        <input type='submit'              onClick={this.handleClick.bind(this)}
        />
        <section> All Items</section>
      </div>
    )
  }
}
