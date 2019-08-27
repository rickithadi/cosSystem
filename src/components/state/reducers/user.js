import {USER_SUBMITTED, USER_CREATED, USER_UPDATED} from '../reducers/user.js';
export default function users(state = {}, action = {}) {
  switch (action.type) {
    case USER_CREATED:
      return {...state, ...action.data.entities.user};
    case USER_SUBMITTED:
      return {...state, ...action.data.entities.user};
    case USER_UPDATED:
      return {...state, ...action.data.entities.user};
    default:
      return state;
  }
}

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
