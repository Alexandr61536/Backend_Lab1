import './App.css';
import React, {Component} from 'react';

import Form from './components/Form/Form';

class App extends Component {
  state={
    main_host: "http://127.0.0.1:3010",
    routes: {
      form_request: "/api/form_request",
    }
  }
  render(){
    return (
      <div className="App">
        <Form
          host = {this.state.main_host}
          form_request_route={this.state.routes.form_request}
        />
      </div>
    );
  }
}

export default App;
