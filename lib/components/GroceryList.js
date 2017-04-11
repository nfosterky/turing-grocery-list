import React, { Component } from 'react'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div>
        <input type='text'
               value= { this.state.input }
               placeholder='add some yung items'
               onChange = { (event) => { this.setState({ input: event.target.value })} }
             />
        <input type='submit'/>
        <section> All Items</section>
      </div>
    )
  }
}
