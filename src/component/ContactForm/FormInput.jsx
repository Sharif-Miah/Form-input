import React from "react";
import FormText from "./InputText";
import PropTypes from 'prop-types'


const FormInput = props => (
    <form onSubmit={props.ChangeSubmit}>
        <FormText
            name = 'name'
            label = 'Enter your Name'
            placeholder= 'Write your Name'
            value = {props.values.name}
            onChange={props.HandleChange}
        />
        <FormText
            name = 'email'
            type= 'email'
            label = 'Enter your Email'
            placeholder= 'Write your email'
            value = {props.values.email}
            onChange={props.HandleChange}
        />
        <FormText
            name = 'password'
            type= 'password'
            label = 'Enter your password'
            placeholder= '********'
            value = {props.values.password}
            onChange={props.HandleChange}
        />

        <div>
            <button type="submit" >Show data</button>
        </div>
    </form>
)

FormInput.propTypes = {
    values: PropTypes.object.isRequired,
    HandleChange: PropTypes.func.isRequired,
    ChangeSubmit: PropTypes.func.isRequired
}

export default FormInput;