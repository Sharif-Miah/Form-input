import React from "react";

import PropTypes from 'prop-types'

const FormInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
        name={props.name}
        type={props.type}
        value = {props.value}
        id = {props.name}
        placeholder = {props.placeholder}
        onChange = {props.onChange}
        className = { props.error ? 'form-control is-valid my-3' : 'form-control my-4'}
        />
        {props.error && <div className="invalid-Feedbeck">{props.error}</div>}
    </div>
)

FormInput.propTypes  = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

FormInput.defauldInput = {
    type: 'text',
    placeholder: '',
    label: ''

}


export default FormInput;