import React, { Component } from 'react'
import { connect } from 'react-redux'


class FormShow extends Component {
  constructor() {
    super()

    this.state = {
      form: {},
      user: {},
      field: {},
      client: {}
    }
  }

  componentWillMount () {
    fetch(`http://100.38.63.221:44400/forms/${this.props.match.params.formId}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      ...data
    }))
  }

  render () {
    if (this.state.form.date_time) {
      return (
        <div>
          <h1>{this.state.client.name}</h1>
          <p>{this.state.client.address}</p>
          <p>{this.state.client.phone}</p>
          <p>{this.state.client.email}</p>
          <br />
          <h1>{this.state.field.label}</h1>
          <p>{this.state.field.address}</p>
          <br />
          <h1>Submitted by:</h1>
          <p>{this.state.user.first_name} {this.state.user.last_name}</p>
          <p>at {this.state.form.created_at}</p>
          <br />
          <h1>Application Results</h1>
          <h4>Sand:</h4>
          <p>{this.state.form.sand.toString()}</p>
          <h4>Description:</h4>
          <p>{this.state.form.description}</p>
          <h4>Start:</h4>
          <p>{this.state.form.start}</p>
          <h4>End:</h4>
          <p>{this.state.form.end}</p>
          <h4>Gallons:</h4>
          <p>{this.state.form.gallons}</p>
          <h4>Application:</h4>
          <p>{this.state.form.application}</p>
          <h4>Method:</h4>
          <p>{this.state.form.method}</p>
          <h4>Soil:</h4>
          <p>{this.state.form.soil}</p>
          <h4>Weather:</h4>
          <p>{this.state.form.weather}</p>
          <h4>Temperature:</h4>
          <p>{this.state.form.temp}</p>
          <h4>Notes:</h4>
          <p>{this.state.form.notes}</p>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    formList: state.formList
  }
}

export default connect(mapStateToProps)(FormShow)
