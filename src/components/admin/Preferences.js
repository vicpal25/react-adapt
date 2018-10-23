import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
import { Form, Field, FormSpy } from 'react-final-form'
import createDecorator from 'final-form-focus'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


const focusOnError = createDecorator()
const required = value => (value ? undefined : 'Required')
const onSubmitWithProps = (values, dispatch, props) => {
  console.log(props) // Object
}


export class Preferences extends Component {


  constructor(props) {
    super(props);
    this.props.fetchPreferences(11389513);
  }
  render() {

    console.log( this.props);

    const onSubmit = (values, another) => {

      actions.updatePreferences(11389513, values);

    }  

    return (
      <div>

      <h1>Application Preferences</h1>

      <Form
        initialValues={this.props.preferences[0]}
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
        decorators={[focusOnError]}
      >
        {({ handleSubmit, submitting, values }) => (
          
          <form onSubmit={handleSubmit.bind(this)} >

          <label>Distance Measurement</label>
          <Field name="distance_measurement" component="select"
          subscription={{
            value: true,
            active: true,
            error: true,
            touched: true
          }}          
          >
          <option />
          <option value="kilometers">❤️ Kilometers</option>
          <option value="miles">💚 Miles</option>
          {({ input, meta, placeholder }) => (
            <div className={meta.active ? 'active' : ''}>
              <input {...input} placeholder={placeholder} />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
          </Field>
          
          <label>Weekly Progress tracking</label>
          <Field name="weekly_progress_max" component="select"
          subscription={{
            value: true,
            active: true,
            error: true,
            touched: true
          }}          
          >
          <option />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          {({ input, meta, placeholder }) => (
            <div className={meta.active ? 'active' : ''}>
              <input {...input} placeholder={placeholder} />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
          </Field>

          <button type="submit" disabled={submitting}>
            Submit
          </button>

          <FormSpy subscription={{ values: true }}>
            {({ values }) => <pre>{JSON.stringify(values, undefined, 2)}</pre>}
          </FormSpy>


          </form>
        )}
      </Form>
    </div>

   
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { preferences: state.preferences };
}

// Preferences = reduxForm({ form : 'register' })(Preferences);

export default connect(mapStateToProps, actions)(requireAuth(Preferences))
