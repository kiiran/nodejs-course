import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { review: false };

  toggleReview = () => {
    const { review } = this.state;
    this.setState({ review: !review });
  };

  render() {
    if (this.state.review) {
      return <SurveyFormReview onBackClick={this.toggleReview} />;
    }
    return <SurveyForm onSurveySubmit={this.toggleReview} />;
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);
