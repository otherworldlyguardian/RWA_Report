import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DataMenu from './DataMenu'
import Drivers from './Drivers'
import Clients from './Clients'
import Fields from './Fields'
import Forms from './Forms'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <DataMenu />
          <Switch>
              <Route exact path='/' component={Drivers} />
              <Route exact path='/drivers' component={Drivers} />
              <Route exact path='/Clients' component={Clients} />
              <Route exact path='/fields' component={Fields} />
              <Route exact path='/forms' component={Forms} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
