import _ from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onBackClick, values, submitSurvey }) => {
  const fields = _.map(formFields, ({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{values[name]}</div>
    </div>
  ));

  return (
    <Fragment>
      <h5>Please confirm your entries</h5>
      {fields}
      <button className="red white-text btn-flat" onClick={onBackClick}>
        Back
      </button>
      <button
        className="teal white-text btn-flat right"
        onClick={() => submitSurvey(values)}
      >
        Send Survey
        <i className="material-icons right">check</i>
      </button>
    </Fragment>
  );
};

const mapStateToProps = ({ form }) => ({ values: form.surveyForm.values });

export default connect(mapStateToProps, actions)(SurveyFormReview);
