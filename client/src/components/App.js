import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
