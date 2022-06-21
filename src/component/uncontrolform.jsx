import React, { Component } from "react";

class Uncontrol extends Component{

    state = {
        name: '',
        email: '',
        password: '',
    }


    changeHandleClick = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChange = event => {
        event.preventDefault()
        const data = {}
        
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;

        console.log(data);
        event.target.reset();
    }


    render(){
        const {name, email, password} = this.state
        return(
            <div>
                <h1>Hello React</h1>
                <div>
                    <form onSubmit={this.handleChange}>
                        <input type="text" name="name" className="form-control my-3" placeholder="name" value={name} onChange={this.changeHandleClick}/>

                        <input type="Email" name="email" className="form-control my-3" placeholder="email" value={email} onChange={this.changeHandleClick}/>

                        <input type="password" name="password" className="form-control my-3" placeholder="*****" value={password} onChange={this.changeHandleClick}/>
                        <div className="Submit">
                        <button className="Btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Uncontrol;