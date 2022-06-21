import React from "react";
import FormInput from "./FormInput";
import PropTypes from 'prop-types'


const TextInput =({
    values,
    agreement,
    errors,
    ChangeHandle,
    CheakAgreement,
    ClickSubmit
})  => {
    return(
        <div>
    <form onSubmit={ClickSubmit}>
        <FormInput 
        name="name"
        label="Write Your Text"
        placeholder="Write your name"
        onChange={ChangeHandle}
        value={values.name}
        error={errors.name}
        />

        <FormInput 
        name="email"
        type="email"
        label="Write Your Email"
        placeholder="Write your email"
        onChange={ChangeHandle}
        value={values.email}
        error={errors.email}
        />

        <FormInput 
        name="password"
        type="password"
        label="Write Your Password"
        placeholder="*********"
        onChange={ChangeHandle}
        value={values.password}
        error={errors.password}
        />

        <FormInput 
        name="birthDate"
        type="date"
        label="Write Your BirthDath"
        onChange={ChangeHandle}
        value={values.birthDate}
        error={errors.birthDate}
        />

        <div className="form-group">
            <label className="mr-4">
                <input type="radio"
                name="gender"
                value='male'
                onChange={ChangeHandle}
                /> Male
            </label> 
            <label className="mr-4">
            <input type="radio"
                name="gender"
                value='female'
                onChange={ChangeHandle}
                /> Female
            </label>

            <label className="mr-4">
            <input type="radio"
                name="gender"
                value='other'
                onChange={ChangeHandle}
                /> Other
            </label>
            {errors.gender && <div className="invalid-feedback">{errors.gender}</div> }
        </div>

        <div className="form-group">
            <label>
                <input
                className="form-group mr-3"
                 type="checkbox"
                name="agreement"
                checked={agreement}
                onChange={CheakAgreement}
                 /> I agree All Terms and Condition
            </label>
        </div>

        <button 
        className="btn btn-primary"
        type="submit"
        disabled={!agreement}    
         >
            Create User
        </button>
    </form>
</div>
    )
}

TextInput.propTypes ={
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    ChangeHandle: PropTypes.func.isRequired,
    CheakAgreement: PropTypes.func.isRequired,
    ClickSubmit: PropTypes.func.isRequired
}


export default TextInput;