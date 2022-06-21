import React from "react";
import PropTypes from 'prop-types'
import TextInput from "./TextInput";

const Form = props => (
    <form onSubmit={props.changeHanle}>
        <TextInput 
            name = 'name'
            label="Enter Name"
            placeholder="Farhan Sharif"
            value={props.values.name}
            onChange = {props.HandleClickNow}
        />
        <TextInput 
            name = 'email'
            type="email"
            label="Enter Email"
            placeholder="farhansharif@gmail.com"
            value={props.values.email}
            onChange = {props.HandleClickNow}
        />
        <TextInput 
            name = 'password'
            type="password"
            label="Enter Password"
            placeholder="*******"
            value={props.values.password}
            onChange = {props.HandleClickNow}
        />

        <div className="Submit">
            <button type="submit" className="Btn">Submit</button>
        </div>
</form>
);

Form.propTypes = {
    values: PropTypes.object.isRequired,
    HandleClickNow: PropTypes.func.isRequired,
    changeHanle: PropTypes.func.isRequired
}

export default Form;