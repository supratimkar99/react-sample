import { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Greeting from './Components/Geeting.Compoent';
import CRUD from './Components/CRUD.Component';

class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Greeting} />
          <Route path="/crud" exact component={CRUD} />
        </Router>
      </div>
    );
  }

}

export default App;
