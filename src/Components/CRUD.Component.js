import { Component } from 'react';
import { Link } from 'react-router-dom';
import TableHeader from './TableHeader.Component';
import TableBody from './TableBody.Component';
import Form from './Form.Component';

class CRUD extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees : []
        }
    }

    componentDidMount() {
        this.setState({
            employees: [ {
                name: 'Rohan',
                skill: 'React'
            },
            {
                name: 'Ajay',
                skill: 'Java'
            },]
        })
    }

    deleteEmployeeData = (index) => {
        this.setState({
            employees : this.state.employees.filter((employee, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (employee) => {
        this.setState({
            employees: [...this.state.employees, employee]
        })
    }

    render() {
        return (
            <div className="Container">
                <h1>CRUD Demo</h1>
                <div className="TableContainer">
                <table>
                    <TableHeader />
                    <TableBody employeeData={this.state.employees} deleteEmployee={this.deleteEmployeeData}/>
                </table>
                </div>
                <Form handleSubmit={this.handleSubmit}/>
                <Link to="/"><button className='link'>Back</button></Link>
            </div>
        );
    }
}

export default CRUD;