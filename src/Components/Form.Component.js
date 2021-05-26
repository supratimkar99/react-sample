import { Component } from 'react';

class Form extends Component {
    initialState = {
        name: '',
        skill: '',
    }

    state = this.initialState;

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value  
        })
    }

    submitForm = () => {
        if(this.state.name && this.state.skill) {
            this.props.handleSubmit(this.state);
            this.setState(this.initialState);
        } else {
            alert("Invalid Input!");
        }
    }

    render() {
        return (
          <div className="formContainer">
            <form>
                <label>Add New Employee</label>
                <input
                    type = "text"
                    name = "name"
                    id = "name"
                    placeholder = "Employee's Name..."
                    value = {this.state.name}
                    onChange = {this.handleChange} /> <br />
                <input
                    type = "text"
                    name = "skill"
                    id = "skill"
                    placeholder = "Employee's Skill..."
                    value = {this.state.skill}
                    onChange = {this.handleChange} /> <br />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
          </div>
        );
    }
}

export default Form;