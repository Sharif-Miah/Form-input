import React, {Component} from "react";
import Form from "./FormInput";



class Split extends Component{

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
        return(
            <div>
                <h1>Hello Split</h1>
               <div> 
                <Form 
                values={this.state}
                HandleClickNow={this.HandleClickNow}
                changeHanle={this.changeHanle}
                />
               </div>
            </div>
        );
    }
}

export default Split;