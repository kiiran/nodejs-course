import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Message Content', name: 'body' },
  { label: 'Recipients', name: 'recipients' }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => (
      <Field key={name} type="text" label={label} name={name} component={SurveyField} />
    ));
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}

          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </Fragment>
    );
  }
}

function validate({ title, subject, body, recipients }) {
  // This function has to return an object (errors). reduxForm checks the object
  // to see if it contains any values. If so, it will show errors appropriately
  const errors = {};

  // title validation
  if (!title) {
    errors.title = 'You must provide a title';
  }

  // subject validation
  if (!subject || subject.length < 6) {
    errors.subject = 'The subject should be at least 6 characters long';
  }

  // body validation
  if (!body || body.length < 10) {
    errors.body = 'Your message should be longer than that';
  }

  // recipients validation
  if (!recipients) {
    errors.recipients = 'You must add at least one recipient';
  } else {
    errors.recipients = validateEmails(recipients);
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  // I found the validation while typing annoying. Setting touchOnBlur to false solves that
  touchOnBlur: false
})(SurveyForm);
