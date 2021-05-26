import { Component } from 'react';

//Class Component
class Clock extends Component {

    constructor(props) {
        super(props);
        //initializing a new state variable
        this.state = { date: new Date() }; 
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.clockTick(), 1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    clockTick = () => {
        this.setState({
          date: new Date()
        });
    }

    render() {
      return (
        <div>
          <h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}

export default Clock;