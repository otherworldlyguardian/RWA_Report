import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { setActiveData } from './actions/setActiveData'
// import Drivers from './Drivers'
// import Fields from './Fields'
// import Clients from './Clients'

class InfoMenu extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  setActiveList = (active) => {
    switch (active) {
    case 'drivers':
      return this.props.driverList
    case 'clients':
      return this.props.clientList
    case 'fields':
      return this.props.fieldList
    default:
      break
    }
  }

  render () {
    var { activeItem } = this.state
    var activeList = this.setActiveList(this.props.activeData)
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {activeList.map((item, i) => {
              return (
                <Menu.Item
                  key={i}
                  name={item.name}
                  as={NavLink}
                  exact to={'/' + this.props.activeData + '/' + i}
                  active={activeItem === item.name}
                  onClick={this.handleItemClick}
                />
              )
            })
            }
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment>

          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeData: state.activeData,
    driverList: state.driverList,
    clientList: state.clientList,
    fieldList: state.fieldList,
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({
    setActiveData: setActiveData
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(InfoMenu)
