import React, { Component } from 'react'
import FormInput from './FormInput'


const initValues = {

  name: '',
  email: '',
  password: '',
  birthday: '',
  gender: ''
}

 class ContactForm extends Component {

    state = {
        values: initValues,
        agreement: false
    }

    HandleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    ChangeSubmit = event => {
      event.preventDefault();

      console.log(this.state);
      event.target.reset()
      this.setState({name: '', email: '', password: ''})
    }

  render() {
    return (
      <div>
          <h1>My Contact Form</h1>
          <FormInput 
          values={this.state}
          HandleChange={this.HandleChange}
          ChangeSubmit={this.ChangeSubmit}
          />
      </div>
    )
  }
}

export default ContactForm