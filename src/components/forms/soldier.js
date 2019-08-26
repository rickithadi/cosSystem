import React, {Component} from 'react';
// IMPORT PROJECT REFERENCES
import {Form, Input} from 'formsy-react-components';
//import {LoadingIndicator} from '../shared/LoadingIndicator/LoadingIndicator';
//import {Error} from '../shared/Error/Error';

// COMPONENT

class SoldierForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    loading: false,
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('wtf', this.state);
    const errors = this.validate(this.state);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
      this.setState({loading: true});
      console.log(this.state);
      //this.props.history.push('/demo');
    }
  };
  validate = data => {
    const errors = {};

    //if (!isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.query) errors.query = "Can't be blank";

    return errors;
  };

  componentDidMount() {
    //this.props.fetchZipCodes();
  }

  render() {
    const {email, password} = this.state;
    return (
      <div className="container">
        <Form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Soldier </h2>

          <div className="form-group">
            <Input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email address"
              required
              value={email}
              onChange={this.onChange}
              //autoFocus
            />
            <span className="help-block"></span>
          </div>

          <div className="form-row">
            <div className="form-group">
              <Input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={this.onChange}
              />
              <span className="help-block"></span>
            </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Create Account
            </button>
          </div>
        </Form>
      </div>
    );
  }
}
export default SoldierForm;
