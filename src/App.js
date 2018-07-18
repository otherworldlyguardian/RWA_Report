import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DataMenu from './DataMenu'
import Drivers from './Drivers'
// import Clients from './Clients'
// import Fields from './Fields'
import Forms from './Forms'
import FormShow from './FormShow'
import InfoMenu from './InfoMenu'
import { setActiveData } from './actions/setActiveData'
import { setCurrentForms } from './actions/setCurrentForms'

class App extends Component {
  componentWillMount = () => {
    this.props.setActiveData(window.location.pathname.split('/')[1])
    fetch('http://100.38.63.221:44400/forms')
    .then(resp => resp.json())
    .then(data => this.props.setCurrentForms(data.forms))
  }

  render () {
    return (
      <Router>
        <div>
          <DataMenu />
          <Switch>
              <Route exact path='/' component={Drivers} />
              <Route exact path='/drivers' component={InfoMenu} />
              <Route exact path='/clients' component={InfoMenu} />
              <Route exact path='/fields' component={InfoMenu} />
              <Route exact path='/forms' component={Forms} />
              <Route exact path='/forms/:formId' component={FormShow} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({
    setActiveData: setActiveData,
    setCurrentForms: setCurrentForms
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(App)
