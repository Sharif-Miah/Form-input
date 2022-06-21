import React, { Component } from 'react'
import TextInput from './TextInput'

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

class Singupform extends Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    ChangeHandle = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    CheakAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    ClickSubmit= event =>{
        event.preventDefault()

        const {isvalid, errors} = this.validate()
        if(isvalid){
        console.log(this.state.values);
        event.target.reset()
        this.setState({valuea: initValues, agreement: false})
        }else{
            this.setState({errors})
            // console.log(errors);
        }

        
    }
 
    validate = ()=>{
        const errors = {}

        const { values: {name, email, password, gender, birthDate}} = this.state

        if(!name){
            errors.name = 'Please Provide Your Name'
        }
        if(!email){
            errors.email = 'Please Provide Your Email'
        }
        if(!password){
            errors.password = 'Please Provide Your Password'
        }
        if(!gender){
            errors.gender = 'Please Select Your Gender'
        }
        if(!birthDate){
            errors.birthDate = 'Please Provide Your Birthday'
        }

        return{
            errors,
            isvalid: Object.keys(errors).length === 0
        }
    }

  render() {
    return (
      <div>
          <h1>Singup Form</h1>
          <TextInput 
            values={this.state.values}
            agreement={this.state.agreement}
            errors = {this.state.errors}
            ChangeHandle={this.ChangeHandle}
            CheakAgreement={this.CheakAgreement}
            ClickSubmit={this.ClickSubmit}
           />
      </div>
    )
  }
}

export default Singupform