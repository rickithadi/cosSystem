import React, {Component} from 'react';
// IMPORT PROJECT REFERENCES
import {Form} from 'formsy-react-components';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
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
    milestone: [],
    achievement: [],
    offences: '',
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

  handleChange = achievement => {
    this.setState({achievement});
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
      appointment,
      Aappointment,
      milestone,
      achievement,
      offences,
      company,
      /*comd,*/
    } = this.state;
    const animatedComponents = makeAnimated();
    const ranks = [
      {value: '00', label: 'Private'},
      {value: '01', label: 'Lance Corporal '},
      {value: '02', label: 'Corporal '},
      {value: '03', label: 'Corporal First Class'},
      {value: '04', label: 'Option E-1'},
      {value: '05', label: 'Option E-2'},
    ];
    const companies = [
      {value: '00', label: 'Private'},
      {value: '01', label: 'Lance Corporal '},
      {value: '02', label: 'Corporal '},
      {value: '03', label: 'Corporal First Class'},
      {value: '04', label: 'Option E-1'},
      {value: '05', label: 'Option E-2'},
    ];
    const appointments = [
      {value: '00', label: 'Private'},
      {value: '01', label: 'Lance Corporal '},
      {value: '02', label: 'Corporal '},
      {value: '03', label: 'Corporal First Class'},
      {value: '04', label: 'Option E-1'},
      {value: '05', label: 'Option E-2'},
    ];
    const Aappointments = [
      {value: '00', label: 'Private'},
      {value: '01', label: 'Lance Corporal '},
      {value: '02', label: 'Corporal '},
      {value: '03', label: 'Corporal First Class'},
      {value: '04', label: 'Option E-1'},
      {value: '05', label: 'Option E-2'},
    ];
    const achievements = [
      {value: '00', label: 'Private'},
      {value: '01', label: 'Lance Corporal '},
      {value: '02', label: 'Corporal '},
      {value: '03', label: 'Corporal First Class'},
      {value: '04', label: 'Option E-1'},
      {value: '05', label: 'Option E-2'},
    ];

    const milestones = [
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
                value={rank}
                onChange={this.onChange}
                required>
                <option disabled hidden value="">
                  Rank
                </option>
                {ranks.map(rank => {
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
            <div className="col-md-2 mb-3">
              <select
                name="company"
                className="form-control"
                placeholder="company"
                value={company}
                onChange={this.onChange}
                required>
                <option disabled hidden value="">
                  Company
                </option>
                {companies.map(company => {
                  return (
                    <option key={company.value} value={company.label}>
                      {company.label}
                    </option>
                  );
                })}{' '}
              </select>
            </div>
            <div className="col-md-5 mb-3">
              <select
                name="appointment"
                className="form-control"
                placeholder="appointment"
                value={appointment}
                onChange={this.onChange}
                required>
                <option disabled hidden value="">
                  Appointment
                </option>
                {appointments.map(app => {
                  return (
                    <option key={app.value} value={app.label}>
                      {app.label}
                    </option>
                  );
                })}{' '}
              </select>
            </div>{' '}
            <div className="col-md-5 mb-3">
              <select
                name="Aappointment"
                className="form-control"
                placeholder="Aappointment"
                value={Aappointment}
                onChange={this.onChange}>
                <option disabled hidden value="">
                  Additional Appointment
                </option>
                {Aappointments.map(app => {
                  return (
                    <option key={app.value} value={app.label}>
                      {app.label}
                    </option>
                  );
                })}{' '}
              </select>
            </div>{' '}
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <Select
                name="achievements"
                className="form-control"
                placeholder="achievements"
                closeMenuOnSelect={false}
                components={animatedComponents}
                value={achievement}
                isMulti
                //onChange={this.onChange}
                options={achievements}
                onChange={this.handleChange}></Select>
            </div>{' '}
            <div className="col-md-6 mb-3">
              <select
                name="milestones"
                multiple
                className="form-control"
                placeholder="milestones"
                value={milestone}
                onChange={this.handleChange}>
                <option disabled hidden value="">
                  Milestones
                </option>
                {milestones.map(app => {
                  return (
                    <option key={app.value} value={app.label}>
                      {app.label}
                    </option>
                  );
                })}{' '}
              </select>
            </div>{' '}
          </div>

          <div className="form-row">
            <div className="col-md-10 mb-3  centered ">
              <textarea
                className="form-control"
                rows="3"
                type="textArea"
                name="offences"
                placeholder="offences"
                value={offences}
                onChange={this.onChange}></textarea>
            </div>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Create Account
          </button>
        </Form>
           
      </div>
    );
  }
}
export default SoldierForm;
