import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Forms extends Component {

  render () {
    return (
      <List>
        {this.props.formList.map((item, i) => {
          return (
            <List.Item
              key={i}
              as={NavLink}
              exact to={'/forms/' + i}
              content={item.date_time}
            />
          )
        })
        }
      </List>
    )
  }
}

function mapStateToProps (state) {
  return {
    formList: state.formList
  }
}

export default connect(mapStateToProps)(Forms)
