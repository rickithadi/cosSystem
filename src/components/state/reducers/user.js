import {USER_SUBMITTED, USER_CREATED, USER_UPDATED} from '../actions/user';

const initialState = {
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
 
};

export const userCreated = user => ({
  type: USER_CREATED,
  user,
});
export const userUpdated = user => ({
  type: USER_UPDATED,
  user,
});
export const userSubmitted = user => ({
  type: USER_SUBMITTED,
  user,
});
/*export default function userReducer(state = initialState, action = {}) {*/
//switch (action.type) {
//case USER_CREATED:
//return {...state, ...action.data.entities.user};
//case USER_SUBMITTED:
//return {...state, ...action.data.entities.user};
//case USER_UPDATED:
//return {...state, ...action.data.entities.user};
//default:
//return state;
//}
/*}*/
export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return {...state };
    case USER_SUBMITTED:
      return {...state };
    case USER_UPDATED:
      return {...state };
    default:
      return state;
  }
};
