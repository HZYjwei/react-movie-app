import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from  'react-router-dom';
import Home from './Route/Home/index';
import User from './Route/User/index';
import Detail from './Route/Detail/index';
import Seat from './Route/Seat/index';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.setState({
      value: "hello"
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/seat" exact component={Seat} />
          {/* <Route path="/test" exact component={Test} />
          <Route path="/test/Com" exact component={Com} />
          <Route path="/login" exact component={Login} />
          <Route path="/user" exact render={() => isLogin ? <User /> : <Redirect to="/login" />} />
          <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
