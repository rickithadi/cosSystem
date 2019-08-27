import React, {Component} from 'react';
// IMPORT PROJECT REFERENCES
import {Form} from 'formsy-react-components';
//import {LoadingIndicator} from '../shared/LoadingIndicator/LoadingIndicator';
//import {Error} from '../shared/Error/Error';

// COMPONENT

class SoldierForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    appointment: '',
    Aappointment: '',
    milestone: '',
    achievement: '',
    company: '',
    rank: '',
    comd: false,
    surname: '',
    name: '',
    loading: false,
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    console.log(this.state, e);
  };

  componentDidMount() {
    //this.props.fetchZipCodes();
  }

  /*eslint no-unused-vars: ["error", { "args": "all" }]*/
  render() {
    const {
      rank,
      name,
      surname,
      /*      appointment,*/
      //Aappointment,
      //milestone,
      //achievement,
      //company,
      /*comd,*/
    } = this.state;
    const ranks = [
      {value: '00', label: 'Private'},
      {value: '01', label: 'Lance Corporal '},
      {value: '02', label: 'Corporal '},
      {value: '03', label: 'Corporal First Class'},
      {value: '04', label: 'Option E-1'},
      {value: '05', label: 'Option E-2'},
    ];

    return (
      <div className="container">
        <Form className="form-signin" onValidSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Soldier </h2>

          <div className="form-row">
            <div className="col-md-2 mb-3">
              <select
                name="rank"
                className="form-control"
                placeholder="rank"
                value={rank.value}
                onChange={this.onChange}
                required>
                {ranks.map((rank) => {
                  return (
                    <option key={rank.value} value={rank.label}>
                      {rank.label}
                    </option>
                  );
                })}{' '}
              </select>
            </div>
            <div className="col-md-10 mb-3  ">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">First and last name</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first"
                  name="name"
                  required
                  value={name}
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  name="surname"
                  className="form-control"
                  placeholder="last"
                  required
                  value={surname}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
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
