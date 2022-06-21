import React, {Component} from "react";

class Unconf extends Component{

    state = {
        name: '',
        email: '',
        password: '',
    }

    HandleClickNow = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    changeHanle = event =>{
        event.preventDefault();


        console.log(this.state);
        event.target.reset()
        this.setState({name: '', email: '', password: ''})
    }

    render(){
        const {name, email, password} = this.state
        return(
            <div>
                <h1>Hello js</h1>
                <form onSubmit={this.changeHanle}>
                    <input type="text" name="name" placeholder="Write your text" value={name} onChange={this.HandleClickNow}  className="form-control my-3" />

                    <input type="email" name="email" placeholder="Write your email" value={email} onChange={this.HandleClickNow} className="form-control my-3" o/>

                    <input type="password" name="password" placeholder="********" value={password} onChange={this.HandleClickNow} className="form-control my-3" />

                    <div className="Submit">
                        <button type="submit" className="Btn">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Unconf;