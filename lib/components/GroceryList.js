import React, { Component } from 'react'
import RenderList from './RenderList'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      listItems: []
    }
  }

  handleClick() {
    let groceryItem = {item: this.state.input}
    this.state.listItems.push(groceryItem)
    this.setState({
      input: '',
      listItems: this.state.listItems
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
        <RenderList itemColletion = {this.state.listItems}
        />
      </div>
    )
  }
}
