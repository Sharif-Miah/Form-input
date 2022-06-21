import React, {Component} from "react";

import '../form/myform.style.css'


class Myform extends Component{

    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    }

    changeHandle = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAgree = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    handleSkillChange = event =>{
        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            });
        }else{
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({skills})
        }
    }

    // handleSkillChange = event =>{
    //     if(event.target.checked){
    //         this.setState({
    //             skills: [...this.state.skills, event.target.value]
    //         });
    //     }else{
    //          const skills = this.state.skills.filter(skill => skill !== event.target.value)
    //          this.setState({skills})
    //     }
    // }

    render(){
            const {name, country, bio, birthday, agree, skills} = this.state
        return(
            <div>
                <h1>Hello Farhan</h1>
                <div>
                    <input type="text" name="name" className="form-control my-3" value={name} onChange={this.changeHandle} placeholder= 'Write your name'/>

                    <select name="country" value={country} className="form-control my-3" onChange={this.changeHandle}>
                        <option>Chose your country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="England">England</option>
                    </select>
                    
                    <textarea name="bio" value={bio} className="form-control my-3" onChange={this.changeHandle} placeholder='Write your text'></textarea>

                    <input type="date" name='birthday' className="form-control my-3" value={birthday} onChange={this.changeHandle}/>

                    <div className="Gender">

                        <input type="radio" className="Gender-m" name="gender" value='Male' onClick={this.changeHandle}/>Male

                        <input type="radio" className="Gender-m" name="gender" value='Female' onClick={this.changeHandle}/>Female
                        <input type="radio" className="Gender-m" name="gender" value='Others' onClick={this.changeHandle}/>Others

                    </div>
                    <div className="Gender">
                        <input type="checkbox" name="agree" checked={agree} onChange={this.handleAgree}/> I agree All Terms and Condition.
                    </div>
                    <div className="Gender">
                        Skill: <br />
                           <input type="checkbox" value='Java' name='skills' checked={skills.includes('Java')} onChange={this.handleSkillChange}/> Java
                           <input type="checkbox" value='Javascript' name='skills' checked={skills.includes('Javascript')} onChange={this.handleSkillChange}/> Javascript
                           <input type="checkbox" value='Python' name='skills' checked={skills.includes('Python')} onChange={this.handleSkillChange}/> Python
                           <input type="checkbox" value='GoLang' name='skills' checked={skills.includes('GoLang')} onChange={this.handleSkillChange}/> GoLange
                           <input type="checkbox" value='Ruby' name='skills' checked={skills.includes('Ruby')} onChange={this.handleSkillChange}/> Ryby
                    </div>
                    <div className="Gender">
                        <button className="Btn" onClick={()=>{console.log(this.state)}}>Show Data</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Myform;




{/* <input type="checkbox" name="skills" value='Java' checked={skills.includes('Java')} onChange={this.handleSkillChange}/>Java */}