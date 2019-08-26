import React, {Component} from 'react';
// IMPORT PROJECT REFERENCES

//import {LoadingIndicator} from '../shared/LoadingIndicator/LoadingIndicator';
//import {Error} from '../shared/Error/Error';

// COMPONENT

class SoldierForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data:{email: '',
    password: '',
    confirmPassword: ''}
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('wtf',this.state)
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
      this.setState({loading: true});
      console.log(this.state.data);
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
    const {data  } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit} noValidate>
          <h2 className="form-signin-heading">Create Account</h2>

          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email address"
              //required
              value={data.email}
              onChange={this.onChange}
              //autoFocus
            />
            <span className="help-block"></span>
          </div>

           <div className="form-row">
         <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
              value={data.password}
              onChange={this.onChange}
            />
            <span className="help-block"></span>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              required
              value={data.confirmPassword}
              onChange={this.onChange}
            />
            <span className="help-block"></span>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Create Account
          </button>
      </div>
        </form>
      </div>
    );
  }
}
export default SoldierForm;
