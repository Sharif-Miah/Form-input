import React from "react";
import PropTypes from 'prop-types'

const FormText = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
        type={props.type} 
        name = {props.name}
        id = {props.name}
        placeholder= {props.placeholder}
        value = {props.value}
        onChange={props.onChange} 
        className = 'form-control my-3'
        />
    </div>
)

FormText.propTypes = {

    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

FormText.defauldInput = {
    type: 'text',
    placeholder: '',
    label: ''
}

export default FormText;