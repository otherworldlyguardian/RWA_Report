import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { setActiveData } from './actions/setActiveData'

class DataMenu extends Component {
  handleItemClick = (e, { name }) => {
    this.props.setActiveData(name)
  }

  render () {
    const activeItem = this.props.activeData
    return (
      <Menu tabular>
        <Menu.Item
          name='drivers'
          as={NavLink}
          exact to='/drivers'
          active={activeItem === 'drivers'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='clients'
          as={NavLink}
          exact to='/clients'
          active={activeItem === 'clients'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='fields'
          as={NavLink}
          exact to='/fields'
          active={activeItem === 'fields'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='forms'
          as={NavLink}
          exact to='/forms'
          active={activeItem === 'forms'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeData: state.activeData
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({
    setActiveData: setActiveData
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DataMenu)
