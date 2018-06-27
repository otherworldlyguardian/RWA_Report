import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class DataMenu extends Component {
  constructor () {
    super()

    this.state = {
      activeItem: ''
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render () {
    const activeItem = this.state.activeItem
    return (
      <Menu tabular>
        <Menu.Item
          name='drivers'
          as={NavLink}
          exact to='drivers'
          active={activeItem === 'drivers'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='clients'
          as={NavLink}
          exact to='clients'
          active={activeItem === 'clients'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='fields'
          as={NavLink}
          exact to='fields'
          active={activeItem === 'fields'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='forms'
          as={NavLink}
          exact to='forms'
          active={activeItem === 'forms'} 
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default DataMenu
